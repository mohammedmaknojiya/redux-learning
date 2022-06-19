import * as actions from "./ActionTypes";

export const increamentCounter = (value) => {
  return {
    type: actions.INCREAMENT_COUNTER,
    payload: {
      value: value,
    },
  };
};

export const decreamentCounter = (value) => {
  return {
    type: actions.DECREAMENT_COUNTER,
    payload: {
      value: value,
    },
  };
};

export const resetCounter = () => {
  return {
    type: actions.RESET_COUNTER,
  };
};
