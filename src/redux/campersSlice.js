import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";


const campersSlice = createSlice({
    name: "campers", 
    initialState: {
        items: [], 
        isLoading: false, 
        error: null
    },

    extraReducers: builder => {
        builder
        .addCase(fetchCampers.pending, (state, action) =>{
            state.isLoading = true
        })
        .addCase(fetchCampers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchCampers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
    }
})

export const camperReducer = campersSlice.reducer