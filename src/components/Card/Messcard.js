import React from "react";

const Messcard = (props) => {
  return (
    <div>

      <div className={props.classname}>
        <p className="message-content-p">{props.content}</p>
          {/* <h5>{props.time}</h5> */}
      </div>
    </div>
  );
};

export default Messcard;
