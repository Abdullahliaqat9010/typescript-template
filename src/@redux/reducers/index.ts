import { combineReducers } from "redux";
import auth from "@redux/reducers/auth";
import notification from "@redux/reducers/notification";
import profile from "@redux/reducers/profile";

const rootReducer = combineReducers({
  auth,
  notification,
  profile,
});

export { rootReducer };
