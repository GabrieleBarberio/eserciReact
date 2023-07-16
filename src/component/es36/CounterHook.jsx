import React from "react";
import useCounter from "./useCounter";

const CounterHook = () => {
  const [counter, handleIncrement, handleDecrement, handleReset] =
    useCounter(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterHook;
