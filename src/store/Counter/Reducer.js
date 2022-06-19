import * as actions from "./ActionTypes";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case actions.INCREAMENT_COUNTER:
      return {
        counter: state.counter + action.payload.value,
      };

    case actions.DECREAMENT_COUNTER:
      return {
        counter: state.counter - action.payload.value,
      };

    case actions.RESET_COUNTER:
      return {
        counter: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
