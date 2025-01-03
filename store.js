import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';  // Ensure thunk is imported correctly
import { userReducer } from './src/reducers/userReducers';

const rootReducer = combineReducers({
  users: userReducer,
  // Add any other reducers you have here
});

export const initializeStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk));  // Applying middleware correctly
};
