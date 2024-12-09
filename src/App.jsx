import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";

import Dialogs from "./components/Dialogs/Dialogs";
import DialogPage from "./components/Dialogs/DialogPage/DialogPage";
import {DialogList} from "./components/Dialogs/DialogList/DialogList"

import {profileStore} from "./stores/ProfileStore";
import {dialogsStore} from "./stores/DialogsStore";
import { newsStore } from "./stores/NewsStore";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs"
            element={<Dialogs store={dialogsStore} />}
          />
          <Route 
          path="/dialogs/:username" 
          element={<DialogPage />} 
          />

          <Route
            path="/profile"
            element={<Profile store={profileStore} />}
          />

          <Route path="/news" element={<News store={newsStore} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
