import { PropsWithChildren } from 'react'


type Props = {
    type: 'h1' | 'h2' | 'h3' | 'body'
    className?: string
}

export const Text = ({ type, className = '', children }: PropsWithChildren<Props>) => {
    switch (type) {
        case 'h1':
            return <h1 className={`text-3xl font-bold text-green-500 ${className}`}>
                {children}
            </h1>
        case 'h2':
            return <h2 className={`text-2xl font-bold text-green-500 ${className}`}>
                {children}
            </h2>
        case 'h3':
            return <h3 className={`text-xl font-medium text-green-500 ${className}`}>
                {children}
            </h3>
        case 'body':
            return <p className={`text-sm text-gray-600 ${className}`}>
                {children}
            </p>
    }
}
