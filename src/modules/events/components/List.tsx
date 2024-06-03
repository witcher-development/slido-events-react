import { produce } from 'immer'
import BackgroundPlaceholder from 'src/assets/event_placeholder_white_transparent.png'
import { Text  } from 'src/components'
import { EventsModule } from "src/modules/events"
import { portalToDrawer as renderInDrawer } from "src/modules/drawer/module"
import { Store } from 'src/store'


export const List = () => {
    const [store, setStore] = Store.use()
    const setEvent = (eventId: number) => {
        setStore(produce(store, draft => {
            draft.drawer = String(eventId)
        }))
    }

    const list = EventsModule.useEventsPreview()
    return (
        <ul className="flex flex-col gap-8">
            {list.map(({ id, title, description, background }) => {
                const open = store.drawer === String(id)

                return (
                    <li 
                        key={id}
                        className="shadow-lg rounded-lg overflow-hidden"
                    >
                        <img src={background || BackgroundPlaceholder} alt="Event background" className="object-contain h-64 w-full" />
                        <div className="bg-white p-4">
                            <Text type="h3" className="pb-2">
                                <a
                                    className='hover:text-green-400 transition cursor-pointer'
                                    onClick={() => !open && setEvent(id)}
                                    tabIndex={0}
                                >
                                    {title}
                                </a>
                            </Text>

                            <Text type="body">{description}</Text>
                        </div>
                    </li>
                )
            })}
            {store.drawer && renderInDrawer(
                <div className="p-6">
                    hihihihi
                </div>
            )}
        </ul>
    )
}

