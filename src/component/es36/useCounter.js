import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => (count === 0 ? count : count - 1));
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return [count, handleIncrement, handleDecrement, handleReset];
};

export default useCounter;
