import { configureStore } from "@reduxjs/toolkit";
import selectedCompanyName from './selectedCompanyName'

const store = configureStore({
  reducer: {
    selectedCompanyName: selectedCompanyName.reducer,
  }
})

export default store
