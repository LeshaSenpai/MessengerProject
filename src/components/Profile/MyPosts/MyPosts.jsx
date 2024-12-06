import React from "react";
import { observer } from "mobx-react-lite";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {profileStore} from "../../../stores/ProfileStore";

const MyPosts = observer(() => {
  const { posts, newPostText } = profileStore._state.profilePage;

  const onPostChange = (event) => {
    profileStore.updateNewPostText(event.target.value);
  };

  const addPost = () => {
    profileStore.addPost();
  };

  const postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} value={newPostText} />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
