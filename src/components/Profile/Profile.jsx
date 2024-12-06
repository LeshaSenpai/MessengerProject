import React from "react";
import { observer } from "mobx-react-lite";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profileStore} from "../../stores/ProfileStore";

const Profile = observer(() => {
  const { posts } = profileStore._state.profilePage;

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} newPostText={profileStore._state.profilePage.newPostText} />
    </div>
  );
});

export default Profile;
