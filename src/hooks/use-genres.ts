import { useQuery } from "@tanstack/react-query";
import genreService from "@/services/genre-service";
import { Genre } from "@/entities/Genre";
import { FetchResponse } from "@/services/api-client";
import ms from "ms";

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms('24h'), // 24h
  })
}

export default useGenres;