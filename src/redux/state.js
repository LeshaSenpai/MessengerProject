let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Pushkin', likesCount: 200 },
        { id: 2, message: 'Gogol', likesCount: 222 },
        { id: 3, message: 'Tolstoy', likesCount: 115 },
        { id: 4, message: 'Solzhenitsyn', likesCount: 33 },
      ],
        newPostText: 'napishite soobschenie'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Lexa' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Katya' },
        { id: 4, name: 'Angelina' },
        { id: 5, name: 'Vika' },
        { id: 6, name: 'Valera' },
      ],
      messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Hey' },
        { id: 5, message: 'Sup?' },
      ],
    },
    newsPage: {
      news: [
        {
          id: 1,
          title: 'Технологический прорыв😍😎😋',
          description: 'Ученые разработали новую систему искусственного интеллекта, которая может предсказывать стихийные бедствия.',
          image: 'https://randomsssylka.com/38',
        },
        {
          id: 2,
          title: 'Миссия SpaceX на Марс😋👽🤖',
          description: 'Компания SpaceX успешно запустила свой космический корабль для полета на Марс.',
          image: 'https://randomsssylka.com/69',
        },
        {
          id: 3,
          title: 'Logitech G Pro X Superlight - Почему Популярна У Киберспортсменов?',
          description: 'В этом ролике я рассказываю о мыши Logitech G Pro X SuperLight, как эта мышь стала самой популярной мышью у киберспортсменов, а также почему вообще игроки пересаживаются на беспроводные мыши. Приятного просмотра!',
          image: 'https://youtu.be/KpXuStLS-dg?si=YNgY7sAuD9lwOWXG',
        },
      ],
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
