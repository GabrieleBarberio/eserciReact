import { useState, useCallback } from "react";

const useCounter1 = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCount((_count) => _count + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((_count) => (_count === 0 ? _count : _count - 1));
  }, []);

  const handleReset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return [count, handleIncrement, handleDecrement, handleReset];
};

export default useCounter1;
