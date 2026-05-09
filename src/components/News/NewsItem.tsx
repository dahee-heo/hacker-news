import React from "react";

interface NewsItemProps {
  title: string;
  author: string;
  date: string;
}

const NewsItem = ({ title, author, date }: NewsItemProps) => {
  return (
    <li className="flex gap-[12px] py-4">
      <div className="w-[80px] aspect-square bg-gray-200">
        <img src="" alt="" />
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
