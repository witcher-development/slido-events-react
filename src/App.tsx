import { EventsModule } from 'src/modules/events'


const App = () => {
    const list = EventsModule.useEventsPreview()
    return (
        <div>
        </div>
    )
}

export default App
