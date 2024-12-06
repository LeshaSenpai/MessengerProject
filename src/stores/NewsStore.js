import { makeAutoObservable } from "mobx";

class NewsStore {
  newsPage = {
    news: [
      {
        id: 1,
        title: "Технологический прорыв😍😎😋",
        description:
          "Ученые разработали новую систему искусственного интеллекта, которая может предсказывать стихийные бедствия.",
        image: "https://randomsssylka.com/38",
      },
      {
        id: 2,
        title: "Миссия SpaceX на Марс😋👽🤖",
        description:
          "Компания SpaceX успешно запустила свой космический корабль для полета на Марс.",
        image: "https://randomsssylka.com/69",
      },
      {
        id: 3,
        title:
          "Logitech G Pro X Superlight - Почему Популярна У Киберспортсменов?",
        description:
          "В этом ролике я рассказываю о мыши Logitech G Pro X SuperLight, как эта мышь стала самой популярной мышью у киберспортсменов, а также почему вообще игроки пересаживаются на беспроводные мыши. Приятного просмотра!",
        image: "https://youtu.be/KpXuStLS-dg?si=YNgY7sAuD9lwOWXG",
      },
    ],
  };

  constructor() {
    makeAutoObservable(this);
  }
}

const newsStore = new NewsStore();
export {newsStore};
