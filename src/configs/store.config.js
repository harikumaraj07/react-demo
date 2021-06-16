import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'

import reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['app']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, thunk),
);
export const persistor = persistStore(store);

