type Props = {
    width: string
    height: string
}

export const Skeleton = ({ width, height }: Props) => {
    return (
        <div 
            className="bg-gray-300 animate-pulse rounded"
            style={{
                width, 
                height
            }}
        />
    )
}

