import { createSlice } from "@reduxjs/toolkit";

const selectedCompanyName = createSlice({
  name: "selectedCompanyName",
  initialState: {
    selectedCompanyName: "All"
  },
  reducers: {
    setSelectedCompanyName: (state, action) => {
      state.selectedCompanyName = action.payload
    }
  }
})

export const { setSelectedCompanyName } = selectedCompanyName.actions
export default selectedCompanyName
