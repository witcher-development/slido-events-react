import './reset.css'

import { Layout } from 'src/components'

import { EventsComponents } from 'src/modules/events'


const App = () => {
    return (
        <div className="font-sans">
            <Layout>
                <EventsComponents.List />
                <EventsComponents.CreateForm />
            </Layout>
        </div>
    )
}

export default App
