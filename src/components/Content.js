import React from "react";
import "../scss/components/Content.css";
import Remindercard from "./Card/Remindercard";
import Topcard from "./Card/Topcard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllRemindersAsync } from "../redux/Slices/ReminderSlice";
const Content = () => {
  const reminders = useSelector((state) => state.reminder.reminders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRemindersAsync());
  }, [dispatch]);
  const allReminders = reminders?.map((reminder) => {
    return (
      <div style={{ display: "flex" }}>
        <Remindercard name={reminder.title} time={reminder.date} />
      </div>
    );
  });
  return (
    <div className="content col-full">
      <div className="rank col-half">
        <h1>
          Ranking  <i class="fa-solid fa-ranking-star"></i></h1>
        <div className="rank__content">
        <Topcard name="Huy Bui" amount="200"/>
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
