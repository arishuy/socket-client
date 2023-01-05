import React from "react";
import "../scss/components/Groupchat.css";
import Contactcard from "./Card/Contactcard";
import ScrollToBottom from "react-scroll-to-bottom";
import Messcard from "./Card/Messcard";


const Groupchat = () => {
    // const sendMessage = async () => {
    //     if (currentMessage !== "") {
    //       const messageData = {
    //         sender: user.user._id,
    //         chat: chatId,
    //         content: currentMessage,
    //         createdAt: new Date().now,
    //       };
    //       await socket.emit("inChat", chatId);
    //       await socket.emit("send_message", messageData);
          
    //       await socket.emit("getAllChats", messageData);
    //       dispatch1(
    //         addLatestMessage({
    //           id: chatId,
    //           latestMessage: "you: " + currentMessage,
    //           createdAt: new Date().now,
    //         })
    //       );
    //       setMessageList((list) => [...list, messageData]);
    //       dispatch(createNewMessageAsync(messageData));
    //       await socket.emit("send_notification",
    //         {
    //           sender: user.user.name,
    //           senderId: user.user._id,
    //           receivers: receiverId,
    //           content: `has sent you: ${currentMessage}`,
    //           isMessage: true,
    //           receiverChat: chatId,
    //           Seen: false,
    //         });
    //        const notifData = {
    //          sender: user.user._id,
    //          content: `has sent you: ${currentMessage}`,
    //          isMessage: true,
    //          receivers: receiverId,
    //          receiverChat: chatId,
    //        };
    //       dispatch(
    //         createNewNotificationAsync(notifData)
    //       ).then((res) => {
    //        });
    //       setCurrentMessage("");
    //     }
    //   };       
    // const messageListComponents = messageList?.map((message) => {
    //     return (
    //       <div>
    //         <Messcard key={message._id}
    //           classname={
    //             message.sender === user.user._id
    //               ? "mess-content-right"
    //               : "mess-content-left"
    //           }
    //           content={message.content}
    //           time={new Date(message.createdAt).toLocaleTimeString()}
    //         />
    //       </div>
    //     );
    //   });


  return (
    <div className="groupchat">
      <div className="groupchat_list">
        <h1 className="groupchat_header">Group chat</h1>
        <div className="search">
          <div className="search-content">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Enter a name"></input>
          </div>
        </div>
        <div className="groupchat_message">
        <Contactcard key="1"
        chatId="1"
        name="Group 1"
        latestMessage="Hello"
        time="1m"
      />
      <Contactcard key="1"
        chatId="1"
        name="Group 1"
        latestMessage="Hello"
        time="1m"
      />
      <Contactcard key="1"
        chatId="1"
        name="Group 1"
        latestMessage="Hello"
        time="1m"
      />
      <Contactcard key="1"
        chatId="1"
        name="Group 1"
        latestMessage="Hello"
        time="1m"
      />
      <Contactcard key="1"
        chatId="1"
        name="Group 1"
        latestMessage="Hello"
        time="1m"
      />
      <Contactcard key="1"
        chatId="1"
        name="Group 1"
        latestMessage="Hello"
        time="1m"
      />
      <Contactcard key="1"
        chatId="1"
        name="Group 1"
        latestMessage="Hello"
        time="1m"
      />
      <Contactcard key="1"
        chatId="1"
        name="Group 1"
        latestMessage="Hello"
        time="1m"
      />

        </div>
      </div>
      <div className="groupchat_content">
        <div className="groupchat_content_header">
            <span>Group Name</span>
            <i className="fa-solid fa-circle-info info"></i>
            </div>
            <ScrollToBottom className="groupchat-content__message">
          <div className="chat-content__message">
            {/* {messageListComponents} */}
            abc
            </div>
        </ScrollToBottom>
        <div className="chat-content__input">
          <i class="fa-solid fa-chevron-right send"></i>
          <input
            type="text"
            class="container__input"
            placeholder="Type something..."
            value="abc"
            // onChange={(e) => setCurrentMessage(e.target.value)}
            // onKeyPress={(e) => {
            //   if (e.key === "Enter") {
            //     sendMessage();
            //   }
            // }}
          />
          <i class="fa-solid fa-image image"></i>
          <i class="fa-solid fa-file file"></i>
          <i class="fa-solid fa-angles-right like" 
        //   onClick={sendMessage}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Groupchat;
