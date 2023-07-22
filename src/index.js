import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Product from './reducer/Product';
import Cart from './reducer/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    Product,
    Cart
  }
})

root.render(

  <Provider store={store}>
    <App />
  </Provider>

);

