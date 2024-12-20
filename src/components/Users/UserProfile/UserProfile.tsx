import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UsersAPI } from "../UsersAPI";
import "./UserProfile.css";

interface User {
  id: number;
  name: string;
  photo: string;
  country: string;
  city: string;
  hobbies: string[];
}

const UserProfile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const user = UsersAPI.find((user: User) => user.name === username);

  if (!user) {
    navigate("/not-found");
    return null;
  }

  return (
    <div className="userProfile">
      <div className="profileContent">
        <img src={user.photo} alt={user.name} className="userPhoto" />
        <div className="profileDetails">
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