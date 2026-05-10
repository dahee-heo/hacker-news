const NewsListSkeleton = ({ length }: { length: number }) => {
  return (
    <ul>
      {Array.from({ length }).map((_, i) => (
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
  );
};

export default NewsListSkeleton;
