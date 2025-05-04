'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

// Define interfaces based on Prisma schema
interface Teacher {
	id: string;
	name: string;
	subject: string;
	email: string;
	phone: string;
	createdAt: Date;
	updatedAt: Date;
}

interface TeacherData {
	name: string;
	email: string;
	subject: string;
	phone?: string;
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

export async function getTeachers(): Promise<TeachersResponse> {
	try {
		const teachers = await prisma.teacher.findMany({
			orderBy: {
				createdAt: 'desc'
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
			where: { id }
		});

		if (!teacher) {
			return { success: false, error: "Teacher not found" };
		}

		return { success: true, teacher };
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

		// Create the teacher
		const teacher = await prisma.teacher.create({
			data: {
				name: teacherData.name,
				subject: teacherData.subject,
				email: teacherData.email,
				phone: teacherData.phone || "",
			}
		});

		revalidatePath('/teachers');
		revalidatePath('/dashboard');

		return { success: true, teacher };
	} catch (err) {
		const error = err as Error;
		console.error("Failed to add teacher:", error);
		return { success: false, error: "Failed to add teacher" };
	}
}

/**
 * Update an existing teacher
 */
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

		// Check if another teacher with the same email exists (for email updates)
		if (teacherData.email !== existingTeacher.email) {
			const emailExists = await prisma.teacher.findUnique({
				where: { email: teacherData.email }
			});

			if (emailExists) {
				return { success: false, error: "Another teacher with this email already exists" };
			}
		}

		// Update the teacher
		const teacher = await prisma.teacher.update({
			where: { id },
			data: {
				name: teacherData.name,
				subject: teacherData.subject,
				email: teacherData.email,
				phone: teacherData.phone || "",
			}
		});

		revalidatePath('/teachers');
		revalidatePath(`/teachers/${id}`);
		revalidatePath('/dashboard');

		return { success: true, teacher };
	} catch (err) {
		const error = err as Error;
		console.error(`Failed to update teacher with ID ${id}:`, error);
		return { success: false, error: "Failed to update teacher" };
	}
}

/**
 * Delete a teacher
 */
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

/**
 * Get teacher count
 */
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