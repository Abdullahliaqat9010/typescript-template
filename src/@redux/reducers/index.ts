import { combineReducers } from "redux";
import auth from "@redux/reducers/auth";

const rootReducer = combineReducers({
  auth,
});

export { rootReducer };
