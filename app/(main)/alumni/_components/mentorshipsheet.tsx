"use client"

import { useState } from "react"
import {
    Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { submitMentorshipRequest } from "@/actions/alumni-requests.action"

interface MentorshipSheetProps {
    children: React.ReactNode
}

export function MentorshipSheet({ children }: MentorshipSheetProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        graduationYear: "",
        currentRole: "",
        interests: "",
        message: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await submitMentorshipRequest(formData)
        if (result.success) {
            toast.success("Mentorship request submitted successfully!")
            setIsOpen(false)
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                graduationYear: "",
                currentRole: "",
                interests: "",
                message: "",
            })
        } else {
            toast.error(result.error || "Failed to submit request")
        }
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent side="right" className="sm:max-w-2xl overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Join Mentorship Program</SheetTitle>
                    <SheetDescription>
                        Make a meaningful impact by mentoring current students
                    </SheetDescription>
                </SheetHeader>
                <form onSubmit={handleSubmit} className="space-y-6 py-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                                id="firstName"
                                required
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                                id="lastName"
                                required
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+977 9847370585"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="graduationYear">Graduation Year</Label>
                            <Input
                                id="graduationYear"
                                value={formData.graduationYear}
                                onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                                placeholder="e.g. 2010"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="currentRole">Current Role/Profession</Label>
                            <Input
                                id="currentRole"
                                value={formData.currentRole}
                                onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                                placeholder="e.g. Software Engineer"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="interests">Areas of Interest/Expertise</Label>
                        <Textarea
                            id="interests"
                            value={formData.interests}
                            onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                            placeholder="e.g. Technology, Business, Healthcare..."
                            className="min-h-[80px]"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about your mentoring interests and availability..."
                            className="min-h-[100px]"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">Submit Request</Button>
                    </div>
                </form>
            </SheetContent>
        </Sheet>
    )
}