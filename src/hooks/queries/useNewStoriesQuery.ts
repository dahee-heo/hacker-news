import { useQuery } from "@tanstack/react-query";
import { reqGetNewStories } from "@/apis/news";

export const useNewStoriesQuery = () => {
  return useQuery({
    queryKey: ['new'],
    queryFn: reqGetNewStories,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};