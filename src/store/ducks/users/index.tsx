import { createSlice } from "@reduxjs/toolkit";
import { getUsersList } from "./thunks";
import { IUserState } from "./type";

const initialState: IUserState = {
  usersList: [],
  usersListLoaded: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      return {
        ...state,
        usersList: action.payload,
        usersListLoaded: true,
      };
    });
  },
});

export default usersSlice.reducer;
