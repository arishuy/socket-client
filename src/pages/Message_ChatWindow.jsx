import React from "react";
import Body_chatwindow from "../components/Body/Body_chatwindow";
import Header from "../components/Header";
import { selectAuth } from "../redux/Slices/AuthSlice";
import { useSelector} from "react-redux";

const Message_ChatWindow = () => {
  const auth = useSelector(selectAuth);
  return (
    <div>
      <Header />
      <Body_chatwindow user={auth[0]} />
    </div>
  );
};

export default Message_ChatWindow;
