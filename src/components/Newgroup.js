import React from "react";
import "../scss/components/Newgroup.css";
import Friendcard from "./Card/Friendcard";

const Newgroup = (props) => {
  const [name, setName] = React.useState("");
  const [user, setUser] = React.useState([]);
  const [isDisplay, setIsDisplay] = React.useState(true);
  const people = props.people;
  console.log(user);
  const group = {
      chatName: name,
    users: user,
  };
  
const friendElements = people.friends?.map((friend) => {
    const [isDisplay1, setIsDisplay1] = React.useState(false);
    const handleSelect = () => {
        if (user.includes(friend._id)) {
        setUser(user.filter((id) => id !== friend._id));
      } else {
        setUser([...user, friend._id]);
      }
      setIsDisplay1(!isDisplay1);
    };
    
    return (
      <div
        style={{ display: "flex", alignItems: "center"  }}
        onClick={handleSelect}
      >
        <Friendcard key={friend._id} name={friend.name} pic={friend.pic} />
        {isDisplay1 && (
          <div className="selected">
            <i className="fa-solid fa-check"></i>
          </div>
        )}
      </div>
    );
  });
  const handleSubmit = () => {
    alert("Tính năng đang được phát triển. Vui lòng thử lại sau!");
    };
  const handleDisplay = () => {
    setIsDisplay(false);
    console.log(isDisplay);
  };

  return (
    <div style={{ display: isDisplay ? "block" : "none" }}>
      <div className="modal">
        <div className="group-box">
          <h2>Create New Group</h2>
          <form>
            <div className="title-box">
              <input
                id="name"
                type="text"
                name=""
                required=""
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <label>Group Name</label>
            </div>
            <div className="list-friend">{friendElements}</div>
            <div style={{ display: "flex" }} onClick={handleSubmit}>
              <a>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Create
              </a>
              <a onClick={handleDisplay}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Close
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newgroup;
