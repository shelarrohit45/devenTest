import { combineReducers } from "redux";
import auth from "./auth";
/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const appReducer = combineReducers({
  auth: auth,
});

const rootReducers = (state, action) => {
  return appReducer(state, action);
};

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
