import { createSlice } from "@reduxjs/toolkit";

const defaultSlice = createSlice({
  name: "defalut",
  initialState: {
    dark: true,
    showSidebar: false,
    videoList: [],
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
    addVideoList(state, action) {
      state.videoList = state.videoList.concat(action.payload);
    },
    addSearchVideoList(state, action) {
      state.videoList = [...action.payload];
    },
  },
});

export default defaultSlice.reducer;
export const {
  toggleDark,
  toggleSidebar,
  closeSidebar,
  addVideoList,
  addSearchVideoList,
} = defaultSlice.actions;
