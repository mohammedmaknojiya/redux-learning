import { combineReducers } from "redux";
import { bugTrackerReducer } from "./BugTracker/Reducer";
import counterReducer from "./Counter/Reducer";
import userDetailsReducer from "./CustomThunkMiddleware/Reducer";

const rootReducer = combineReducers({
  bugs: bugTrackerReducer,
  counter: counterReducer,
  userDetails: userDetailsReducer,
});

export default rootReducer;
