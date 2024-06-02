import './reset.css'

import { Layout, Drawer } from 'src/components'

import { EventsComponents } from 'src/modules/events'


const App = () => {
    return (
        <div className="font-sans">
            <Layout>
                <EventsComponents.List />
                <EventsComponents.CreateForm />
                <Drawer />
            </Layout>
        </div>
    )
}

export default App
