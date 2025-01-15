import { FetchResponse } from "@/services/api-client"
import gameService, { Game } from "@/services/game-service"
import useGameQueryStore from "@/store"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import ms from "ms"

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => gameService.getAll({
      genres: gameQuery.genreId,
      platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page: pageParam,
    }),
    staleTime: ms('24h'), // 24h
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }
  })  
}

export default useGames