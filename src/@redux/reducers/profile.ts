import { Reducer } from "redux";
import { ProfileState } from "interfaces/redux/reducers/profile";

const initialState: ProfileState = {
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
