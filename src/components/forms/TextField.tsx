import { InputHTMLAttributes, forwardRef } from 'react'

import { Text } from 'src/components'


type Props = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}

export const TextField = forwardRef<HTMLInputElement, Props>(({ label, ...inputProps }, ref) => {
    // console.log(inputProps)
    return (
        <div>
            <label>
                <Text type="tiny" className="pl-0.5">
                    {label}
                </Text>
            </label>

            <div>
                <input
                    className="block w-full rounded-md border-0 py-1.5 px-3 mt-0.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...inputProps}
                    ref={ref}
                />
            </div>
        </div>
    )
})
