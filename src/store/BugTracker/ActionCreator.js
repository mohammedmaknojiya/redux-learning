import * as actions from "./ActionTypes";

export const addBug = () => {
  return {
    type: actions.ADD_BUG,
    payload: {
      description: "New bug",
    },
  };
};

export const removeBug = (id) => {
  return {
    type: actions.REMOVE_BUG,
    payload: {
      id: id,
    },
  };
};

export const resolveBug = (id) => {
  return {
    type: actions.RESOLVE_BUG,
    payload: {
      id: id,
    },
  };
};
