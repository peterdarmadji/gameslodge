import { GameQuery } from "@/App"
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

const useGames = (gameQuery: GameQuery) => 
	useData<Game>(
		'/games', 
		{
			params: {
				genres: gameQuery.genre?.id, 
				platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder
			}
		}, 
		[gameQuery])

export default useGames