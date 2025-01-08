import { useQuery } from "@tanstack/react-query";
import platformService, { Platform } from "@/services/platform-service";

const usePlatforms = () => {
  // useData<Platform>('/platforms')

  return useQuery<Platform[], Error>({
    queryKey: ['platforms'],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000 // 24h
  })
}

export default usePlatforms;