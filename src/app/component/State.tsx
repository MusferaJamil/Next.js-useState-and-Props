'use client';
import { useState } from "react";

const State: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="text-center space-y-5">
      <h1 className="py-4 px-10 bg-gray-700 text-white rounded-md text-7xl">
        Counter: {count}
      </h1>
      <button
        className="py-2 px-10 bg-blue-700 text-white rounded-md hover:bg-blue-800"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        className="py-2 px-10 bg-red-700 text-white rounded-md ml-5 hover:bg-red-800"
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default State;
