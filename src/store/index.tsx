import { configureStore } from "@reduxjs/toolkit";
import reducer from "./ducks/rootReducer";

const store = configureStore({ reducer: reducer });
export default store;
