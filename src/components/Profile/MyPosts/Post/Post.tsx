import React from "react";
import "./Post.css";
import { profileStore } from "../../../../stores/ProfileStore";
import { observer } from "mobx-react-lite";

interface PostProps {
  message: string;
  likesCount: number;
  id: number;
  liked: boolean;
}

const Post: React.FC<PostProps> = observer(({ message, likesCount, id, liked }) => {
  const handleLike = () => {
    profileStore.toggleLike(id);
  };

  return (
    <div className="post">
      <div>{message}</div>
      <div>
        <button onClick={handleLike} className={liked ? "liked" : ""}>
          ♥
        </button>
        <span>{likesCount}</span>
      </div>
    </div>
  );
});

export default Post;