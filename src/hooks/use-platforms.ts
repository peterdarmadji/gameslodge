import { useQuery } from "@tanstack/react-query";
import platformService, { Platform } from "@/services/platform-service";
import { FetchResponse } from "@/services/api-client";
import ms from "ms";

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: platformService.getAll,
    staleTime: ms('24h') // 24h
  })
}

export default usePlatforms;