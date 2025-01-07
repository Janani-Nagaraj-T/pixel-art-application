import { createSlice } from "@reduxjs/toolkit";

export const selectedCrayonSlice = createSlice({
  name: "selectedCrayon",
  initialState: 1,
  reducers: {
    crayonSlection: (state, action) => {
      return action.payload;
    },
  },
});

export const { crayonSlection } = selectedCrayonSlice.actions;
export default selectedCrayonSlice.reducer;
