import {
  reqGetBestStories,
  reqGetNewStories,
  reqGetStory,
  reqGetTopStories,
} from "@/apis/news";
import NewsItem from "@/components/News/NewsItem";
import { Story } from "@/types/news";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useState } from "react";

type Tab = "top" | "new" | "best";

const tabs: { label: string; value: Tab }[] = [
  { label: "Top", value: "top" },
  { label: "New", value: "new" },
  { label: "Best", value: "best" },
];

const apis = {
  top: reqGetTopStories,
  new: reqGetNewStories,
  best: reqGetBestStories,
};

const News = () => {
  const [activeTab, setActiveTab] = useState<Tab>("top");

  const { data: ids = [] } = useQuery({
    queryKey: [activeTab],
    queryFn: apis[activeTab],
    staleTime: 1000 * 60 * 5,
  });

  const stories = useQueries({
    queries: ids.slice(0, 10).map((id: number) => ({
      queryKey: ["story", id],
      queryFn: () => reqGetStory(id),
      staleTime: 1000 * 60 * 10,
    })),
  });

  const isLoading = ids.length === 0 || stories.some((s) => s.isPending);
  const data = stories
    .map((s) => s.data)
    .filter((item): item is Story => !!item);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">AIPIA News</h1>
      <div>
      <ul className="flex gap-[12px] border-b border-gray-200">
        {tabs.map((tab) => (
          <li key={tab.value}>
            <button
                onClick={() => setActiveTab(tab.value)}
              className={`pb-1 text-sm font-medium border-b-2 ${
                  activeTab === tab.value
                    ? "border-black"
                    : "border-transparent"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {isLoading ? (
        <ul>
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i} className="flex gap-3 py-3 animate-pulse">
              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0" />
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-3 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/4" />
                <div className="h-3 bg-gray-200 rounded w-1/4" />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
            {data.map((item) => (
            <NewsItem
              id={item.id}
              key={item.id}
              title={item.title}
              author={item.by}
              date={new Date(item.time * 1000).toLocaleDateString()}
              imageUrl={`https://picsum.photos/seed/${item.id}/64/64`}
            />
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default News;
