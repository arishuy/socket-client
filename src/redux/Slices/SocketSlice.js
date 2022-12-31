import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";

const SocketSlice = createSlice({
  name: "socket",
  initialState: {},
  reducers: {
    getSocketStatus: (state,action) => {
      const socket = io("https://chat-web-vz9a.onrender.com", { transports: ['websocket', 'polling', 'flashsocket'] });
      socket.emit("addUser",action.payload.userId);
      state = {socket};
      console.log(state);
      return state;
    },
  },
});
export const { getSocketStatus } = SocketSlice.actions;
export default SocketSlice.reducer;
