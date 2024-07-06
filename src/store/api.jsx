import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//Main URL
const LIFE_SAVIOUR_API_URL = "http://localhost:2000/life-saviour-api";

export const signInUser = createAsyncThunk("signInUser", async (payload) => {
  const response = await axios.post(
    `${LIFE_SAVIOUR_API_URL}/user/signIn`,
    payload,
    { withCredentials: true }
  );
  return response?.data;
});

export const loginUser = createAsyncThunk("loginUser", async (payload) => {
  const response = await axios.post(
    `${LIFE_SAVIOUR_API_URL}/user/signIn`,
    payload,
    { withCredentials: true }
  );
  return response?.data;
});
