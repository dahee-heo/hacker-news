import {
  reqGetTopStories,
  reqGetNewStories,
  reqGetBestStories,
  reqGetStory,
} from "@/apis/news";
import { Tab } from "@/types/news";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 10;

const apis = {
  top: reqGetTopStories,
  new: reqGetNewStories,
  best: reqGetBestStories,
};

export const useIdsQuery = (tab: Tab) => {
  return useQuery({
    queryKey: [tab],
    queryFn: apis[tab],
    staleTime: 1000 * 60 * 5,
  });
};

export const useStoriesInfiniteQuery = (ids: number[]) => {
  return useInfiniteQuery({
    queryKey: ["stories", ids[0], ids[1], ids[2]],
    queryFn: async ({ pageParam = 0 }) => {
      const pageIds = ids.slice(pageParam, pageParam + PAGE_SIZE);
      return Promise.all(pageIds.map(reqGetStory));
    },
    getNextPageParam: (_, allPages) => {
      const nextOffset = allPages.length * PAGE_SIZE;
      return nextOffset < ids.length ? nextOffset : undefined;
    },
    initialPageParam: 0,
    enabled: ids.length > 0,
  });
};
