import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();

export const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware
)(createStore);
