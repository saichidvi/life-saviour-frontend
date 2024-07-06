import { createSlice } from "@reduxjs/toolkit";

//Import the api request function
import { loginUser } from "./api";

const userInfo = {
  user_id: "",
  userName: "",
  status: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: userInfo,
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.data = action.payload;
      console.log(action.payload);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const { redu1, redu2 } = userSlice.actions;
export default userSlice.reducer;
