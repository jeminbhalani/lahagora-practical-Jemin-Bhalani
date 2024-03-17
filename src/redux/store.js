import { configureStore } from "@reduxjs/toolkit";
import { imageSliceReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    image: imageSliceReducer.reducer,
  },
});
