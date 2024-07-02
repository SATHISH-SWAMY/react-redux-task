// src/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import productsData from './products.json';

const initialState = {
  cart: productsData.products.map(product => ({ ...product, quantity: 1 }))
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.cart.find(item => item.id === productId);

      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        state.cart = state.cart.filter(item => item.id !== productId);
      }
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
