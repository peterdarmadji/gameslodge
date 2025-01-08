import { GameQuery } from "@/App"
import gameService, { Game } from "@/services/game-service"
import { useQuery } from "@tanstack/react-query"

const useGames = (gameQuery: GameQuery) => 
  useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => gameService.getAll({
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }),
    staleTime: 5 * 60 * 1000 // 5 mins
  })

export default useGames