import { createSlice } from "@reduxjs/toolkit";

const defaultSlice = createSlice({
  name: "defalut",
  initialState: {
    dark: true,
    showSidebar: false,
  },

  reducers: {
    toggleDark: (state, action) => {
      state.dark = !state.dark;
    },
    toggleSidebar: (state, action) => {
      state.showSidebar = !state.showSidebar;
    },
    closeSidebar(state, action) {
      state.showSidebar = false;
    },
  },
});

export default defaultSlice.reducer;
export const { toggleDark, toggleSidebar, closeSidebar } = defaultSlice.actions;
