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
        state.chats.find((chat) => chat._id == action.payload.id).latestMessage.content = action.payload.latestMessage;
         state.chats.find(
           (chat) => chat._id == action.payload.id
        ).latestMessage.createAt = action.payload.createAt;
        //  state.chats.sort(
        //    (a, b) =>
        //       //timeSince(new Date(b.latestMessage.createAt)) - timeSince(new Date(a.latestMessage.createAt))
        //  );
    },
    
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
