"use client";
import Item from "./item";
import React from "react";
import { useState, useEffect } from "react";

export default function ItemList({ itemsList, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  return (
    <main className=" ml-4 mt-16">
      <div>
        <h1 className="text-l text-black flex justify-center mb-2">
          Shopping List
        </h1>
        </div>
    <div className="flex justify-center mb-4">
      <button
        className={`text-xs ${
              sortBy === "name" ? "bg-zinc-400" : "bg-zinc-200"
            } text-black p-3 rounded-md w-20 mr-2`}
        onClick={handleSortByName}>
        Sort by Name
      </button>

      <button
        className={`text-xs ${
          sortBy === "category" ? "bg-zinc-400" : "bg-zinc-200"
        } text-black p-3 rounded-md w-20`}
        onClick={handleSortByCategory}>
        Sort by Category
      </button>
      </div>

      <div>
        <ul>
          {itemsList
            .sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
            .map((item) => (
              <li key={item.id}>
                <Item 
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onSelect={onItemSelect}
                />
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
