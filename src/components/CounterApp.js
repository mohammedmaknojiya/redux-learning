import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increamentCounter,
  decreamentCounter,
  resetCounter,
} from "../store/Counter/ActionCreator";

const CounterApp = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Counter App</h1>
      <div>Counter: {counterState.counter}</div>
      <div>
        <button onClick={() => dispatch(increamentCounter(1))}>
          Increament Counter
        </button>
        <button onClick={() => dispatch(decreamentCounter(1))}>
          Decreament Counter
        </button>
        <button onClick={() => dispatch(resetCounter())}>Reset</button>
        <button onClick={() => dispatch(increamentCounter(2))}>
          Increament Counter By 2
        </button>
        <button onClick={() => dispatch(decreamentCounter(2))}>
          Decreament Counter By 2
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
