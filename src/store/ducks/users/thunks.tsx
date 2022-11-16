import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersList = createAsyncThunk("getList", async () => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "&results=1000"
  );
  return response.data;
});
