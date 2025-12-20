"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

type SubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
    loadingText?: string
}

export function SubmitButton({
    children,
    className,
    loadingText = "Processing...",
    ...props
}: SubmitButtonProps) {
    const { pending } = useFormStatus()

    return (
        <Button
            className={cn(className)}
            type="submit"
            disabled={pending}
            aria-disabled={pending}
            {...props}
        >
            {
                pending ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {loadingText}
                    </>
                ) : (
                    children
                )
            }
        </Button>
    )
}