import { configureStore } from '@reduxjs/toolkit';
import goods from './goodsSlice';
import cart from './cartSlice';

export const store = configureStore({
  reducer: {
    goods,
    cart
  }
})