interface NewsItemProps {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
}

const NewsItem = ({ title, author, date, imageUrl }: NewsItemProps) => {
  return (
    <li className="flex gap-[12px] py-4">
      <div className="w-[64px] h-[64px] bg-gray-200 flex-shrink-0 overflow-hidden rounded">
        <img src={imageUrl} alt={title} />
      </div>
      <div>
        <div className="text-xl font-bold">{title}</div>
        <div className="text-sm text-gray-600">{author}</div>
        <div className="text-sm text-gray-600">{date}</div>
      </div>
    </li>
  );
};

export default NewsItem;
