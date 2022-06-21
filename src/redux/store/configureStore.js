import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducers from "../reducers";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};

















