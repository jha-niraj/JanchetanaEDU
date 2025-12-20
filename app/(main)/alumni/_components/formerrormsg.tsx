import React from "react"

type FormErrorMessageProps = {
    id?: string
    errors?: string[]
}

export function FormErrorMessage({ id, errors }: FormErrorMessageProps) {
    if (!errors || errors.length === 0) return null

    return (
        <div id={id} aria-live="polite" className="text-sm font-medium text-destructive">
            {
                errors.map((error, index) => (
                    <p key={index}>{error}</p>
                ))
            }
        </div>
    )
}