import React from 'react'
import "../scss/components/Newgroup.css"
import Friendcard from "./Card/Friendcard"
import { useSelector } from "react-redux";

const Newgroup = () => {
    const [name, setName] = React.useState("");
    const [user, setUser] = React.useState({});
    const [isDisplay, setIsDisplay] = React.useState(true);
    const people = useSelector((state) => state.user);
    const friendElements = people.friends?.map((friend) => {
        return (
            <Friendcard key={friend._id} name={friend.name} pic={friend.pic} />
        );
      });
    const group = {
        chatName: name,
        users: user,
    }
    
    const handleDisplay = () => {
        setIsDisplay(false);
        console.log(isDisplay);
    }
  return (
    <div style={{ display: isDisplay ? "block" : "none" }}>
      <div className="modal" >
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
              <label>Title</label>
            </div>            
            <div className="list-friend">
                {friendElements}
            </div>
            <div style={{display: 'flex'}}>
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
  )
}

export default Newgroup