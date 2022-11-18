import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
// import styles from './'

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          aria-label="increment value"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};
