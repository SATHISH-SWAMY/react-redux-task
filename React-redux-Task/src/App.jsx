// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import CartPage from './CartPage';

const App = () => {
  return (
    <Provider store={store}>
      <CartPage />
    </Provider>
  );
};

export default App;
