import { Reducer } from "redux";
import { NotificationInitialState } from "interfaces/redux/reducers/notification";

const initialState: NotificationInitialState = {
  token: null,
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default reducer;
