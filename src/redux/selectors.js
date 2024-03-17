import { createSelector } from "@reduxjs/toolkit";

export const selectImage = (state) => state.image;

export const imagesSelector = createSelector(
  selectImage,
  (state) => state.images
);
export const pageSelector = createSelector(selectImage, (state) => state.page);
