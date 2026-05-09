import { reqGetStory } from "@/apis/news";
import { useQueries } from "@tanstack/react-query";
const PAGE_SIZE = 10;

export const useStoriesQuery = (ids: number[], page: number) => {
  const pageIds = ids.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return useQueries({
    queries: pageIds.map((id) => ({
      queryKey: ["story", id],
      queryFn: () => reqGetStory(id),
      staleTime: 1000 * 60 * 10,
    })),
  });
};
