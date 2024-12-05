import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import state from './redux/state'; 

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<Dialogs state={state.dialogsPage} />} />
            <Route path="/profile" element={<Profile state={state.profilePage} />} />
            <Route path="/news" element={<News state={state.newsPage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
