"use client";
import React, {useState}  from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import Link from 'next/link';

export default function Page() {
  
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
  
    return (
    <body className="mt-2 min-h-screen bg-gradient-to-b from-zinc-400 to-fuchsia-200">
    <div>
    <Link href="/" className="ml-3 p-1 w-full rounded-md text-center italic text-xs mt-4 text-zinc-400 bg-zinc-100">Go to Home Page</Link>    
    <NewItem onAddItem = {handleAddItem} />
    <ItemList items = {items} />
    </div>
    </body>
  );
}