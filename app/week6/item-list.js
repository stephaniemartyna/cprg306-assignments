import React, { useState, useEffect } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);
  const [sortedItems, setSortedItems] = useState([]);
  const [groupedItems, setGroupedItems] = useState({});

  useEffect(() => {
    // Sort the items based on the selected sorting criteria
    const sorted = [...items].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
    setSortedItems(sorted);

    // Group items by category
    const grouped = {};
    sorted.forEach((item) => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    setGroupedItems(grouped);
  }, [items, sortBy]);

  return (
    <main className="flex ml-4 mt-4">
      <div>
        <h1 className="text-l text-black flex justify-center mb-2">
          Shopping List
        </h1>

        <div className="mb-2 mt-2 flex justify-center">
          <button
            onClick={() => setSortBy("name")}
            className={`text-xs ${
              sortBy === "name" ? "bg-zinc-400" : "bg-zinc-200"
            } text-black p-1 rounded-md w-20 mr-2`}
          >
            Sort By Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={`text-xs ${
              sortBy === "category" ? "bg-zinc-400" : "bg-zinc-200"
            } text-black p-1 rounded-md w-20`}
          >
            Sort By Category
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <button
            onClick={() => setGroupByCategory(!groupByCategory)}
            className={`text-xs text-black p-3 rounded-md ${
              groupByCategory ? "bg-zinc-400" : "bg-zinc-200"
            }`}
          >
            {groupByCategory ? "Ungroup" : "Group by Category"}
          </button>
        </div>
        {groupByCategory ? (
          <ul>
            {Object.keys(groupedItems).map((category) => (
              <div key={category}>
                <h2 className=" text-black mb-1">{category}</h2>
                <ul>
                  {groupedItems[category].map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        ) : (
          <ul>
            {sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
