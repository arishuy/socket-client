import React from "react";

const Photo = (props) => {
  return (
    <img
      key = {props.photoId}
      className="avatar__image"
      src={props.src}
      alt="avatar"
    ></img>
  );
};

export default Photo;
