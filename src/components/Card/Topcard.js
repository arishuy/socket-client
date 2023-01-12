import React from "react";
import "../../scss/components/Topcard.css";
import { useNavigate } from 'react-router';
import { useEffect } from "react";
import Axios from "axios";

const Topcard = (props) => {
  const navigate = useNavigate();
  const [topThree, setTopThree] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await Axios.get(
        "http://localhost:5000/api/message/getTopThreeFriends",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data.data.data);
      setTopThree(data.data.data);
    }
    fetchData();
  }, [1]);
  console.log(topThree);
  function handleClick() {
    navigate("/PersonalPage/633c2fdd7603f0b89c8aaf96");
  }
  return (
    <div className="top-content">
      <div>
        <div className="top-person st1">
          <div className="crown">
            <i className="fa-solid fa-crown"></i>
          </div>
          <div
            className="top-avatar"
            onClick={() => {
              navigate(`/PersonalPage/${topThree[0]?._id[0]?.users[0]?._id}`);
            }}
          >
            <img
              className="top-person-img"
              src={` ${topThree[0]?._id[0]?.users[0]?.pic}`}
            ></img>
          </div>
          <div className="top-person-name">
            {topThree[0]?._id[0]?.users[0]?.name}
            <p className="top-person-message">{topThree[0]?.count} messages</p>
          </div>
          <div className="block-card"></div>
        </div>
      </div>
      <div className="top-person st2">
        <div
          className="top-avatar"
          onClick={() => {
            navigate(`/PersonalPage/${topThree[1]?._id[0]?.users[0]?._id}`);
          }}
        >
          <img
            className="top-person-img"
            src={` ${topThree[1]?._id[0]?.users[0]?.pic}`}
          ></img>
        </div>
        <div className="top-person-name">
          {topThree[1]?._id[0]?.users[0]?.name}
          <p className="top-person-message">{topThree[1]?.count} messages</p>
        </div>
        <div className="block-card"></div>
      </div>
      <div className="top-person st3">
        <div
          className="top-avatar"
          onClick={() => {
            navigate(`/PersonalPage/${topThree[2]?._id[0]?.users[0]?._id}`);
          }}
        >
          <img
            className="top-person-img"
            src={` ${topThree[2]?._id[0]?.users[0]?.pic}`}
          ></img>
        </div>
        <div className="top-person-name">
          {topThree[2]?._id[0]?.users[0]?.name}
          <p className="top-person-message">{topThree[2]?.count} messages</p>
        </div>
        <div className="block-card"></div>
      </div>
    </div>
  );
};

export default Topcard;
