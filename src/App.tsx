import './reset.css'

import { Layout } from 'src/components'

import { EventsComponents } from 'src/modules/events'
import { Drawer } from 'src/modules/drawer'


const App = () => {
    return (
        <div className="font-sans">
            <Layout>
                <EventsComponents.List />

                <EventsComponents.CreateForm />
            </Layout>

            <Drawer />
        </div>
    )
}

export default App
