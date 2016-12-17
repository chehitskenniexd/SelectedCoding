import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer'
import createLogger from 'redux-logger';

export default createStore(
//   rootReducer,
  rootReducer,
  applyMiddleware(createLogger(), thunkMiddleware)
);
