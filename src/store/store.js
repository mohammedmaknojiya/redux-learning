import { createStore } from "redux";
import { bugTrackerReducer } from "./BugTracker/Reducer";

let store = createStore(bugTrackerReducer);

export default store;
