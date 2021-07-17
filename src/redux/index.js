import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { messagingReducer as messaging } from "./messaging/messagingReducer";
import { userAuthReducer as userAuth } from "./userAuth/userAuthReducer";
import { userSearchReducer as userSearch } from "./userSearch/userSearchReducer";

const rootReducer = combineReducers({ messaging, userAuth, userSearch });

export const store = createStore(rootReducer, applyMiddleware(thunk));
