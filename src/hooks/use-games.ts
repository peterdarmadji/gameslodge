import { GameQuery } from "@/App"
import { FetchResponse } from "@/services/api-client"
import gameService, { Game } from "@/services/game-service"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

const useGames = (gameQuery: GameQuery) => 
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => gameService.getAll({
      genres: gameQuery.genreId,
      platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page: pageParam,
    }),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }
  })

export default useGames