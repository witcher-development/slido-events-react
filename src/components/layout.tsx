import { PropsWithChildren, ReactNode } from 'react'

import Logo from 'src/assets/logo.svg?react'


type Props = {
    headerSlot?: ReactNode
}

export const Layout = ({ children, headerSlot }: PropsWithChildren<Props>) => {
    return (
        <div>
            <header className="flex justify-between bg-white p-4 mb-10 shadow-sm">
                <Logo />

                <input placeholder="search" />

                {headerSlot}
            </header>

            <main className="container mx-auto max-w-screen-sm">
                {children}
            </main>
        </div>
    )
}
