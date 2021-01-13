import { Reducer } from "redux";
import { AuthState } from "interfaces/redux/reducers/auth";
import { AuthActionTypes, LOGIN, LOGOUT } from "interfaces/redux/actions/auth";

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
};

const reducer: Reducer<AuthState, AuthActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOGIN: {
      const { token } = action.payload;
      return {
        ...state,
        token,
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
