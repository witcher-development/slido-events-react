import { PropsWithChildren } from "react"


export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <header className="flex justify-between">
                <p>Logo</p>

                <input />

                <button>Create</button>
            </header>

            <main className="container mx-auto max-w-screen-sm">
                {children}
            </main>
        </div>
    )
}
