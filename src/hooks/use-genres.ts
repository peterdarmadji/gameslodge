import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "@/services/genre-service";

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  })
}

export default useGenres;