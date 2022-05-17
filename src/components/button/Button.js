import React from "react";

export const Button = ({ increaseCount, decreaseCount }) => {
  return (
    <>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
    </>
  );
};
