import { useState } from 'react'
import BackgroundPlaceholder from 'src/assets/event_placeholder_white_transparent.png'
import { Text  } from 'src/components'
import { Drawer } from 'src/components/Drawer'
import { EventsModule } from "src/modules/events"


export const List = () => {
    const [open, setOpen] = useState(false)
    const list = EventsModule.useEventsPreview()
    return (
        <ul className="flex flex-col gap-8">
            {list.map(({ id, title, description, background }) => (
                <li 
                    key={id}
                    className="shadow-lg rounded-lg overflow-hidden"
                    onClick={() => !open && setOpen(true)}
                >
                    <img src={background || BackgroundPlaceholder} alt="Event background" className="object-contain h-64 w-full" />
                    <div className="bg-white p-4">
                        <Text type="h3" className="pb-2">
                            <a href={`#${id}`} className='hover:text-green-400 transition'>
                                {title}
                            </a>
                        </Text>

                        <Text type="body">{description}</Text>
                    </div>
                </li>
            ))}
            <Drawer open={open} onClose={() => setOpen(false)}>
                <div className="p-6">
                    hihihihi
                </div>
            </Drawer>
        </ul>
    )
}

