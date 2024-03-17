import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImagesData = createAsyncThunk(
  "image/fetchImagesData",
  async ({ page, query }) => {
    try {
      const Access_Key = "VaS3ud1C-0gdW1nw41FbBryaV_Q5obZ04o-3Vi2QC1E";
      const response = await axios.get(
        `https://api.unsplash.com/photos/?query=${query}&client_id=${Access_Key}&page=${page}&per_page=10`
      );
      return {data:response.data,page};
    } catch (error) {
      return error;
    }
  }
);

export const resetPagination = createAsyncThunk(
  "image/resetPagination",
  async () => {
    try {
      return "RESET";
    } catch (error) {
        return error
    }
  }
);
