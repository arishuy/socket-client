import React from "react";
import "../../scss/components/Topcard.css";
import { useNavigate } from 'react-router';

const Topcard = (props) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/PersonalPage/6332e98c060472cef92f31cc");
  }
  return (
    <div className="top-content">
      <div>
        <div className="top-person st1">
          <div className="crown">
        <i className="fa-solid fa-crown"></i>
        </div>
          <div className="top-avatar" onClick={handleClick}>
            <img
              className="top-person-img"
              src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
            ></img>
          </div>
          <div className="top-person-name">
            {props.name}
            <p className="top-person-message">{props.amount}</p>
          </div>
        <div className="block-card">
        </div>
        </div>
      </div>
      <div className="top-person st2">
        <div className="top-avatar" onClick={handleClick}>
          <img
            className="top-person-img"
            src="https://play-lh.googleusercontent.com/4qAz40o6M5w6hJ62VsjwGbYueB0fRWPmiG1yOZpNHn3qo2uzlhZZ1mwE5jtBlPp3Lw"
          ></img>
        </div>
        <div className="top-person-name">
        Uyên Hoàng 
          <p className="top-person-message">150</p>
        </div>
        <div className="block-card">
        </div>
      </div>
      <div className="top-person st3">
        <div className="top-avatar" onClick={handleClick}>
          <img
            className="top-person-img"
            src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg"
          ></img>
        </div>
        <div className="top-person-name">
        Văn Hải
          <p className="top-person-message">120</p>
        </div>
        <div className="block-card">
        </div>
      </div>
    </div>
  );
};

export default Topcard;
