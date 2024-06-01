import './reset.css'

import { Layout } from 'src/components'

import { EventsComponents } from 'src/modules/events'


const App = () => {
    return (
        <div className="font-sans text-3xl">
            <Layout>
                <EventsComponents.List />
            </Layout>
        </div>
    )
}

export default App
