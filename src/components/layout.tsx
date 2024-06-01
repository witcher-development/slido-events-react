import { PropsWithChildren } from "react"
import Logo from 'src/assets/logo.svg?react'


export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <header className="flex justify-between">
                <Logo />

                <input />

                <button>Create</button>
            </header>

            <main className="container mx-auto max-w-screen-sm">
                {children}
            </main>
        </div>
    )
}
