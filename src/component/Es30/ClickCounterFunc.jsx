import { useState } from "react";

export const ClickCounterFunc = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((_count) => _count + 1);
  };

  return (
    <>
      <span>The count is: {count}</span>
      <button onClick={handleAdd}>ADD MORE</button>
    </>
  );
};
