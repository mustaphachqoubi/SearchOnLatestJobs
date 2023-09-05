import { configureStore } from "@reduxjs/toolkit";
import selectedCompanyName from "./selectedCompanyName";
import checkJobProcessFor from "./checkJobProcessFor";

const store = configureStore({
  reducer: {
    selectedCompanyName: selectedCompanyName.reducer,
    checkJobProcessFor: checkJobProcessFor.reducer,
  },
});

export default store;
