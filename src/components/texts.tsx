import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'


type Props = ComponentPropsWithoutRef<'p'> & {
    type: 'h1' | 'h2' | 'h3' | 'body' | 'tiny'
    className?: string
}

export const Text = ({ type, className, children, ...rest }: PropsWithChildren<Props>) => {
    switch (type) {
        case 'h1':
            return <h1
                className={`text-3xl font-bold text-green-500 ${className}`}
                {...rest}
            >
                {children}
            </h1>
        case 'h2':
            return <h2
                className={`text-2xl font-bold text-green-500 ${className}`}
                {...rest}
            >
                {children}
            </h2>
        case 'h3':
            return <h3
                className={`text-xl font-medium text-green-500 ${className}`}
                {...rest}
            >
                {children}
            </h3>
        case 'body':
            return <p
                className={`text-sm text-gray-600 ${className}`}
                {...rest}
            >
                {children}
            </p>
        case 'tiny':
            return <span
                className={`text-sm text-gray-500 ${className}`}
                {...rest}
            >
                {children}
            </span>
        default: throw new Error('Unknown Text type')
    }
}
