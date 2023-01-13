import React from 'react'
import Chatwindow from '../Chatwindow'
import Sidebar from '../Sidebar'
import "../../scss/components/Body.css"
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Axios from "axios";

const Body_chatwindow = ({ user }) => {
  const [chatData, setchatData] = useState();
  const socket = useSelector((state) => state.socket.socket);
  const chatId = useParams().id;

  useEffect(() => {
    async function fetchData() {
      const chatData = await Axios.get(
        `https://chat-web-vz9a.onrender.com/api/chat/${chatId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setchatData(chatData.data.data.chat);
    }
    fetchData();
    return () => {
      setchatData();
    };
  }, [chatId]);
  return (
    <div id="body">
      <Sidebar />
      <Chatwindow user={user} socket={socket} chatData={chatData} />
    </div>
  )
}

export default Body_chatwindow