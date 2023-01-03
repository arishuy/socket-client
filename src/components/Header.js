import React, { useEffect } from "react";
import "../scss/components/Header.css";
import Notification from "./Notification";
import Loginout from "./Loginout";
import { useSelector } from "react-redux";
import {datenow} from "../utils/datenow";


const Header = () => {
  const [datetime, setDatetime] = React.useState(datenow());
  useEffect(() => {
    console.log("useEffect");
    const interval = setInterval(() => {
      setDatetime(datenow());
    }, 1000*60);
    return () => clearInterval(interval);
  }, []);
  const socket = useSelector((state) => state.socket.socket);
  return (
      <div id="header">
        <div className="navigation">
          <div className="text">Chat App</div>
        <h1>{datetime}</h1>
        <Notification  socket={socket}/>
        <Loginout />
        </div>
    </div>
  );
};

export default Header;
