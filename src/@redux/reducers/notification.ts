import { Reducer } from "redux";
import { NotificationState } from "interfaces/redux/reducers/notification";

const initialState: NotificationState = {
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
