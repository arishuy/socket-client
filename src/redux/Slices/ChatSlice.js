import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
// import { timeSince } from "../../utils/timeSince";
export const getAllChatsAsync = createAsyncThunk(
  "chats/getAllchatAsync",
  async () => {
    const data = await Axios.get("https://chat-web-vz9a.onrender.com/api/chat", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  }
  );
  export const getChatID = createAsyncThunk(
    "chats/getChatID",
    async (userID1, userID2) => {
        const data = await Axios.get(`https://chat-web-vz9a.onrender.com/api/chat`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        return data;
      } 
  );
  const ChatSlice = createSlice({
    name: "chats",
  initialState: [],
    reducers: {
      addLatestMessage: (state, action) => {
        let temp = state.chats.find((chat) => chat._id == action.payload.id);
        if (temp) {
          temp.latestMessage.content = action.payload.latestMessage;
          //temp.latestMessage.createdAt = action.payload.createdAt;
          console.log(action.payload.createAt);
          console.log(temp.latestMessage.createAt);
          temp.latestMessage.createAt = action.payload.createAt;
          console.log("1");
          state.chats.sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return (
              new Date(b.latestMessage.createAt) -
              new Date(a.latestMessage.createAt)
            );
          });
        }
        console.log(state.chats);
      }
      
    },
  extraReducers: {
    [getAllChatsAsync.fulfilled]: (state, action) => {
      state = action.payload.data.data;
       return action.payload.data.data;
    },  
  },
});
export const { getAllChats, addLatestMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
