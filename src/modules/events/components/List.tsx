import BackgroundPlaceholder from 'src/assets/event_placeholder_white_transparent.png'
import { EventsModule } from "src/modules/events"


export const List = () => {
    const list = EventsModule.useEventsPreview()
    return (
        <ul className="flex flex-col gap-8">
            {list.map(({ id, title, background }) => (
                <li 
                    key={id}
                    className="shadow-lg rounded-lg"
                >
                    <img src={background || BackgroundPlaceholder} alt="Event background" className="object-contain h-64 w-full" />
                    <h5>{title}</h5>
                </li>
            ))}
        </ul>
    )
}

