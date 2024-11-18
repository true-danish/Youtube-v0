import { configureStore } from "@reduxjs/toolkit";
import defaultReducer from "./defalultSlice";
const appStore = configureStore({
  reducer: {
    default: defaultReducer,
  },
});

export default appStore;
