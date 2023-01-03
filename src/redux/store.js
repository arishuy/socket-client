import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ChatReducer from "./Slices/ChatSlice";
import AuthReducer from "./Slices/AuthSlice";
import MessageReducer from "./Slices/MessageSlice";
import UserReducer from "./Slices/UserSlice";
import SocketReducer from "./Slices/SocketSlice";
import NotificationReducer from "./Slices/NotificationSlice";
import ReminderSlice from "./Slices/ReminderSlice";

const customMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export default configureStore({
  reducer: {
    chats: ChatReducer,
    auth: AuthReducer,
    user: UserReducer,
    message: MessageReducer,
    socket: SocketReducer,
    notifications: NotificationReducer,
    reminder: ReminderSlice,
  },
  middleware: customMiddleware,
});
