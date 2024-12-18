import React from "react";
import { observer } from "mobx-react-lite";
import "./News.css";
import { NewsStore } from "../../stores/NewsStore";

interface NewsProps {
  store: NewsStore;
}

const News: React.FC<NewsProps> = ({ store }) => {
  const newsElements = store.newsPage.news.map((n) => (
    <div key={n.id} className="newsItem">
      <img src={n.image} alt={n.title} className="newsImage" />
      <div className="newsContent">
        <h3 className="newsTitle">{n.title}</h3>
        <p className="newsDescription">{n.description}</p>
      </div>
    </div>
  ));

  return <div className="newsWrapper">{newsElements}</div>;
};

export default observer(News);