//reducer using createReducer function

import { createAction, createReducer } from "@reduxjs/toolkit";

export const increaseCounter = createAction("INCREASE_COUNTER");
export const decreaseCounter = createAction("DECREASE_COUNTER");
export const resetCounter = createAction("RESET_COUNTER");

const counterState = { count: 0 };
const counterReducer = createReducer(counterState, {
  [increaseCounter.type]: (counter, action) => {
    counter.count = counter.count + 1;
  },

  [decreaseCounter.type]: (counter, action) => {
    counter.count = counter.count - 1;
  },

  [resetCounter.type]: (counter, action) => {
    counter.count = 0;
  },
});

export default counterReducer;
