'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

// Define interfaces based on Prisma schema
interface Article {
	id: string;
	title: string;
	slug: string;
	content: string;
	status: string;
	teacherId?: string | null;
	createdAt: Date;
	updatedAt: Date;
	teacher?: {
		id: string;
		name: string;
	} | null;
}

interface ArticleData {
	title: string;
	content: string;
	status?: string;
	slug?: string;
}

// Helper function to generate slug from title
function generateSlug(title: string): string {
	return title
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

interface ArticleResponse<T> {
	success: boolean;
	article?: T;
	error?: string;
}

interface ArticlesResponse {
	success: boolean;
	articles?: Article[];
	error?: string;
}

interface CountResponse {
	success: boolean;
	count?: number;
	error?: string;
}

export async function getArticles(): Promise<ArticlesResponse> {
	try {
		const articles = await prisma.article.findMany({
			include: {
				teacher: true
			},
			orderBy: {
				createdAt: 'desc'
			}
		});

		return { success: true, articles };
	} catch (err) {
		const error = err as Error;
		console.error("Failed to fetch articles:", error);
		return { success: false, error: "Failed to fetch articles" };
	}
}

export async function getPublishedArticles(): Promise<ArticlesResponse> {
	try {
		const articles = await prisma.article.findMany({
			where: {
				status: 'published'
			},
			include: {
				teacher: true
			},
			orderBy: {
				createdAt: 'desc'
			}
		});

		return { success: true, articles };
	} catch (err) {
		const error = err as Error;
		console.error("Failed to fetch published articles:", error);
		return { success: false, error: "Failed to fetch published articles" };
	}
}

export async function getArticleBySlug(slug: string): Promise<ArticleResponse<Article>> {
	try {
		const article = await prisma.article.findUnique({
			where: { slug },
			include: {
				teacher: true
			}
		});

		if (!article) {
			return { success: false, error: "Article not found" };
		}

		return { success: true, article };
	} catch (err) {
		const error = err as Error;
		console.error(`Failed to fetch article with slug ${slug}:`, error);
		return { success: false, error: "Failed to fetch article" };
	}
}

/**
 * Get latest articles
 */
export async function getLatestArticles(limit: number = 5): Promise<ArticlesResponse> {
	try {
		const articles = await prisma.article.findMany({
			include: {
				teacher: true
			},
			where: {
				status: 'published'
			},
			orderBy: {
				createdAt: 'desc'
			},
			take: limit
		});

		return { success: true, articles };
	} catch (err) {
		const error = err as Error;
		console.error("Failed to fetch latest articles:", error);
		return { success: false, error: "Failed to fetch latest articles" };
	}
}

/**
 * Get latest principal articles (articles written by principal, not teachers)
 */
export async function getLatestPrincipalArticles(limit: number = 5): Promise<ArticlesResponse> {
	try {
		const articles = await prisma.article.findMany({
			include: {
				teacher: true
			},
			where: {
				status: 'published',
				teacherId: null, // Principal articles don't have teacherId
				userId: { not: null } // But they have userId (principal)
			},
			orderBy: {
				createdAt: 'desc'
			},
			take: limit
		});

		return { success: true, articles };
	} catch (err) {
		const error = err as Error;
		console.error("Failed to fetch latest principal articles:", error);
		return { success: false, error: "Failed to fetch latest principal articles" };
	}
}

/**
 * Get article by ID
 */
export async function getArticleById(id: string): Promise<ArticleResponse<Article>> {
	try {
		const article = await prisma.article.findUnique({
			where: { id },
			include: {
				teacher: true
			}
		});

		if (!article) {
			return { success: false, error: "Article not found" };
		}

		return { success: true, article };
	} catch (err) {
		const error = err as Error;
		console.error(`Failed to fetch article with ID ${id}:`, error);
		return { success: false, error: "Failed to fetch article" };
	}
}

/**
 * Add a new article
 */
export async function addArticle(articleData: ArticleData, teacherId: string | null = null): Promise<ArticleResponse<Article>> {
	try {
		// Basic validation
		if (!articleData.title || !articleData.content) {
			return { success: false, error: "Title and content are required" };
		}

		// Generate slug if not provided
		let slug = articleData.slug || generateSlug(articleData.title);
		
		// Ensure slug is unique
		let slugExists = await prisma.article.findUnique({ where: { slug } });
		let counter = 1;
		while (slugExists) {
			slug = `${generateSlug(articleData.title)}-${counter}`;
			slugExists = await prisma.article.findUnique({ where: { slug } });
			counter++;
		}

		// Create the article
		const article = await prisma.article.create({
			data: {
				title: articleData.title,
				slug: slug,
				content: articleData.content,
				status: articleData.status || 'draft',
				teacherId: teacherId,
			},
			include: {
				teacher: true
			}
		});

		revalidatePath('/articles');
		revalidatePath('/dashboard');

		return { success: true, article };
	} catch (err) {
		const error = err as Error;
		console.error("Failed to add article:", error);
		return { success: false, error: "Failed to add article" };
	}
}

/**
 * Update an existing article
 */
export async function updateArticle(id: string, articleData: ArticleData): Promise<ArticleResponse<Article>> {
	try {
		// Basic validation
		if (!articleData.title || !articleData.content) {
			return { success: false, error: "Title and content are required" };
		}

		// Check if article exists
		const existingArticle = await prisma.article.findUnique({
			where: { id }
		});

		if (!existingArticle) {
			return { success: false, error: "Article not found" };
		}

		// Generate slug if title changed
		let slug = existingArticle.slug;
		if (articleData.title !== existingArticle.title) {
			slug = articleData.slug || generateSlug(articleData.title);
			// Ensure slug is unique (excluding current article)
			let slugExists = await prisma.article.findFirst({ 
				where: { slug, id: { not: id } } 
			});
			let counter = 1;
			while (slugExists) {
				slug = `${generateSlug(articleData.title)}-${counter}`;
				slugExists = await prisma.article.findFirst({ 
					where: { slug, id: { not: id } } 
				});
				counter++;
			}
		}

		// Update the article
		const article = await prisma.article.update({
			where: { id },
			data: {
				title: articleData.title,
				slug: slug,
				content: articleData.content,
				status: articleData.status || existingArticle.status,
			},
			include: {
				teacher: true
			}
		});

		revalidatePath('/articles');
		revalidatePath(`/articles/${article.slug}`);
		revalidatePath('/dashboard');

		return { success: true, article };
	} catch (err) {
		const error = err as Error;
		console.error(`Failed to update article with ID ${id}:`, error);
		return { success: false, error: "Failed to update article" };
	}
}

/**
 * Delete an article
 */
export async function deleteArticle(id: string): Promise<{ success: boolean; error?: string }> {
	try {
		// Check if article exists
		const existingArticle = await prisma.article.findUnique({
			where: { id }
		});

		if (!existingArticle) {
			return { success: false, error: "Article not found" };
		}

		// Delete the article
		await prisma.article.delete({
			where: { id }
		});

		revalidatePath('/articles');
		revalidatePath('/dashboard');

		return { success: true };
	} catch (err) {
		const error = err as Error;
		console.error(`Failed to delete article with ID ${id}:`, error);
		return { success: false, error: "Failed to delete article" };
	}
}

/**
 * Get article count
 */
export async function getArticleCount(): Promise<CountResponse> {
	try {
		const count = await prisma.article.count();
		return { success: true, count };
	} catch (err) {
		const error = err as Error;
		console.error("Failed to count articles:", error);
		return { success: false, error: "Failed to count articles" };
	}
}

/**
 * Get published article count
 */
export async function getPublishedArticleCount(): Promise<CountResponse> {
	try {
		const count = await prisma.article.count({
			where: {
				status: 'published'
			}
		});
		return { success: true, count };
	} catch (err) {
		const error = err as Error;
		console.error("Failed to count published articles:", error);
		return { success: false, error: "Failed to count published articles" };
	}
}

/**
 * Assign an article to a teacher
 */
export async function assignArticleToTeacher(articleId: string, teacherId: string): Promise<ArticleResponse<Article>> {
	try {
		// Check if article exists
		const existingArticle = await prisma.article.findUnique({
			where: { id: articleId }
		});

		if (!existingArticle) {
			return { success: false, error: "Article not found" };
		}

		// Check if teacher exists
		const existingTeacher = await prisma.teacher.findUnique({
			where: { id: teacherId }
		});

		if (!existingTeacher) {
			return { success: false, error: "Teacher not found" };
		}

		// Assign the article to the teacher
		const article = await prisma.article.update({
			where: { id: articleId },
			data: {
				teacherId: teacherId
			},
			include: {
				teacher: true
			}
		});

		revalidatePath('/articles');
		revalidatePath(`/articles/${articleId}`);
		revalidatePath('/teachers');
		revalidatePath(`/teachers/${teacherId}`);

		return { success: true, article };
	} catch (err) {
		const error = err as Error;
		console.error(`Failed to assign article ${articleId} to teacher ${teacherId}:`, error);
		return { success: false, error: "Failed to assign article to teacher" };
	}
}