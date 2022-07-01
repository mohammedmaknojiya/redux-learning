import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
// import customThunkMiddleware from "../customMiddleware/CustomThunkMiddleware";
import thunk from "redux-thunk";

// let store = createStore(rootReducer, applyMiddleware(customThunkMiddleware));
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
