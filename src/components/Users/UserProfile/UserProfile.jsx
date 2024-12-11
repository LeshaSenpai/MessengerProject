import React from "react";
import { useParams } from "react-router-dom";
import { usersMock } from "../UsersMock";
import s from "./UserProfile.module.css";

const UserProfile = () => {
    const { username } = useParams();
    const user = usersMock.find((user) => user.name === username);
  
    if (!user) {
      return <div className={s.notFound}>User not found</div>;
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