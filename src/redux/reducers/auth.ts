import { Reducer } from "redux";
import { AuthInitialState } from "interfaces/redux/reducers/auth";

const initialState: AuthInitialState = {
  token: null,
  isLoggedIn: false,
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default reducer;
