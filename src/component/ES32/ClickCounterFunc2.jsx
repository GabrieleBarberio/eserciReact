import { useEffect, useState } from "react";

export const ClickCounterFunc2 = ({ onCounterChange }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onCounterChange(count);
  }, [count]);

  const handleCounter = () => {
    setCount((_count) => _count + 1);
  };
  return (
    <>
      <span>The count is: {count}</span>
      <button onClick={handleCounter}>ADD MORE</button>
    </>
  );
};
