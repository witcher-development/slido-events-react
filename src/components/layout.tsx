import { PropsWithChildren } from "react"
import Logo from 'src/assets/logo.svg?react'
import { Drawer } from "./Drawer"


export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <header className="flex justify-between bg-white p-4 mb-10">
                <Logo />

                <input placeholder="search" />

                <button>Create</button>
            </header>

            <main className="container mx-auto max-w-screen-sm">
                {children}
            </main>

            <Drawer />
        </div>
    )
}
