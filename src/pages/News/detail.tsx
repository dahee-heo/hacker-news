import { useParams } from "react-router-dom";
import { reqGetStory } from "@/apis/news";
import { useQuery } from "@tanstack/react-query";
import NewsItemSkeleton from "@/components/News/NewsItemSkeleton";
import { formatDate } from "@/utils/date";

const NewsDetail = () => {
  const { id } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["story", Number(id)],
    queryFn: () => reqGetStory(Number(id!)),
  });

  if (isPending) return <NewsItemSkeleton />;

  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl font-bold leading-tight">{data?.title}</h1>
        <p className="text-sm text-gray-600 mt-2">{data?.by}</p>
        <p className="text-sm text-gray-600 mt-1">{formatDate(data.time)}</p>
      </div>
      <hr className="border-gray-200 my-4" />
      <div>
        <div className="mb-4">
          url:{" "}
          <a
            href={data?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {data?.url}
          </a>
        </div>
        <span className="text-xs text-gray-600 border rounded py-1 px-2">
          &#9829; {data?.score}
        </span>
      </div>
    </div>
  );
};

export default NewsDetail;
