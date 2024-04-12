import { configureStore } from '@reduxjs/toolkit'
import { reducer as likesReducer } from "./likes/Likes.slice";
import {reducer as cartReducer} from './cart/cart.slice'


export const store = configureStore({
  reducer: {
    likes: likesReducer,
    cart: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch