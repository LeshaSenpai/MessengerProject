import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';

const App = ({ store }) => {
  const state = store.getState();

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route 
            path="/dialogs" 
            element={<Dialogs state={state.dialogsPage} />} 
          />
          <Route 
            path="/profile" 
            element={
              <Profile
                profilePage={state.profilePage}
                dispatch={store.dispatch.bind(store)}
              />} 
          />
            <Route path="/news" element={<News state={state.newsPage} />}
            />
        </Routes>
      </div>
    </div>
  );
};

export default App;
