import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersList = createAsyncThunk("getList", async () => {
  const response = await axios.get("https://randomuser.me/api/?results=5000");
  return response.data;
});
