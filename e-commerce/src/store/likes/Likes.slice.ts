import { createSlice } from "@reduxjs/toolkit";
import { CatalogueData } from "../../data/data";

const initialState:CatalogueData[]= [];

export const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLikes: (state, action) => {
      const like = action.payload;
      const isExists = state.some((r) => r.id === like.id);
      if (isExists) {
        const index = state.findIndex((item) => item.id === like.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(like);
      }
    },
  },
});

export const { actions, reducer } = likeSlice;
