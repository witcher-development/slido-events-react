import { Text } from 'src/components'

import { Skeleton  } from 'src/components/Skeleton'

import { EventsTypes, EventsModule } from 'src/modules/events'


type Props = {
    id: EventsTypes.Event['id']
}

export const Details = ({ id }: Props) => {
    const details = EventsModule.useOne(id)

    if (!details) {
        return <Skeleton width="100%" height="200px" />
    }

    return (
        <div className="p-6 w-80 divide-y">
            <Text
                type="h3"
                className="pb-2 text-center"
            >
                {details.title}
            </Text>

            <div className="pt-3">
                {details.description && (
                    <Text type="body">
                        {details.description}
                    </Text>
                )}
                {!details.description && (
                    <Text type="body" className="!text-gray-400 text-center">
                        No Description
                    </Text>
                )}
            </div>
        </div>
    )
}
