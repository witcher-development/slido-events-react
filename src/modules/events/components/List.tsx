import { EventsModule } from "src/modules/events"


export const List = () => {
    const list = EventsModule.useEventsPreview()
    return (
        <ul className="flex flex-col gap-8">
            {list.map(({ id, title }) => (
                <li 
                    key={id}
                    className="shadow-md rounded"
                >
                    <h5>{title}</h5>
                </li>
            ))}
        </ul>
    )
}

