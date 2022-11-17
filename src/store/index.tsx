import { configureStore } from "@reduxjs/toolkit";
import reducer from "./ducks/rootReducer";
import { IUserState } from "./ducks/users/type";

export interface ApplicationState {
  USERS: IUserState;
}

export const store = configureStore({ reducer: reducer });
