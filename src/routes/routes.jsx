import React, {lazy} from "react";
import { Route, Routes } from "react-router-dom";

const DashBoard = lazy(() => import("../pages/DashBoard"));
const Message_ChatWindow = lazy(() => import("../pages/Message_ChatWindow"));
const Message_Contact = lazy(() => import("../pages/Message_Contact"));
const People = lazy(() => import("../pages/People"));
const Reminder = lazy(() => import("../pages/Reminder"));
const Setting = lazy(() => import("../pages/Setting"));
const Login = lazy(() => import("../pages/Login"));
const Empty = lazy(() => import("../pages/Empty"));
const PersonalPage = lazy(() => import("../pages/PersonalPage"));

function routes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Empty/>} />
      <Route path="/dashboard" element={<DashBoard/>} />
      <Route path="/Message_ChatWindow/:id" element={<Message_ChatWindow />} />
      <Route path="/Message_Contact" element={<Message_Contact />} />
      <Route path="/People" element={<People />} />
      <Route path="/PersonalPage/:id" element={<PersonalPage/>} />
      <Route path="/Reminder" element={<Reminder />} />
      <Route path="/Setting" element={<Setting />} />
    </Routes>
  );
}

export default routes;
