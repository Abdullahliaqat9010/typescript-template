import { Reducer } from "redux";
import { ProfileInitialState } from "interfaces/redux/reducers/profile";

const initialState: ProfileInitialState = {
  name: "",
  email: "",
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default reducer;
