import { createSlice } from "@reduxjs/toolkit";

const userInfo = {
  name: "sample",
  age: "20",
};

export const userSlice = createSlice({
  name: "user",
  initialState: userInfo,
  reducers: {
    redu1: (state) => {
      state.name = "sau";
    },
    redu2: () => {},
  },
});

export const { redu1, redu2 } = userSlice.actions;
export default userSlice.reducer;
