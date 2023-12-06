import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    // Existing reducers for addToCart and removeCart
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },

    // New reducer for clearing the cart (making it empty)
    clearCart: (state, action) => {
      return []; // Returns an empty array to clear the cart
    },
    },
  },
);

export default cartslice.reducer;

// Actions
export const { addToCart, removeCart, clearCart } = cartslice.actions;
