import * as actions from "./ActionTypes";

let newId = 0;

export const bugTrackerReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_BUG:
      return [
        ...state,
        {
          id: ++newId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.REMOVE_BUG:
      const newState = state.filter((obj) => obj.id !== action.payload.id);
      return newState;

    case actions.RESOLVE_BUG:
      const updatedState = state.map((obj) =>
        obj.id === action.payload.id ? { ...obj, resolved: true } : obj
      );
      return updatedState;

    default:
      return state;
  }
};
