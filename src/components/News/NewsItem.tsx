interface NewsItemProps {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
}

const NewsItem = ({ title, author, date, imageUrl }: NewsItemProps) => {
  return (
    <li className="flex gap-[12px] py-4 cursor-pointer group">
      <div className="w-[64px] h-[64px] bg-gray-200 flex-shrink-0 overflow-hidden rounded">
        <img
          className="transition-transform duration-300 group-hover:scale-110"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div>
        <div className="text-xl font-bold duration-300 underline-offset-2 group-hover:underline">{title}</div>
        <div className="text-sm text-gray-600">{author}</div>
        <div className="text-sm text-gray-600">{date}</div>
      </div>
    </li>
  );
};

export default NewsItem;
