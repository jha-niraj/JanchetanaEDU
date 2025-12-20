"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { submitDonationRequest } from "@/actions/alumni-requests.action"

interface DonateSheetProps {
    children: React.ReactNode
}

export function DonateSheet({ children }: DonateSheetProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        amount: "",
        message: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await submitDonationRequest(formData)
        if (result.success) {
            toast.success("Donation request submitted successfully! We'll contact you soon.")
            setIsOpen(false)
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                amount: "",
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
                    <SheetTitle>Make a Donation</SheetTitle>
                    <SheetDescription>
                        Support future generations of students at Janchetana School
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
                    <div className="space-y-2">
                        <Label htmlFor="amount">Donation Amount (NPR)</Label>
                        <Input
                            id="amount"
                            type="text"
                            value={formData.amount}
                            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                            placeholder="e.g. 5000, 10000"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Any specific purpose or message for your donation..."
                            className="min-h-[100px]"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">Submit Donation Request</Button>
                    </div>
                </form>
            </SheetContent>
        </Sheet>
    )
}

