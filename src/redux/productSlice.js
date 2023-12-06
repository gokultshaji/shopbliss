import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// API call - create async thunk
export const fetchProducts = createAsyncThunk('productList/fetchProducts', async () => {
    const result = await axios.get('https://fakestoreapi.com/products');
    return result.data;
});

// Slice creation
const productSlice = createSlice({
    name: 'productList',
    initialState: {
        loading: false,
        allProducts: [],
        searchArray: [],
        error: ''
    },
    reducers: {
        // Action without API
        searchProduct: (state, action) => {
            state.allProducts = state.searchArray.filter((item) =>
                item.title.toLowerCase().includes(action.payload.toLowerCase().trim())
            );
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.allProducts = action.payload;
                state.searchArray = action.payload;
                state.error = "";
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.allProducts = [];
                state.error = action.error.message;
            });
    }
});

export default productSlice.reducer;
export const { searchProduct } = productSlice.actions;
