import { makeAutoObservable } from "mobx";

class ProfileStore {
  _state = {
    profilePage: {
      posts: [
        { id: 1, message: "Pushkin", likesCount: 200 },
        { id: 2, message: "Gogol", likesCount: 222 },
        { id: 3, message: "Tolstoy", likesCount: 115 },
        { id: 4, message: "Solzhenitsyn", likesCount: 33 },
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
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
  }

  updateNewPostText(text) {
    this._state.profilePage.newPostText = text;
  }
}

const profileStore = new ProfileStore();
export {profileStore};
