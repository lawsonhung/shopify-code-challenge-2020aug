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
import { BrowserRouter } from 'react-router-dom';


const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const lawsonsStore = createStore(persistedReducer);
const persistor = persistStore(lawsonsStore);

ReactDOM.render(
  <Provider store={lawsonsStore}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
