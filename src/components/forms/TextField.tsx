import { InputHTMLAttributes, forwardRef } from 'react'

import { LabelWithHint } from './LableWithHint'
import { textBoxStyles } from './styles'


type Props = InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    error?: string
}

export const TextField = forwardRef<HTMLInputElement, Props>(({ label, error, ...inputProps }, ref) => {
    return (
        <div>
            {label && (
                <LabelWithHint
                    label={label}
                    error={error}
                    inputId={inputProps.name}
                />
            )}

            <div>
                <input
                    className={`${textBoxStyles()} ${error && 'ring-red-500'}`}
                    ref={ref}
                    id={inputProps.name}
                    {...inputProps}
                />
            </div>
        </div>
    )
})
