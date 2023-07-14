import { useEffect, useState } from "react";

export const CounterFunc = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((_c) => _c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span>The count is: {count}</span>
    </>
  );
};
