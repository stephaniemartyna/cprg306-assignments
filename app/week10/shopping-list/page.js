"use client";
import React from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { getItems, addItem } from "../_services/shopping-list-service";



export default function Home() {
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelectedItem = (itemName) => {
    setSelectedItem(itemName);
  };

  const handleAddItem = async (item) => {
    try {
      const newItemId = await addItem(user.uid, item);
      const newItem = { ...item, id: newItemId };
      setItems([...items, newItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };


  async function loadItems() {
    const items = await getItems(user.uid);
    setItems(items);
  }

  useEffect(() => {
    loadItems();
  }, []);


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
