import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const addNewFriendAsync = createAsyncThunk(
  "user/addNewFriendAsync",
  async (payload) => {
    try {
      const response = await Axios.post(
        `https://chat-web-vz9a.onrender.com/api/user/addFriend`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const message = response.data;
      return message;
    } catch (error) {
    }
  }
);

export const acceptFriendAsync = createAsyncThunk(
  "user/acceptFriendAsync",
  async (payload) => {
    try {
      const response = await Axios.post(
        `https://chat-web-vz9a.onrender.com/api/user/acceptFriend`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const message = response.data;
      return message;
    } catch (error) {
    }
  }
);

export const getUserByIdAsync = createAsyncThunk(
  "user/getUserByIdAsync",
  async (userId) => {
    const data = await Axios.get(`https://chat-web-vz9a.onrender.com/api/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  }
);

export const FindUserByNameAsync = createAsyncThunk(
  "user/FindUserByNameAsync",
  async (payload) => {
    try {
      const response = await Axios.post(
        `https://chat-web-vz9a.onrender.com/api/user/findUser`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const message = response.data;
      return message;
    } catch (error) {
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState:{},
  reducers: {},
  extraReducers: {
    [addNewFriendAsync.fulfilled]: (state, action) => {
    },
    [acceptFriendAsync.fulfilled]: (state, action) => {
    },
    [getUserByIdAsync.fulfilled]: (state, action) => {
      state = { ...action.payload.data.data.user };
      return action.payload.data.data.user;
    },
    [FindUserByNameAsync.fulfilled]: (state, action) => {
    }
  },
});

export default UserSlice.reducer;
