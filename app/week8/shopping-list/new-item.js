"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: `${name}-${quantity}-${category}`,
      name,
      quantity,
      category,
    };

    console.log(
      `The item is: ${newItem.name}, the quantity is ${newItem.quantity}, and the category is ${newItem.category}`
    );

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <main className="flex justify ml-2 mt-10">
        <div className=" ">
          <h1 className="ml-1 mb-3 text-black flex justify-center">
            Add Item To Shopping List
          </h1>
          <form onSubmit={handleSubmit}>
            <div> 
            <label className="block mb-4">
              <input
                required
                type = "text"
                placeholder="Item Name"
                onChange={handleNameChange}
                value={name}
                className="text-sm ml-1 p-2 block w-full rounded-md placeholder-zinc-400 text-black bg-gray-100 focus:bg-white"
              />
            </label>
            </div>
            <div className="flex justify-between">
            <label className="block mb-4">
              <input
                type="number"
                required
                onChange={handleQuantityChange}
                value={quantity}
                className="text-sm ml-1 w-20 p-2 rounded-md text-black bg-zinc-100 focus:bg-white"
              />
            </label>
            <label className="block mb-4 ">
              <select
                id="categorySelect"
                name="category"
                value={category}
                onChange={handleCategoryChange}
                className="text-sm ml-1 p-2 w-full rounded-md text-black bg-zinc-100 focus:bg-white ">
                <option value disabled> Category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
            </label>
            </div>
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="ml-1 p-1 block w-full bg-fuchsia-300 hover:bg-fuchsia-500 rounded-md text-white">
              +
            </button>

          </form>
        </div>
        </main>
        );  
}
