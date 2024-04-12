import { createSlice } from "@reduxjs/toolkit";
import { CatalogueData } from "../../data/data";

const initialState:CatalogueData[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      const cart = action.payload;
      const isExists = state.some((r) => r.id === cart.id);
      if (isExists) {
        const index = state.findIndex((item) => item.id === cart.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(cart);
      }
    },
  },
});

export const { actions, reducer } = cartSlice;
