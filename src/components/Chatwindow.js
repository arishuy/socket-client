import React, { useEffect } from "react";
import "../scss/components/Chatwindow.css";
import Messcard from "./Card/Messcard";
import { useSelector, useDispatch } from "react-redux";
import { createNewMessageAsync } from "../redux/Slices/MessageSlice";
import ScrollToBottom from "react-scroll-to-bottom";
import { createNewNotificationAsync } from "../redux/Slices/NotificationSlice";
import { useParams } from "react-router";
import Contact from "./Contact";
import { addLatestMessage } from "../redux/Slices/ChatSlice";
import sound from "./sound.mp3";

const Chatwindow = ({ user, socket, chatData }) => {
  const allMessages = useSelector((state) => state.message.messages);
  const dispatch = useDispatch();
  const chatId = useParams().id;
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState(allMessages);
  const dispatch1 = useDispatch();
  useEffect(() => {
    setMessageList(allMessages);
    socket.emit("inChat", chatId);
  }, [chatId]);
  // sound effect when receive message
  useEffect(() => {
    
  }, [messageList]);
  // send message
  const sendMessage = async () => {
    //
    if (currentMessage !== "") {
      const messageData = {
        sender: user.user._id,
        chat: chatId,
        content: currentMessage,
        createdAt: new Date(),
      };
      await socket.emit("inChat", chatId);
      await socket.emit("send_message", messageData);
      await socket.emit("getAllChats", messageData);
      dispatch1(
        addLatestMessage({
          id: chatId,
          latestMessage: "you: " + currentMessage,
          createAt: messageData.createdAt,
        })
      );
      setMessageList((list) => [...list, messageData]);
      dispatch(createNewMessageAsync(messageData));
      setCurrentMessage("");
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      new Audio(sound).play();
      if (data.chat === chatId) {
        setMessageList((list) => [...list, data]);
      }
      dispatch1(
        addLatestMessage({
          id: data.chat,
          latestMessage:
            data.sender == user.user._id
              ? "you: " + data.content
              : data.content,
          createAt: data.createdAt,
        })
      );
    });
  }, [socket, chatId]);
  const messageListComponents = messageList?.map((message) => {
    return (
      <div>
        <Messcard
          key={message._id}
          classname={
            message.sender === user.user._id
              ? "mess-content-right"
              : "mess-content-left"
          }
          content={message.content}
          pic={chatData?.users?.find((mem) => mem._id == message.sender).pic}
          time={new Date(message.createdAt).toLocaleTimeString()}
        />
      </div>
    );
  });
  return (
    <div className="chat">
      <div className="chat-contact-container">
        <Contact />
      </div>
      <div className="chat-content">
        <div className="chat-content__header">
          <img
            className="contact-avatar"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            src={
              chatData?.isGroupChat
                ? chatData.pic
                : chatData?.users[0]._id == user.user._id
                ? chatData?.users[1].pic
                : chatData?.users[0].pic
            }
          ></img>
          <h1
            className="chat-h1"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "Black",
              margin: "0.5rem 0 0.5rem 0",
            }}
          >
            {chatData?.isGroupChat
              ? chatData.chatName
              : chatData?.users[0]._id == user.user._id
              ? chatData?.users[1].name
              : chatData?.users[0].name}
          </h1>
        </div>
        <ScrollToBottom className="chat-content__message1">
          <div className="chat-content__message">{messageListComponents}</div>
        </ScrollToBottom>
        <div className="chat-content__input">
          <i className="fa-solid fa-chevron-right send"></i>
          <input
            type="text"
            className="container__input"
            placeholder="Type something..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <i className="fa-solid fa-image image"></i>
          <i className="fa-solid fa-file file"></i>
          <i className="fa-solid fa-angles-right like" onClick={sendMessage}></i>
        </div>
      </div>
    </div>
  );
};

export default Chatwindow;
