import { createSlice } from "@reduxjs/toolkit";
import { ISettingsState } from "./types";
import franceFlag from "../../../assets/france.png";
import spainFlag from "../../../assets/spain.png";
import switzerlandFlag from "../../../assets/switzerland.png";
import unitedKingdomFlag from "../../../assets/united-kingdom.png";

const initialState: ISettingsState = {
  nationalities: [
    {
      flag: switzerlandFlag,
      name: "Switzerland",
      abbreviation: "ch",
    },
    {
      flag: spainFlag,
      name: "Spain",
      abbreviation: "es",
    },
    {
      flag: franceFlag,
      name: "France",
      abbreviation: "fr",
    },
    {
      flag: unitedKingdomFlag,
      name: "United Kingdom",
      abbreviation: "gb",
    },
  ],
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setNationalities: (state, action) => {
      return { ...state, nationalities: action.payload };
    },
  },
});

export const { setNationalities } = settingsSlice.actions;
export default settingsSlice.reducer;
