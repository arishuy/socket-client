import React, { useEffect } from "react";
import "../scss/components/Contact.css";
import Contactcard from "./Card/Contactcard";
import Photo from "./Card/Photo";
import { useDispatch, useSelector } from "react-redux";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice";
import {timeSince} from "../utils/changeDate";
const Contact = () => {
  const [chats, setChats] = React.useState([]);
  const chatFromRedux = useSelector((state) => state.chats);
  const socket = useSelector((state) => state.socket.socket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllChatsAsync()).then((res) => {
      setChats(res.payload.data.data.chats);
    });
  }, [dispatch]);
  useEffect(() => {
    socket.on("receive_message", (data) => {
      let temp = chats.find((chat) => { chat._id == data.chat });
      if (temp) {
        temp.latestMessage.content = data.content;
        temp.latestMessage.createAt = data.createdAt;
        chats.sort(function (a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return (
            new Date(b.latestMessage.createAt) -
            new Date(a.latestMessage.createAt)
          );
        });
        setChats([chats]);
      }

    });
  }, [socket]);
  console.log(chats);
  console.log(chatFromRedux)
  const username = useSelector((state) => state.auth[0].user.name);
  const allChats = useSelector((state) => state.chats.chats);
  const allChatsElement = allChats?.map((chat) => {
    return (
      <Contactcard key={chat._id}
        chatId={chat._id}
        name={chat.isGroupChat ? chat.chatName :username===chat?.users[0].name?chat.users[1].name:chat.users[0].name}
        latestMessage={chat.latestMessage?.content}
        time={timeSince(new Date(chat.latestMessage?.createAt))}
        avatar={chat.isGroupChat?chat.pic:username===chat.users[0].name?chat.users[1].pic:chat.users[0].pic}
      />
    );
  });

  const TopFourFriendsElement = allChats?.slice(0, 4).map((chat) => {
    return (
      <Photo
        photoId={chat._id}
        src={username === chat.users[0].name ? chat.users[1].pic:chat.users[0].pic}
      />
    );
   });
  
  return (
    <div className="contact-body">
      <div className="contact-content">
        <div className="contact-regular">
          <h1>Regular Contact</h1>
          <div className="contact-avatar">
            {TopFourFriendsElement}
          </div>
        </div>
        <div className="search">
          <div className="search-content">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Enter a name"></input>
          </div>
        </div>
      </div>
      <div className="contact-message">
        {allChatsElement}
      </div>
    </div>
  );
};

export default Contact;
