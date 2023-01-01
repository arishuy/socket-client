import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
export const getAllNotificationsAsync = createAsyncThunk(
  "notifications/getAllNotificationsAsync",
  async () => {
    const data = await Axios.get("https://chat-web-vz9a.onrender.com/api/notification/tome", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  }
);
export const createNewNotificationAsync = createAsyncThunk(
  "notifications/createNewNotificationAsync",
  async (payload) => {
    try {
      const response = await Axios.post(
        `https://chat-web-vz9a.onrender.com/api/notification`,
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
const NotificationSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getAllNotificationsAsync.fulfilled]: (state, action) => {
      return action.payload.data.data;
      },
      [createNewNotificationAsync.fulfilled]: (state, action) => { 
      }
  },
});

export default NotificationSlice.reducer;

