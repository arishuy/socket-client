import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (payload) => {
    const response = await Axios.post(
      "https://chat-web-vz9a.onrender.com/api/auth/login",
      payload
    );
    localStorage.setItem("token", response.data.token);
    const user = response.data;
    return user;
  }
);

export const signupAsync = createAsyncThunk(
  "auth/signUpAsync",
  async (payload) => {
    const response = await Axios.post(
      "https://chat-web-vz9a.onrender.com/api/auth/signup",
      payload
    );
    localStorage.setItem("token", response.data.token);
    const user = response.data;
    return user;
  }
)

const AuthSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    updateState: (state, action) => {
      state[0].user = action.payload;
      return state;
    },
    getCurrentState: (state) => {
      return state;},
    logoutAccount: (state) => { 
      localStorage.removeItem("token");
      state = [];
      return state;
    },
  },
  extraReducers: {
    [loginAsync.fulfilled]: (state, action) => {
      state.push(action.payload.data);
    },
  },
});
export const selectAuth = (state) => state.auth;
export const { getCurrentState, logoutAccount } = AuthSlice.actions;
export default AuthSlice.reducer;
