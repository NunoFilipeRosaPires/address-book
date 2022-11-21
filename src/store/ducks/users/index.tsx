import { createSlice } from "@reduxjs/toolkit";
import { getUsersList } from "./thunks";
import { IUserState } from "./types";

const initialState: IUserState = {
  usersList: [],
  usersListLoaded: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUsersList: (state) => {
      return {
        ...state,
        usersList: initialState.usersList,
        usersListLoaded: initialState.usersListLoaded,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersList.pending, (state) => {
      return {
        ...state,
        usersListLoaded: false,
      };
    });
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
        usersListLoaded: true,
      };
    });
  },
});

export const { clearUsersList } = usersSlice.actions;
export default usersSlice.reducer;
