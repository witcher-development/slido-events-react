import { useEffect, useState } from "react"
import { EventPreview } from "./types"
import { fetchPreviewList } from "./api"


export const useEventsPreview = () => {
	const [list, setList] = useState<EventPreview[]>([])

	useEffect(() => {
		fetchPreviewList().then(setList)
	}, [])

	return list
}
