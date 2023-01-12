import React, { useEffect } from "react";
import "../scss/components/Contact.css";
import Contactcard from "./Card/Contactcard";
import Photo from "./Card/Photo";
import { useDispatch, useSelector } from "react-redux";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice";
import { timeSince } from "../utils/changeDate";
import Newgroup from "./Newgroup";
import Axios from "axios";

const Contact = () => {
  const [chats, setChats] = React.useState([]);
  const username = useSelector((state) => state.auth[0].user.name);
  const socket = useSelector((state) => state.socket.socket);
  const allChats = useSelector((state) => state.chats.chats);
  const dispatch = useDispatch();
  const [isDisplay, setIsDisplay] = React.useState(false);
  const [people, setPeople] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await Axios.get(
        "https://chat-web-vz9a.onrender.com/api/user/friends",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPeople(data.data.data.friends);
    }
    fetchData();
  }, [1]);
  useEffect(() => {
    dispatch(getAllChatsAsync()).then((res) => {
      setChats(res.payload.data.data.chats);
    });
  }, [dispatch]);
  useEffect(() => {
    socket.on("receive_message", (data) => {
      let temp = chats.find((chat) => {
        chat._id == data.chat;
      });
      if (temp) {
        temp.latestMessage.content = data.content;
        temp.latestMessage.createAt = data.createdAt;
        chats.sort(function (a, b) {
          return (
            new Date(b.latestMessage.createAt) -
            new Date(a.latestMessage.createAt)
          );
        });
        setChats([chats]);
      }
    });
  }, [socket]);

  const allChatsElement = allChats?.map((chat) => {
    return (
      <Contactcard
        key={chat._id}
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
        src={
          username === chat.users[0].name
            ? chat.users[1].pic
            : chat.users[0].pic
        }
      />
    );
  });
  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
  };
  return (
    <div className="contact-body">
      <div className="contact-content">
        <div className="contact-regular">
          <h1>Regular Contact</h1>
          <div className="contact-avatar">{TopFourFriendsElement}</div>
        </div>
        <div className="search">
          <div className="search-content">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Enter a name"></input>
          </div>
          <button onClick={handleDisplay}>Create Group</button>
        </div>
      </div>
      <div className="contact-message">{allChatsElement}</div>
      {isDisplay && <Newgroup people={people} />}
    </div>
  );
};

export default Contact;
