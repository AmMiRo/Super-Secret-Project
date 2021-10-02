import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { messagingReducer as messaging } from "./messaging/messagingReducer";
import { authReducer as auth } from "./auth/authReducer";
import { userReducer as user } from "./user/userReducer";

// create root reducer
const rootReducer = combineReducers({ messaging, auth, user });

// creates and exports store to be used by app
export const store = createStore(rootReducer, applyMiddleware(thunk));
