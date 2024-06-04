import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import DeleteIcon from 'src/assets/delete.svg?react'


export const Button = ({ children, ...buttonAttrs }: PropsWithChildren<ComponentPropsWithoutRef<'button'>>) => {
    return (
        <button
            {...buttonAttrs}
            className={`flex items-center gap-2 text-white font-bold bg-green-600 hover:bg-green-500 active:shadow-inner active:bg-green-600 transition-colors rounded-lg h-8 p-3 text-sm disabled:bg-neutral-400 ${buttonAttrs.className}`}
        >
            {children}
        </button>
    )
}


export const DeteleButton = (props: ComponentPropsWithoutRef<'button'>) => (
    <button {...props} className={`w-6 h-6 rounded-md ring-1 ring-inset ring-red-500 bg-white p-1`}>
        <DeleteIcon />
    </button>
)
