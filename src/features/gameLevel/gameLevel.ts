import { createSlice } from "@reduxjs/toolkit";

const gameLevelSlice = createSlice({
  name: "gameLevel",
  initialState: {
    currentLevel: 1,
  },
  reducers: {
    setLevel: (state, action) => {
      return { ...state, currentLevel: action.payload };
    },
  },
});

export const { setLevel } = gameLevelSlice.actions;
export default gameLevelSlice.reducer;
