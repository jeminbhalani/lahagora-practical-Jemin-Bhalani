import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { fetchImagesData, resetPagination } from "./actions";

const initialState = {
  images: [],
  page: 1,
  loading: false,
};

export const imageSliceReducer = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImagesData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchImagesData.fulfilled, (state, action) => {
      state.loading = false;
      state.images = [...state.images, ...action.payload.data];
      state.page = action.payload.page + 1;
    });
    builder.addCase(fetchImagesData.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(resetPagination.fulfilled, (state, action) => {
      state.page = 1;
    });
  },
});
