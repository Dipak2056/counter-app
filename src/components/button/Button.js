import React from "react";
import { useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "./counterSlice";

export const Button = () => {
  const dispatch = useDispatch();

  const incCount = () => {
    dispatch(increaseCount());
  };
  const decCount = () => {
    dispatch(decreaseCount());
  };
  return (
    <>
      <button onClick={incCount}>Increment</button>
      <button onClick={decCount}>Decrement</button>
    </>
  );
};
