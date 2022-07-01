import * as actions from "./ActionTypes";

const initialState = {
  loading: false,
  userData: [],
  error: "",
};

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload.data,
      };

    case actions.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

export default userDetailsReducer;
