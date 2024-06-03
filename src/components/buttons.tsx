import { ComponentPropsWithoutRef, PropsWithChildren } from "react"


export const Button = ({ children, ...buttonAttrs }: PropsWithChildren<ComponentPropsWithoutRef<"button">>) => {
    return (
        <button
            className="flex items-center gap-2 text-white font-bold bg-green-600 hover:bg-green-500 active:shadow-inner active:bg-green-600 transition-colors rounded-lg h-8 p-3 text-sm"
            {...buttonAttrs}
        >
            {children}
        </button>
    )
}
