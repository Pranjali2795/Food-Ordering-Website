// src/redux/favSlice.js
import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.filter(item => item.id !== action.payload.id); // remove
      } else {
        state.push(action.payload); // add
      }
    },
  },
});

export const { toggleFavorite } = favSlice.actions;
export default favSlice.reducer;