import { InputHTMLAttributes, forwardRef } from 'react'

import { Text } from 'src/components'
import { Hint } from '../Hint'


type Props = InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    error?: string
}

export const TextField = forwardRef<HTMLInputElement, Props>(({ label, error, ...inputProps }, ref) => {
    return (
        <div>
            <div className='flex items-center gap-2'>
                <label>
                    <Text type="tiny" className={`pl-0.5 ${error && 'text-red-500'}`}>
                        {label}
                    </Text>
                </label>

                {error && <Hint color="text-red-500">{error}</Hint>}
            </div>

            <div>
                <input
                    className={`block w-full rounded-md border-0 py-1.5 px-3 mt-0.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${error && 'ring-red-500'}`}
                    {...inputProps}
                    ref={ref}
                />
            </div>
        </div>
    )
})
