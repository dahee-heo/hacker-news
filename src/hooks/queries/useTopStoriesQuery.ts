import { useQuery } from "@tanstack/react-query";
import { reqGetTopStories } from "@/apis/news";


export const useTopStoriesQuery = () => {
  return useQuery({
    queryKey: ['top'],
    queryFn: reqGetTopStories,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};