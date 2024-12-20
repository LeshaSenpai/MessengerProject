import React from "react";
import "./ProfileInfo.css";

const ProfileInfo: React.FC = () => {
  return (
    <div>
      <div>
        <img
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
          alt="Profile"
        />
      </div>
      <div className="descriptionBlock"></div>
    </div>
  );
};

export default ProfileInfo;