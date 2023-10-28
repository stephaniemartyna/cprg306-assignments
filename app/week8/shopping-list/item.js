import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      onClick={() => onSelect(name)}
      className="bg-zinc-100 w-full mb-2 p-1 rounded-md">
      <ul>
        <li className="text-sm flex justify-center ml-1 p-1 w-full text-black bg-zinc-100 ">{name}</li>
        <li className="text-xs flex justify-center ml-1 p-1 w-full text-black bg-zinc-100">
          Buy {quantity} in {category}
        </li>
      </ul>
    </div>
  );
}
