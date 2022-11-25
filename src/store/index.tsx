import { configureStore } from "@reduxjs/toolkit";
import reducer from "./ducks/rootReducer";
import { ISettingsState } from "./ducks/settings/types";
import { IUserState } from "./ducks/users/types";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface ApplicationState {
  SETTINGS: ISettingsState;
  USERS: IUserState;
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["SETTINGS"],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
