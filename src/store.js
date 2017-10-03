import { combineReducers, createStore } from 'redux';
import work from './reducers/work.js';
import lab from './reducers/lab.js';


let reducer = combineReducers({ lab, work });
let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
