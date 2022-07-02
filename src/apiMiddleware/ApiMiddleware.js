import axios from "axios";

const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== "CALL_API") {
      next(action);
      return;
    } else {
      next(action); //to get log CALL_API action in redux dev tools. Otherwise it get omitted from only logging.

      const { url, method, data, onSuccess, onFailure } = action.payload;

      try {
        const response = await axios.request({
          baseURL: "https://jsonplaceholder.typicode.com",
          url,
          method,
          data,
        });
        dispatch({ type: onSuccess, payload: { data: response.data } });
      } catch (err) {
        dispatch({ type: onFailure, payload: err.message });
      }
    }
  };

export default apiMiddleware;
