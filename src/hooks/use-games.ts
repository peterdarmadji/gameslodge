import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useState, useEffect } from "react"

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

interface FetchGamesResponse {
	count: number
	results: Game[]
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([])
	const [error, setError] = useState('')
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		const controller = new AbortController()

		setLoading(true);

		apiClient
			.get<FetchGamesResponse>('/games', {signal: controller.signal})
			.then((res) => {
				setGames(res.data.results)
				setLoading(false)
			})
			.catch((err) => {
				if (err instanceof CanceledError) return
				setError(err.message)
				setLoading(false)
			})

		return () => controller.abort()
	}, []) // dont forget the dependency []

	return {games, error, isLoading}
}

export default useGames