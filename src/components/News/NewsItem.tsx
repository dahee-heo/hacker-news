import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

interface NewsItemProps {
  id: number;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
}

const NewsItem = forwardRef<HTMLLIElement, NewsItemProps>(
  ({ id, title, author, date, imageUrl }, ref) => {
    const navigate = useNavigate();

    return (
      <li
        ref={ref}
        className="flex gap-[12px] py-4 cursor-pointer group"
        onClick={() => navigate(`/news/${id}`)}
      >
        <div className="w-[66px] h-[66px] bg-gray-200 flex-shrink-0 overflow-hidden rounded">
          <img
            className="transition-transform duration-300 group-hover:scale-110"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div>
          <div className="text-xl font-bold duration-300 underline-offset-2 group-hover:underline leading-[1.375rem]">
            {title}
          </div>
          <div className="text-sm text-gray-600 mt-1">{author}</div>
          <div className="text-sm text-gray-600">{date}</div>
        </div>
      </li>
    );
  },
);

export default NewsItem;
