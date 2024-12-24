import React from "react";
import "./Profile.css";
import { observer } from "mobx-react-lite";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { profileStore } from "../../stores/ProfileStore";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = observer(() => {
  const { posts, newPostText } = profileStore._state.profilePage;

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} newPostText={newPostText} />
    </div>
  );
});

export default Profile;