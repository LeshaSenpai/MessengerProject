import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Users from "./components/Users/Users";
import RedirectPage from "./components/Redirect/RedirectPage";
import AuthorizationForm from "./components/Authorisation/Authorisation";
import Dialogs from "./components/Dialogs/Dialogs";
import DialogPage from "./components/Dialogs/DialogPage/DialogPage";
import UserProfile from "./components/Users/UserProfile/UserProfile";
import Login from "./components/Authorisation/Login";
import Music from "./components/Music/Music";
import Authorisation from "./components/Authorisation/Authorisation";
import { profileStore } from "./stores/ProfileStore";
import { dialogsStore } from "./stores/DialogsStore";
import { newsStore } from "./stores/NewsStore";

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/dialogs" element={<Dialogs store={dialogsStore} />} />
          <Route path="/dialogs/:username" element={<DialogPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/music" element={<Music />} />
          <Route path="/profile/:username" element={<UserProfile />} />
          <Route path="/news" element={<News store={newsStore} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route
          path="/protected"
            element={
            <Authorisation>
                <Login />
            </Authorisation>
            }
          />
          <Route path="*" element={<RedirectPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
