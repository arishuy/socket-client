import React from "react";
import { useDispatch } from "react-redux";
import { signupAsync } from "../redux/Slices/AuthSlice"
import { useNavigate } from "react-router-dom";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice";
import { getSocketStatus } from "../redux/Slices/SocketSlice";
import "../scss/components/Login.css";

const RegisterForm = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const dispatchAllchats = useDispatch();
  const [name,setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [error, setError] = React.useState("");

  const register = {
    name: name,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(register);
    dispatch(signupAsync(register)).then((auth) => {
      if (auth.payload === undefined) {
        setError("Something went wrong! Please try again.");
      }
      if (auth.payload.status === "success") {
        navigate("/login");
      }
    });
  };
  return (
    <div>
      <div className="modal">
        <div className="login-box">
          <h2>Sign Up</h2>
          <form>
          <div className="user-box">
              <input
                id="name"
                type="text"
                name=""
                required=""
                onChange={() => {
                  setName(event.target.value);
                }}
              />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input
                id="email"
                type="text"
                name=""
                required=""
                onChange={() => {
                  setEmail(event.target.value);
                }}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                id="password"
                type="password"
                name=""
                required=""
                onChange={() => {
                  setPassword(event.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleRegister(e);
                  }
                }}
              />
              <label>Password</label>
            </div>
            <div className="user-box">
              <input
                id="passwordConfirm"
                type="password"
                name=""
                required=""
                onChange={() => {
                  setPasswordConfirm(event.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleRegister(e);
                  }
                }}
              />
              <label>Confirm Password</label>
            </div>
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            <a onClick={handleRegister}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
