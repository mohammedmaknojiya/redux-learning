import * as actions from "./ActionTypes";
import axios from "axios";

export const fetchUserReq = () => {
  return {
    type: actions.FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: actions.FETCH_USER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchUserFailure = () => {
  return {
    type: actions.FETCH_USER_FAILURE,
  };
};

//returning function instead of plain action object
export const fetchUserApiCall = () => {
  return async (dispatch) => {
    dispatch(fetchUserReq());
    try {
      const respose = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      const userNames = respose.data.map((user) => user.name);
      dispatch(fetchUserSuccess(userNames));
    } catch (err) {
      dispatch(fetchUserFailure());
    }
  };
};

export const apiCallThroughMiddleWare = () => {
  return {
    type: "CALL_API",
    payload: {
      url: "/users",
      method: "get",
      data: {},
      onSuccess: actions.FETCH_USER_SUCCESS,
      onFailure: actions.FETCH_USER_FAILURE,
    },
  };
};
