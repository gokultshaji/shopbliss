import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    // Actions
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      return state.filter(i => i.id !== action.payload);
    }
  }
});

// Export reducer
export default wishlistSlice.reducer;

// Export actions
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
