import React from "react";
import useCounter1 from "./useCounter";

const CounterHook2 = () => {
  const [counter, handleIncrement, handleDecrement, handleReset] =
    useCounter1(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterHook2;
