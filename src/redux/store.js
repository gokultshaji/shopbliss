import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice";
import wishlistSlice from "./wishlistSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
    productSlice
  },
});

export default store;
