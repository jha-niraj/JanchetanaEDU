"use client"

import { useState } from "react"
import { useFormState } from "react-dom"
import { SubmitButton } from "./submitbutton"
import { toast } from "sonner"
import {
    AlumniFormState, submitAlumniRegistration
} from "@/actions/alumni.action"
import {
    Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { FormErrorMessage } from "./formerrormsg"

const initialState: AlumniFormState = {}

export function AlumniRegistrationForm() {
    const [isOpen, setIsOpen] = useState(false)
    const [state, formAction] = useFormState(submitAlumniRegistration, initialState)

    // Show toast message and close sheet on successful submission
    if (state.success && isOpen) {
        toast.success(state.message)
        setIsOpen(false)
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Join Alumni Network</Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-3xl md:max-w-4xl overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Alumni Registration</SheetTitle>
                    <SheetDescription>
                        Register to join the alumni network and stay connected with your alma mater.
                    </SheetDescription>
                </SheetHeader>
                <form action={formAction} className="space-y-6 py-6">
                    {
                        state.errors?._form && (
                            <div className="rounded-md bg-destructive/15 p-3">
                                <FormErrorMessage errors={state.errors._form} />
                            </div>
                        )
                    }
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Personal Information</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name *</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    placeholder="John"
                                    aria-describedby="firstName-error"
                                />
                                {
                                    state.errors?.firstName && (
                                        <FormErrorMessage id="firstName-error" errors={state.errors.firstName} />
                                    )
                                }
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name *</Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Doe"
                                    aria-describedby="lastName-error"
                                />
                                {
                                    state.errors?.lastName && (
                                        <FormErrorMessage id="lastName-error" errors={state.errors.lastName} />
                                    )
                                }
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email *</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john.doe@example.com"
                                    aria-describedby="email-error"
                                />
                                {
                                    state.errors?.email && (
                                        <FormErrorMessage id="email-error" errors={state.errors.email} />
                                    )
                                }
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    placeholder="+977 9847370585"
                                    aria-describedby="phone-error"
                                />
                                {
                                    state.errors?.phone && (
                                        <FormErrorMessage id="phone-error" errors={state.errors.phone} />
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Education & Career</h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="graduationYear">Graduation Year *</Label>
                                <Input
                                    id="graduationYear"
                                    name="graduationYear"
                                    placeholder="e.g. 2010"
                                    aria-describedby="graduationYear-error"
                                />
                                {
                                    state.errors?.graduationYear && (
                                        <FormErrorMessage id="graduationYear-error" errors={state.errors.graduationYear} />
                                    )
                                }
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="course">Course/Program</Label>
                                <Input
                                    id="course"
                                    name="course"
                                    placeholder="e.g. Computer Science"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="profession">Current Profession</Label>
                                <Input
                                    id="profession"
                                    name="profession"
                                    placeholder="e.g. Software Engineer"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company">Company/Organization</Label>
                                <Input
                                    id="company"
                                    name="company"
                                    placeholder="e.g. Tech Innovators Inc."
                                />
                            </div>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Contact Information</h3>

                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input
                                id="address"
                                name="address"
                                placeholder="e.g. Ward No. 8, Laxmanpur, Kapilvastu"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <Input
                                    id="city"
                                    name="city"
                                    placeholder="e.g. Kathmandu, Pokhara, Laxmanpur, Butwal"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="country">Country</Label>
                                <Input
                                    id="country"
                                    name="country"
                                    placeholder="Nepal"
                                />
                            </div>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Additional Information</h3>

                        <div className="space-y-2">
                            <Label htmlFor="bio">Brief Bio</Label>
                            <Textarea
                                id="bio"
                                name="bio"
                                placeholder="Tell us about yourself..."
                                className="resize-y min-h-[100px]"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="interests">Interests (comma separated)</Label>
                            <Input
                                id="interests"
                                name="interests"
                                placeholder="e.g. Technology, Hiking, Photography"
                            />
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Social Media (Optional)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="linkedin">LinkedIn</Label>
                                <Input
                                    id="linkedin"
                                    name="linkedin"
                                    placeholder="https://linkedin.com/in/username"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="twitter">Twitter</Label>
                                <Input
                                    id="twitter"
                                    name="twitter"
                                    placeholder="https://twitter.com/username"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="facebook">Facebook</Label>
                                <Input
                                    id="facebook"
                                    name="facebook"
                                    placeholder="https://facebook.com/username"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </Button>
                        <SubmitButton>Submit Registration</SubmitButton>
                    </div>
                </form>
            </SheetContent>
        </Sheet>
    )
}