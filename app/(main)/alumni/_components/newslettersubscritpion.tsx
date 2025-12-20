"use client"

import { useFormState } from "react-dom"
import { toast } from "sonner"
import { useEffect } from "react"
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    NewsletterFormState, subscribeToNewsletter
} from "@/actions/alumni.action"
import { FormErrorMessage } from "./formerrormsg"
import { SubmitButton } from "./submitbutton"

const initialState: NewsletterFormState = {}

export function NewsletterSubscriptionForm() {
    const [state, formAction] = useFormState(subscribeToNewsletter, initialState)

    useEffect(() => {
        if (state.success) {
            toast.success(state.message)
            // Could reset form here if needed
        }
    }, [state.success, state.message])

    return (
        <Card>
            <CardHeader>
                <CardTitle>Subscribe to Alumni Newsletter</CardTitle>
                <CardDescription>
                    Receive quarterly updates on alumni events, school news, and opportunities to get involved.
                </CardDescription>
            </CardHeader>
            <form action={formAction}>
                <CardContent>
                    {
                        state.errors?._form && (
                            <div className="rounded-md bg-destructive/15 p-3 mb-4">
                                <FormErrorMessage errors={state.errors._form} />
                            </div>
                        )
                    }
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First name *</Label>
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
                                <Label htmlFor="lastName">Last name *</Label>
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
                    </div>
                </CardContent>
                <CardFooter>
                    <SubmitButton className="w-full">Subscribe</SubmitButton>
                </CardFooter>
            </form>
        </Card>
    )
}