import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increamentCounter,
  decreamentCounter,
  resetCounter,
} from "../store/Counter/Reducer2";

const CounterApp = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state);
  return (
    <div>
      <h1>Counter App</h1>
      <h3>Counter value: {counterState.count}</h3>
      <button onClick={() => dispatch(increamentCounter(1))}>
        Increase count
      </button>
      <button onClick={() => dispatch(decreamentCounter(1))}>
        Decrease count
      </button>
      <button onClick={() => dispatch(resetCounter())}>reset count</button>
    </div>
  );
};

export default CounterApp;
