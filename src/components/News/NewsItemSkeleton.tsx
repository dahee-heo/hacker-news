const NewsItemSkeleton = () => {
  return (
     <div className="p-4 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/4" />
        <hr className="border-gray-200 my-4" />
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="h-6 bg-gray-200 rounded w-16" />
      </div>
  )
}

export default NewsItemSkeleton