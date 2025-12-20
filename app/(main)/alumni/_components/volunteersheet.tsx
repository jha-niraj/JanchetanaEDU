"use client"

import { useState, useEffect } from "react"
import {
    Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { toast } from "sonner"
import {
    submitVolunteerRequest, getVolunteerOpportunities
} from "@/actions/alumni-requests.action"

interface VolunteerSheetProps {
    children: React.ReactNode
}

export function VolunteerSheet({ children }: VolunteerSheetProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [opportunities, setOpportunities] = useState<Array<{ id: string; title: string; description: string }>>([])
    const [formData, setFormData] = useState({
        opportunityId: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    useEffect(() => {
        async function fetchOpportunities() {
            const result = await getVolunteerOpportunities()
            if (result.success && result.opportunities) {
                setOpportunities(result.opportunities)
            }
        }
        if (isOpen) {
            fetchOpportunities()
        }
    }, [isOpen])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await submitVolunteerRequest(formData)
        if (result.success) {
            toast.success("Volunteer request submitted successfully!")
            setIsOpen(false)
            setFormData({
                opportunityId: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                subject: "",
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
                    <SheetTitle>Explore Volunteer Opportunities</SheetTitle>
                    <SheetDescription>
                        Share your time and expertise with the Janchetana School community
                    </SheetDescription>
                </SheetHeader>
                <form onSubmit={handleSubmit} className="space-y-6 py-6">
                    <div className="space-y-2">
                        <Label htmlFor="opportunity">Select Opportunity (Optional)</Label>
                        <Select value={formData.opportunityId} onValueChange={(value) => setFormData({ ...formData, opportunityId: value })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose an opportunity" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="General">None - General Inquiry</SelectItem>
                                {
                                    opportunities.map((opp) => (
                                        <SelectItem key={opp.id} value={opp.id}>
                                            {opp.title}
                                        </SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>
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
                        <Label htmlFor="subject">Subject/Area of Interest</Label>
                        <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="e.g. Career Day Speaker, Event Organizer"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about how you'd like to volunteer..."
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