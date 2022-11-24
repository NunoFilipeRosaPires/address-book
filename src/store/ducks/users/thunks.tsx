import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUsersListProps } from "./types";

export const getUsersList = createAsyncThunk("getList", async (props: getUsersListProps) => {
  const { batchSize, page, nationalities } = props;
  const response = await axios.get(
    process.env.REACT_APP_API_URL + `&results=${batchSize}&page=${page}&nat=${nationalities.toLocaleLowerCase()}`
  );
  return response.data.results;
});
