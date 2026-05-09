import { useQuery } from "@tanstack/react-query";
import { reqGetBestStories } from "@/apis/news";

export const useBestStoriesQuery = () => {
  return useQuery({
    queryKey: ["best"],
    queryFn: reqGetBestStories,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
