import { EventPreview } from "./types"


export const fetchPreviewList = async (): Promise<EventPreview[]> => {
	return [
		{
			id: 1,
			title: 'Just hanging out',
			description: 'Scientifically proven ptimal way to spend time',
			background: null
		},
		{
			id: 2,
			title: 'Techy event',
			description: 'Scientifically proven ptimal way to spend time',
			background: null
		}	
	]
}
