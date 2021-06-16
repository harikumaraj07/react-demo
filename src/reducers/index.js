import {combineReducers} from 'redux';

import app from './app.reducer';

const reducers = {
  app,
};

const combineReducer = combineReducers(reducers);

export default combineReducer;
