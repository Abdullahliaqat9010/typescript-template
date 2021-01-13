import { AuthState } from "interfaces/redux/reducers/auth";
import { NotificationState } from "interfaces/redux/reducers/notification";
import { ProfileState } from "interfaces/redux/reducers/profile";

export interface RootState {
  auth: AuthState;
  notification: NotificationState;
  profile: ProfileState;
}
