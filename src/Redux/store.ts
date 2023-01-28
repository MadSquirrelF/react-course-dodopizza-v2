import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import cart from './cart/slice';
import pizza from './pizza/slice';
import post from './post/slice'
import { useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
    post
  },
});

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;