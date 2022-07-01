import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import customThunkMiddleware from "../customMiddleware/CustomThunkMiddleware";

let store = createStore(rootReducer, applyMiddleware(customThunkMiddleware));

export default store;
