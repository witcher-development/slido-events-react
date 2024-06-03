import BackgroundPlaceholder from 'src/assets/event_placeholder_white_transparent.png'

import { Text } from 'src/components'

import { EventsModule } from 'src/modules/events'
import { DrawerModule } from 'src/modules/drawer'


export const List = () => {
    const list = EventsModule.useEventsPreview()

    const [drawerValue, setDrawerValue] = DrawerModule.useDrawer()
    const open = list.map(({ id }) => id).includes(Number(drawerValue))

    return (
        <ul className="flex flex-col gap-8">
            {list.map(({ id, title, description, background }) => (
                <li
                    key={id}
                    className="shadow-lg rounded-lg overflow-hidden"
                >
                    <img
                        src={background || BackgroundPlaceholder}
                        alt="Event background"
                        className="object-contain h-64 w-full"
                    />

                    <div className="bg-white p-4">
                        <Text
                            type="h3"
                            className="pb-2"
                        >
                            <a
                                className="hover:text-green-400 transition cursor-pointer"
                                onClick={() => !open && setDrawerValue(String(id))}
                            >
                                {title}
                            </a>
                        </Text>

                        <Text type="body">
                            {description}
                        </Text>
                    </div>
                </li>
            ))}

            {open && DrawerModule.portalToDrawer(
                <div className="p-6">
                    hihihihi
                </div>
            )}
        </ul>
    )
}

