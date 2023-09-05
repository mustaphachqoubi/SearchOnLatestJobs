import { createSlice } from "@reduxjs/toolkit";

const checkJobProcessFor = createSlice({
  name: "checkJobProcessFor",
  initialState: {
    checkJobProcessFor: "All",
  },
  reducers: {
    setCheckJobProcessFor: (state, action) => {
      state.checkJobProcessFor = action.payload;
    },
  },
});

export const { setCheckJobProcessFor } = checkJobProcessFor.actions;
export default checkJobProcessFor;
