import React from "react";
import "../scss/components/Empty.css";
const Empty = () => {
  return (
    <div className="empty">
      <div className="login-hp">
        <a href="/login">
      <button className="btn-59">
        <span>
          Login
          </span>
        </button>
        </a>
        </div>
      <div className="register-hp">
        <a href="/register">
      <button className="btn-59">
        <span>
          Register
          </span>
          </button>
</a>
</div>
      <h1>
        <span>C</span>
        <span>H</span>
        <span>A</span>
        <span>T</span>
        <span>T</span> 
        <span>U</span>
        <span>R</span>
        <span>B</span>
        <span>O</span>
      </h1>
    </div>
  );
};

export default Empty;
