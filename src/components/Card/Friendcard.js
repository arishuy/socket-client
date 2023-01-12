import React from "react";
import { useNavigate } from "react-router";

const Friendcard = (props) => {
  const navigate = useNavigate();
  function handleClick() {
    // navigate("/PersonalPage/6332e98c060472cef92f31cc");
  }
  return (
    <div className="friend-info">
      <div className="contact-avatar">
        <img
          className="avatar__image"
          src={props.pic}
          alt="avatar"
        ></img>
      </div>
      <span>{props.name}</span>
    </div>
  );
};

export default Friendcard;
