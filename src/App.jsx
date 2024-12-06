import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";

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
