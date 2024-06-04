import './reset.css'

import { Layout } from 'src/components'

import { EventsModule, EventsComponents } from 'src/modules/events'
import { DrawerComponents } from 'src/modules/drawer'


const App = () => {
    const [eventsList, refetchList] = EventsModule.useList()

    return (
        <div className="font-sans">
            <Layout
                headerSlot={<EventsComponents.CreateForm onSubmit={refetchList} />}
            >
                <EventsComponents.List list={eventsList} refetch={refetchList} />
            </Layout>

            <DrawerComponents.Drawer />
        </div>
    )
}

export default App
