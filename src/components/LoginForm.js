import React from "react";
import "../scss/components/Login.css";
import { useDispatch } from "react-redux";
import { loginAsync } from "../redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { getAllChatsAsync } from "../redux/Slices/ChatSlice";
import { getSocketStatus } from "../redux/Slices/SocketSlice";
const LoginForm = () => {
  let navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const dispatchAllchats = useDispatch();
  const [error, setError] = React.useState("");
  const login = {
    email: username,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync(login)).then(auth => {
      if (auth.payload === undefined) {
        setError("Invalid username or password!");
      }
      if (auth.payload.status === "success") {
        dispatch(getSocketStatus({userId: auth.payload.data.user._id }));
        dispatchAllchats(getAllChatsAsync()).then(() => {
          // localStorage.setItem("token", auth.payload.token);
          navigate("/dashboard");
        });
        // auth_context.login(auth.payload.token);
      }
    });
  }; 

  return (
    <div>
      <div className="modal">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input
                id="username"
                type="text"
                name=""
                required=""
                onChange={() => {
                  setUsername(event.target.value);
                }}
              />
              <label>Username</label>
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
                    handleSubmit(e);
                  }
                }}
              />
              <label>Password</label>
            </div>
            <p style={{ color: "red",textAlign: "center" }}>{error}</p>
            <a onClick={handleSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
          <a href="/register" style={{textAlign: "center", textDecoration: "none"}}> 
              <p>Don't have an account?</p>
              </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
