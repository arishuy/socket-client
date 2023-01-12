import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserAsync } from "../redux/Slices/UserSlice";
import "../scss/components/EditProfile.css";

const EditProfile = () => {
    const user = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const dispatchUpdate = useDispatch();
    const [name,setName] = React.useState(user[0].user.name);
    const [email,setEmail] = React.useState(user[0].user.email);
    const [pic,setPic] = React.useState(user[0].user.pic);
    const info = {
        id: user[0].user._id,
        name: name,
        email: email,
        pic: pic,
    }
    const handleSubmit = () => {
        dispatch(UpdateUserAsync(info)).then((res) => {
            dispatchUpdate({type: "auth/updateState", payload: res.payload.data.user});
        }
        );
    }
  return (
    <div className="body-edit">
      <div className="body-edit__container">
        <div className="body-edit__container__header">
          <h1>Edit Profile</h1>
        </div>
        <div className="body-edit__container__content">
          <div className="body-edit__container__content__avatar">
            <img
              src={pic}
              alt="avatar"
            ></img>
            {/* <div className="body-edit__container__content__avatar__button">
              <i className="fa-solid fa-circle-plus"></i>
            </div> */}
          </div>
          <div className="body-edit__container__content__main">
            <table>
                <tbody>

              <tr>
                <td>
                  <span>Name:</span>
                </td>
                <td>
                  <input 
                  id="name"
                  type="text"
                   value={name}
                   onChange={() => {
                    setName(event.target.value);
                  }}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Email:</span>
                </td>
                <td>
                  <input
                  id="email" type="text" value={email}
                  onChange={() => {
                    setEmail(event.target.value);
                  }}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Avatar:</span>
                </td>
                <td>
                  <input id="pic" type="text" value={pic} onChange={()=> setPic(event.target.value)}></input>
                </td>
              </tr>
              <tr>
                    <button id="" onClick={handleSubmit}>Cập nhật</button>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="huongdanlaylink">
            Cách lấy link Avatar: Truy cập <a href="https://linkanh.xyz/" target="_blank">tại đây</a> để tải lên ảnh của bạn và get link. Sau đó dán vào phần Avatar và ấn Cập nhật để chỉnh sửa ảnh đại diện của mình.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
