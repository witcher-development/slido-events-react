import { InputHTMLAttributes, forwardRef } from 'react'

import { LabelWithHint } from './LableWithHint'
import { textBoxStyles } from './styles'


type Props = InputHTMLAttributes<HTMLTextAreaElement> & {
    label?: string,
    error?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ label, error, ...textAreaProps }, ref) => {
    return (
        <div>
            {label && (
                <LabelWithHint
                    label={label}
                    error={error}
                    inputId={textAreaProps.name} 
                />
            )}

            <div>
                <textarea
                    className={`${textBoxStyles()} resize-none ${error && 'ring-red-500'}`}
                    ref={ref}
                    id={textAreaProps.name}
                    
                    
                    {...textAreaProps}
                />
            </div>
        </div>
    )
})
