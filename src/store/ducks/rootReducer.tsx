import { combineReducers } from "redux";
import SETTINGS from "./settings";
import USERS from "./users";

const rootReducer = combineReducers({
  SETTINGS: SETTINGS,
  USERS: USERS,
});

export default rootReducer;
