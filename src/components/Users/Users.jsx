import React, { useState } from "react";
import { UsersAPI } from "./UsersAPI";
import { Link } from "react-router-dom";
import s from "./Users.module.css";

const Users = () => {
  return (
    <div className={s.users}>
      <h2>Users</h2>
      <ul className={s.userList}>
        {UsersAPI.map((user) => (
          <li key={user.id} className={s.userItem}>
            <div className={s.userInfo}>
              <img src={user.photo} alt={user.name} className={s.userPhoto} />
              <p className={s.userName}>{user.name}</p>
            </div>
            <div className={s.actions}>
              <Link to={`/dialogs/${user.name}`} className={s.chatButton}>
                Start Chat
              </Link>
              <Link to={`/profile/${user.name}`} className={s.profileButton}>
                View Profile
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
