import React, { useEffect } from "react";
import "../scss/components/Contact.css";
import Contactcard from "./Card/Contactcard";
import Photo from "./Card/Photo";
import { useDispatch, useSelector } from "react-redux";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice";
import {timeSince} from "../../src/utils/changeDate"; 
const Contact = () => {
  const [chats, setChats] = React.useState([]);
  const socket = useSelector((state) => state.socket.socket);
  console.log(chats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllChatsAsync()).then((res) => {
      setChats(res.payload.data.data.chats);
    });
  }, [dispatch]);
  useEffect(() => {
    socket.on("receive_message", (data) => {
      let temp = chats.find((chat) => { chat._id == data.chatId });
      if (temp) {
        temp.latestMessage.content = data.content;
        temp.latestMessage.createdAt = data.createdAt;
        setChats([...chats]);
      }
      console.log(chat);

    });
  }, [socket]);
  const username = useSelector((state) => state.auth[0].user.name);
  const chat = useSelector((state) => state.chat);  
  const allChats = useSelector((state) => state.chats.chats);
  const allChatsElement = allChats?.map((chat) => {
    return (
      <Contactcard
        chatId={chat._id}
        name={username===chat.users[0].name?chat.users[1].name:chat.users[0].name}
        latestMessage={chat.latestMessage?.content}
        time={timeSince(new Date (chat.latestMessage?.createdAt))}
      />
    );
  });
  
  return (
    <div className="contact-body">
      <div className="contact-content">
        <div className="contact-regular">
          <h1>Regular Contact</h1>
          <div className="contact-avatar">
            <Photo src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg" />
            <Photo src="https://play-lh.googleusercontent.com/4qAz40o6M5w6hJ62VsjwGbYueB0fRWPmiG1yOZpNHn3qo2uzlhZZ1mwE5jtBlPp3Lw" />
            <Photo src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg" />
            <Photo src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/07/440d2bdf5e1e485b027e41fedaf33bbc-696x696.jpg?fit=700%2C20000&quality=95&ssl=1" />
          </div>
        </div>
        <div className="search">
          <div className="search-content">
            <i class="fa-solid fa-magnifying-glass"></i>
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
