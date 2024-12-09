import { makeAutoObservable } from "mobx";

class ProfileStore {
  _state = {
    profilePage: {
      posts: [
        { id: 1, message: "Pushkin", likesCount: 200, liked: false },
        { id: 2, message: "Gogol", likesCount: 222, liked: false },
        { id: 3, message: "Tolstoy", likesCount: 115, liked: false },
        { id: 4, message: "Solzhenitsyn", likesCount: 33, liked: false },
      ],
      newPostText: "napishite soobschenie",
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  addPost() {
    const newPost = {
      id: this._state.profilePage.posts.length + 1,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
      liked: false,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
  }

  updateNewPostText(text) {
    this._state.profilePage.newPostText = text;
  }

  toggleLike(postId) {
    const post = this._state.profilePage.posts.find((p) => p.id === postId);
    if (post) {
      post.liked = !post.liked;
      post.likesCount += post.liked ? 1 : -1;
    }
  }
}

const profileStore = new ProfileStore();
export {profileStore};
