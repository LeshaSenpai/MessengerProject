import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    const postData = [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
    ];

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div className={s.newPost}>
                <textarea placeholder="What's on your mind?"></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                {postData.map((post) => (
                    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
                ))}
            </div>
        </div>
    );
};

export default MyPosts;
