import BackgroundPlaceholder from 'src/assets/event_placeholder_white_transparent.png'

import { Text } from 'src/components'

import { EventsTypes } from 'src/modules/events'
import { DrawerModule, DrawerComponents } from 'src/modules/drawer'

import { Details  } from './Details'


const EmptyState = () => (
    <div className="p-16 border-2 rounded-lg text-center">
        <Text
            type="h3"
            className="!text-gray-400 mb-1.5"
        >
            No Events Here Yet
        </Text>

        <Text
            type="body"
            className="!text-gray-400"
        >
            Create your first event
        </Text>
    </div>
)

type Props = {
    list: EventsTypes.EventPreview[]
}

export const List = ({ list }: Props) => {
    const [drawerValue, setDrawerValue] = DrawerModule.useDrawer()
    const open = list.map(({ id }) => id).includes(Number(drawerValue))

    if (!list.length) return <EmptyState />
    return (
        <ul className="flex flex-col gap-8">
            {list.map(({ id, title, background }) => (
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
                    </div>
                </li>
            ))}

            {open && (
                <DrawerComponents.Portal>
                    <Details id={Number(drawerValue)} />
                </DrawerComponents.Portal>
            )}
        </ul>
    )
}

