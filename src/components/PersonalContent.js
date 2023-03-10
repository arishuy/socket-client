import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { addNewFriendAsync } from '../redux/Slices/UserSlice';
import { getChatID } from '../redux/Slices/ChatSlice';
import "../scss/components/PersonalContent.css";
import { getUserByIdAsync } from '../redux/Slices/UserSlice';
const PersonalContent = () => {
  const params = useParams();
  let isMe = false;
  const myID = useSelector((state) => state.auth[0].user._id);
  const [isFriend, setIsFriend] = React.useState(false);
  const [isRequest, setIsRequest] = React.useState(false);
  const personId = params.id;
  const [person, setPerson] = React.useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (personId === myID) {
    isMe = true;
  }
  const handleEdit = () => {
    navigate(`/EditProfile`);
  };
  const handleCancelRequest = () => {
    setIsRequest(false);
  };
  const handleAddingFriend = () => {
    dispatch(addNewFriendAsync({
      id: personId
    })).then((res) => { 
      setIsRequest(true);
    });
  }
   useEffect(() => {
     dispatch(getUserByIdAsync(personId)).then((res) => {
       setPerson(res.payload.data.data.user);
     });
   }, [dispatch]);
    const r1 = person.friends?.find(friend => friend._id === myID)?true:false;
    useEffect(() => {
      setIsFriend(r1);
    })
    const handleMessage = () => {
        dispatch(getChatID(myID,person._id)).then((res) => {
          navigate(`/Message_ChatWindow/${res.payload.data.data.chats[0]._id}`);
        });
    };
    const personName = person.name;
    return (
      <div className="personal-container">
        <div className="personal-content">
          <div className="personal-content-header-cover">
            <img className="cover-img" src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000"></img>
          </div>
          <div className="personal-content-header-avatar">
            <img
              className="avatar__image"
              src={person.pic}
            ></img>
          </div>
          <div className="personal-content-header-info">
            <div className="personal-content-header-info-name">
              <h3>{personName}</h3>
            </div>
          </div>
          { isMe?
          <div className="personal-content-header-button">
           <button className="block-btn btn" onClick={handleEdit}  >Edit Profile</button>
         </div>
          :
          <div className="personal-content-header-button">
          {isFriend?null:<button className="addfriend-btn btn" onClick={isRequest?handleCancelRequest:handleAddingFriend}>{isRequest?"Cancel Request":"Add Friend"}</button>}
            <button className="block-btn btn" >Block</button>
          </div>
          }
        </div>
      </div>
    )
  }
  export default PersonalContent;