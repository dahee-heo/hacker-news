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
    <div>
      <h1 className="text-2xl font-bold mb-4">AIPIA News</h1>
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
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <div>title</div>
              <div>author</div>
              <div>0000-00-00</div>
            </div>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <div>title</div>
              <div>author</div>
              <div>0000-00-00</div>
            </div>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <div>title</div>
              <div>author</div>
              <div>0000-00-00</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default News;
