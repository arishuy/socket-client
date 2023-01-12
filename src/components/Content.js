import React from "react";
import "../scss/components/Content.css";
import Remindercard from "./Card/Remindercard";
import Topcard from "./Card/Topcard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllRemindersAsync } from "../redux/Slices/ReminderSlice";
import Axios from "axios";
const Content = () => {
  const reminders = useSelector((state) => state.reminder.reminders);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllRemindersAsync());
  }, [dispatch]);
  
  const allReminders = reminders?.map((reminder) => {
    return (
      <div style={{ display: "flex" }}>
        <Remindercard key={reminder._id} name={reminder.title} time={reminder.date} />
      </div>
    );
  });
  return (
    <div className="content col-full">
      <div className="rank col-half">
        <h1>
          Ranking  <i className="fa-solid fa-ranking-star"></i></h1>
        <div className="rank__content">
          <Topcard />
        </div>
      </div>
      <div className="reminder1 col-half">
        <div className="header-remind">Reminder</div>
        <div className="reminder1-content">
          {allReminders}
        </div>
      </div>
    </div>
  );
};

export default Content;
