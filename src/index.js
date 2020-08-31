import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storage from 'redux-persist/lib/storage';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
let lawsonsStore = createStore(persistedReducer);
let persistor = persistStore(lawsonsStore);

ReactDOM.render(
  <Provider store={lawsonsStore}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
