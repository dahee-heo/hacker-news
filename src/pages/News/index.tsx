import { useRef, useCallback } from "react";
import NewsItem from "@/components/News/NewsItem";
import {
  useIdsQuery,
  useStoriesInfiniteQuery,
} from "@/hooks/queries/useNewsQuery";
import { Story, Tab } from "@/types/news";
import NewsListSkeleton from "@/components/News/NewsListSkeleton";
import { formatDate } from "@/utils/date";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const tabs: { label: string; value: Tab }[] = [
  { label: "Top", value: "top" },
  { label: "New", value: "new" },
  { label: "Best", value: "best" },
];

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const activeTab = (searchParams.get("tab") as Tab) ?? "top";

  const { data: ids = [] } = useIdsQuery(activeTab);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } =
    useStoriesInfiniteQuery(ids);

  const stories: Story[] = data?.pages.flatMap((page) => page) ?? [];
  const isLoading = isPending && ids.length > 0;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (isFetchingNextPage) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && hasNextPage) fetchNextPage();
      });
      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  const handleTabChange = (tab: Tab) => {
    setSearchParams({ tab }, { replace: true });
  };

  return (
    <div className="p-4">
      <h1
        className="text-4xl font-bold mb-4 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        AIPIA News
      </h1>
      <ul className="flex gap-[12px] border-b border-gray-200">
        {tabs.map((tab) => (
          <li key={tab.value}>
            <button
              onClick={() => handleTabChange(tab.value)}
              className={`pb-1 text-sm font-medium border-b-2 ${
                activeTab === tab.value ? "border-black" : "border-transparent"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {isLoading ? (
        <NewsListSkeleton length={10}/>
      ) : (
        <ul>
          {stories.map((item, index) => (
            <NewsItem
              ref={index === stories.length - 1 ? lastItemRef : null}
              id={item.id}
              key={item.id}
              title={item.title}
              author={item.by}
              date={formatDate(item.time)}
              imageUrl={`https://picsum.photos/seed/${item.id}/64/64`}
            />
          ))}
          {isFetchingNextPage && (
            <NewsListSkeleton length={1}/>
          )}
        </ul>
      )}
    </div>
  );
};

export default News;
