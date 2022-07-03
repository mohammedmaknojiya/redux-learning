// import { createStore } from "redux";
// import { bugTrackerReducer } from "./BugTracker/Reducer";

// let store = createStore(bugTrackerReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/Reducer2";

const store = configureStore({
  reducer: counterReducer,
});

export default store;
