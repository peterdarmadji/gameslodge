import useData from "./use-data"

export interface Platform {
	id: number
	name: string
	slug: string
}

export interface Game {
	id: number
	name: string
	background_image: string
	rating: number
	parent_platforms: {platform: Platform}[] // an object array of type platform
	metacritic: number
}

const useGames = () => useData<Game>('/games')

export default useGames