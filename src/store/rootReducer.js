import { combineReducers } from "redux";
import { bugTrackerReducer } from "./BugTracker/Reducer";
import counterReducer from "./Counter/Reducer";

const rootReducer = combineReducers({
  bugs: bugTrackerReducer,
  counter: counterReducer,
});

export default rootReducer;
