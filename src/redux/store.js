
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import favSlice from "./favSlice";
export const store=configureStore({
    reducer:{
        cart:cartSlice,
        favorites:favSlice //registered
    }
});
