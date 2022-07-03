import { createAction } from "@reduxjs/toolkit";

export const increaseCounter = createAction("INCREASE_COUNTER");
export const decreaseCounter = createAction("DECREASE_COUNTER");
export const resetCounter = createAction("RESET_COUNTER");

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case increaseCounter.type:
      return {
        ...state,
        count: state.count + 1,
      };

    case decreaseCounter.type:
      return {
        ...state,
        count: state.count - 1,
      };

    case resetCounter.type:
      return {
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
