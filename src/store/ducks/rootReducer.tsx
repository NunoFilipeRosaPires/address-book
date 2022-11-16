import { combineReducers } from "redux";
import USERS from "./users";

const rootReducer = combineReducers({
  USERS: USERS,
});

export default rootReducer;
