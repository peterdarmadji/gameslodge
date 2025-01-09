import { GameQuery } from "@/App"
import { FetchResponse } from "@/services/api-client"
import gameService, { Game } from "@/services/game-service"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

const useGames = (gameQuery: GameQuery) => 
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => gameService.getAll({
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page: pageParam,
    }),
    staleTime: 5 * 60 * 1000, // 5 mins
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }
  })

export default useGames