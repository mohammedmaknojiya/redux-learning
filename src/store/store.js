import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import apiMiddleware from "../apiMiddleware/ApiMiddleware";

let store = createStore(rootReducer, applyMiddleware(thunk, apiMiddleware));

export default store;
