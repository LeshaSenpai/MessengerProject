import React from "react";
import { UsersAPI } from "./UsersAPI";
import { Link } from "react-router-dom";
import "./User.css";

const Users: React.FunctionComponent = () => {
  return (
    <div className="users">
      <h2>Users</h2>
      <ul className="userList">
        {UsersAPI.map((user) => (
          <li key={user.id} className="userItem">
            <div className="userInfo">
              <img src={user.photo} alt={user.name} className="userPhoto" />
              <p className="userName">{user.name}</p>
            </div>
            <div className="actions">
              <Link to={`/dialogs/${user.name}`} className="chatButton">
                Start Chat
              </Link>
              <Link to={`/profile/${user.name}`} className="profileButton">
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
