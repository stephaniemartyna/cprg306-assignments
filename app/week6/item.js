import React, { useState } from 'react';

export default function Item({ name, quantity, category }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-zinc-100 w-full mb-2 p-1 rounded-md flex items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="mr-2 ml-2"
      />
      <div>
        <h1 className="text-sm ml-1 p-1 w-full text-black bg-zinc-100 ">{name}</h1>
        <p className="text-xs ml-1 p-1 w-full text-black bg-zinc-100">
          Buy {quantity} in {category}
        </p>
      </div>
    </div>
  );
}
