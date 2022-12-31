import React from "react";

const Photo = (props) => {
  return (
    <img
      className="avatar__image"
      src={props.src}
      alt="avatar"
    ></img>
  );
};

export default Photo;
