import NewsItem from "@/components/News/NewsItem";
import { useState } from "react";

type Tab = "top" | "new" | "best";

const tabs: { label: string; value: Tab }[] = [
  { label: "Top", value: "top" },
  { label: "New", value: "new" },
  { label: "Best", value: "best" },
];

const News = () => {
  const [activeTab, setActiveTab] = useState<Tab>("top");

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

        <ul>
          <NewsItem title="title" author="author" date="0000-00-00" />
        </ul>
      </div>
    </div>
  );
};

export default News;
