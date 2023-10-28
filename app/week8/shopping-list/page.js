"use client";
import React from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import Link from 'next/link';

export default function Home() {
  const [items, setItems] = useState(itemsData);

  const [selectedItem, setSelectedItem] = useState("");

  const handleSelectedItem = (itemName) => {
    setSelectedItem(itemName);
  };

  const handleAddItem = (item) => {
    console.log(`Submitting ${item.name} ${item.quantity} ${item.category}`);

    setItems([...items, item]);
  };

  return (
    <main className="bg-gradient-to-b from-zinc-400 to-fuchsia-200">
    <Link href="././" className="ml-3 p-2 w-full rounded-md text-center italic text-xs text-zinc-400 bg-zinc-100">Go back</Link>    

      <div className="flex">
        <div className="w-30">
          <NewItem onAddItem={handleAddItem} />
          <ItemList onItemSelect={handleSelectedItem} itemsList={items} />
        </div>
        <div className="w-1/2 ml-14">
          <MealIdeas ingredient={selectedItem} />
        </div>
      </div>
    </main>
  );
}
