import React, { ChangeEvent } from "react";
import { observer } from "mobx-react-lite";
import "./MyPosts.css";
import Post from "./Post/Post";
import { profileStore } from "../../../stores/ProfileStore";

interface PostProps {
  id: number;
  message: string;
  likesCount: number;
  liked: boolean;
}

interface MyPostsProps {
  posts: PostProps[];
  newPostText: string;
}

const MyPosts: React.FC<MyPostsProps> = observer(({ posts, newPostText }) => {
  const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    profileStore.updateNewPostText(event.target.value);
  };

  const addPost = () => {
    profileStore.addPost();
  };

  const postsElements = posts.map((p: PostProps) => (
    <Post
      key={p.id}
      id={p.id}
      message={p.message}
      likesCount={p.likesCount}
      liked={p.liked}
    />
  ));

  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} value={newPostText} />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className="posts">{postsElements}</div>
    </div>
  );
});

export default MyPosts;