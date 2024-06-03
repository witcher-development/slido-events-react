import { InputHTMLAttributes, forwardRef } from 'react'


type Props = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}

export const TextField = forwardRef<HTMLInputElement, Props>(({ label, ...inputProps }, ref) => {
    return (
        <div>
            <label>
                {label}
            </label>

            <div>
                <input
                    {...inputProps}
                    ref={ref}
                />
            </div>
        </div>
    )
})
