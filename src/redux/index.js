import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { initialStateReducer as initialState } from "./initial-state/initialStateReducer";

// if/when using multiple state folders, combine reducers here
// const rootReducer = combineReducers({initialState, <other states>});

// if when using multiple state folders, use this store
// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = createStore(initialState, applyMiddleware(thunk));
