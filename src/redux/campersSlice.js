import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    allItems: [],
    visibleItems: [],
    total: 0,
    perPage: 4,
    page: 1,
    hasMore: true,
    isLoading: false,
    error: null,
  },

  reducers: {
    loadMore(state) {
      state.page += 1;
      const itemsToShow = state.page * state.perPage;
      state.visibleItems = state.allItems.slice(0, itemsToShow);
      state.hasMore = itemsToShow < state.total;
    },

    resetPagination(state) {
      state.page = 1;
      state.visibleItems = state.allItems.slice(0, state.perPage);
      state.hasMore = state.perPage < state.total;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allItems = action.payload.items;
        state.total = action.payload.total;
        state.page = 1;
        state.visibleItems = state.allItems.slice(0, state.perPage);
        state.hasMore = state.perPage < state.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { loadMore, resetPagination } = campersSlice.actions;
export const camperReducer = campersSlice.reducer;
