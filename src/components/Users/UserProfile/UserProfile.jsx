import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UsersAPI } from "../UsersAPI";
import s from "./UserProfile.module.css";

const UserProfile = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const user = UsersAPI.find((user) => user.name === username);
  
      if (!user) {
        navigate("/not-found"); 
      }
  
    return (
      <div className={s.userProfile}>
        <div className={s.profileContent}>
          <img src={user.photo} alt={user.name} className={s.userPhoto} />
          <div className={s.profileDetails}>
            <h2>{user.name}</h2>
            <p>
              <strong>Country:</strong> {user.country}
            </p>
            <p>
              <strong>City:</strong> {user.city}
            </p>
            <p>
              <strong>Hobbies:</strong> {user.hobbies.join(", ")}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserProfile;