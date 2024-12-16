import React from "react";
import s from "./Post.module.css";
import {profileStore} from "../../../../stores/ProfileStore";
import { observer } from "mobx-react-lite";

const Post = observer(({ message, likesCount, id, liked }) => {
  const handleLike = () => {
    profileStore.toggleLike(id);
  };

  return (
    <div className={s.post}>
      <div>{message}</div>
      <div>
        <button onClick={handleLike} className={liked ? s.liked : ""}>
          ♥
        </button>
        <span>{likesCount}</span>
      </div>
    </div>
  );
});

export default Post;
