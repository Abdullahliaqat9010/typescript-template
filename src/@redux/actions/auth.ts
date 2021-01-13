import { AuthActionTypes, LOGIN, LOGOUT } from "interfaces/redux/actions/auth";

export const Login = (token: string): AuthActionTypes => {
  return {
    type: LOGIN,
    payload: {
      token,
    },
  };
};

export const Logout = (): AuthActionTypes => {
  return {
    type: LOGOUT,
    payload: {
      token: null,
    },
  };
};
