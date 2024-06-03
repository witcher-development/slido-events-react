import { PropsWithChildren } from 'react'

import { EventsComponents } from 'src/modules/events'

import Logo from 'src/assets/logo.svg?react'


export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <header className="flex justify-between bg-white p-4 mb-10">
                <Logo />

                <input placeholder="search" />

                <EventsComponents.CreateForm />
            </header>

            <main className="container mx-auto max-w-screen-sm">
                {children}
            </main>
        </div>
    )
}
