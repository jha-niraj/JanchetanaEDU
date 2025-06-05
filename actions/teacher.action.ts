'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import cloudinary from "@/utils/cloudinary"

// Define interfaces based on Prisma schema
interface Teacher {
	id: string;
	name: string;
	subject: string;
	email: string;
	phone: string;
	image: string;
	createdAt: Date;
	updatedAt: Date;
}

interface TeacherData {
	name: string;
	email: string;
	subject: string;
	phone?: string;
	image?: File;
}

interface TeacherResponse<T> {
	success: boolean;
	teacher?: T;
	error?: string;
}

interface TeachersResponse {
	success: boolean;
	teachers?: Teacher[];
	error?: string;
}

interface CountResponse {
	success: boolean;
	count?: number;
	error?: string;
}

async function uploadToCloudinary(file: File): Promise<string> {
	try {
		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		return new Promise((resolve, reject) => {
			cloudinary.uploader.upload_stream((error, result) => {
				if (error) reject(error);
				else resolve(result?.secure_url || '');
			}).end(buffer);
		});
	} catch (error) {
		console.error('Error uploading to Cloudinary:', error);
		throw new Error('Failed to upload image');
	}
}

export async function getTeachers(): Promise<TeachersResponse> {
	try {
		const teachers = await prisma.teacher.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			select: {
				id: true,
				name: true,
				subject: true,
				email: true,
				phone: true,
				image: true,
				createdAt: true,
				updatedAt: true,
			}
		});

		return { success: true, teachers };
	} catch (err) {
		const error = err as Error;
		console.error("Failed to fetch teachers:", error);
		return { success: false, error: "Failed to fetch teachers" };
	}
}

export async function getTeacherById(id: string): Promise<TeacherResponse<Teacher>> {
	try {
		const teacher = await prisma.teacher.findUnique({
			where: { id },
			select: {
				id: true,
				name: true,
				subject: true,
				email: true,
				phone: true,
				image: true,
				createdAt: true,
				updatedAt: true,
			}
		});

		if (!teacher) {
			return { success: false, error: "Teacher not found" };
		}

		return { success: true, teacher: teacher as Teacher };
	} catch (err) {
		const error = err as Error;
		console.error(`Failed to fetch teacher with ID ${id}:`, error);
		return { success: false, error: "Failed to fetch teacher" };
	}
}

export async function addTeacher(teacherData: TeacherData): Promise<TeacherResponse<Teacher>> {
	try {
		// Basic validation
		if (!teacherData.name || !teacherData.email || !teacherData.subject) {
			return { success: false, error: "Name, email, and subject are required" };
		}

		// Check if teacher with this email already exists
		const existingTeacher = await prisma.teacher.findUnique({
			where: { email: teacherData.email }
		});

		if (existingTeacher) {
			return { success: false, error: "A teacher with this email already exists" };
		}

		let imageUrl = "https://res.cloudinary.com/dhfuckcax/image/upload/v1739810646/krk8x7fzjukcfcoefrea.jpg";

		// Upload image if provided
		if (teacherData.image) {
			imageUrl = await uploadToCloudinary(teacherData.image);
		}

		// Create the teacher
		const teacher = await prisma.teacher.create({
			data: {
				name: teacherData.name,
				subject: teacherData.subject,
				email: teacherData.email,
				phone: teacherData.phone || "",
				image: imageUrl,
			}
		});

		revalidatePath('/dashboard/teachers');
		revalidatePath('/dashboard');

		return { success: true, teacher };
	} catch (err) {
		const error = err as Error;
		console.error("Failed to add teacher:", error);
		return { success: false, error: "Failed to add teacher" };
	}
}

export async function updateTeacher(id: string, teacherData: TeacherData): Promise<TeacherResponse<Teacher>> {
	try {
		// Basic validation
		if (!teacherData.name || !teacherData.email || !teacherData.subject) {
			return { success: false, error: "Name, email, and subject are required" };
		}

		// Check if teacher exists
		const existingTeacher = await prisma.teacher.findUnique({
			where: { id }
		});

		if (!existingTeacher) {
			return { success: false, error: "Teacher not found" };
		}

		if (teacherData.email !== existingTeacher.email) {
			const emailExists = await prisma.teacher.findUnique({
				where: { email: teacherData.email }
			});

			if (emailExists) {
				return { success: false, error: "Another teacher with this email already exists" };
			}
		}

		let imageUrl = existingTeacher.image;

		// Upload new image if provided
		if (teacherData.image) {
			imageUrl = await uploadToCloudinary(teacherData.image);
		}

		// Update the teacher
		const teacher = await prisma.teacher.update({
			where: { id },
			data: {
				name: teacherData.name,
				subject: teacherData.subject,
				email: teacherData.email,
				phone: teacherData.phone || "",
				image: imageUrl,
			}
		});

		revalidatePath('/dashboard/teachers');
		revalidatePath('/dashboard');

		return { success: true, teacher };
	} catch (err) {
		const error = err as Error;
		console.error(`Failed to update teacher with ID ${id}:`, error);
		return { success: false, error: "Failed to update teacher" };
	}
}

export async function deleteTeacher(id: string): Promise<{ success: boolean; error?: string }> {
	try {
		// Check if teacher exists
		const existingTeacher = await prisma.teacher.findUnique({
			where: { id }
		});

		if (!existingTeacher) {
			return { success: false, error: "Teacher not found" };
		}

		// Delete the teacher
		await prisma.teacher.delete({
			where: { id }
		});

		revalidatePath('/teachers');
		revalidatePath('/dashboard');

		return { success: true };
	} catch (err) {
		const error = err as Error;
		console.error(`Failed to delete teacher with ID ${id}:`, error);
		return { success: false, error: "Failed to delete teacher" };
	}
}

export async function getTeacherCount(): Promise<CountResponse> {
	try {
		const count = await prisma.teacher.count();
		return { success: true, count };
	} catch (err) {
		const error = err as Error;
		console.error("Failed to count teachers:", error);
		return { success: false, error: "Failed to count teachers" };
	}
}