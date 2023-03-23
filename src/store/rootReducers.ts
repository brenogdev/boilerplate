import { combineReducers } from "redux";

import authReducer from "../features/Auth/authSlice";
import errorReducer from "../features/Error/errorSlice";

export const rootReducer = combineReducers({
  authentication: authReducer,
  hasErrorApp: errorReducer,
});
