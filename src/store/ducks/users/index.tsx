import { createSlice } from "@reduxjs/toolkit";
import { getUsersList } from "./thunks";
import { IUserState } from "./types";

const initialState: IUserState = {
  usersList: [],
  usersListLoaded: false,
  user: undefined,
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
    setUserDetails: (state, action) => {
      return {
        ...state,
        user: action.payload,
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

export const { clearUsersList, setUserDetails } = usersSlice.actions;
export default usersSlice.reducer;
