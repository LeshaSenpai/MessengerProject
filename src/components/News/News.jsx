import React from 'react';
import s from './News.module.css';

const NewsItem = ({ title, description, image }) => {
  return (
    <div className={s.newsItem}>
      <img src={image} alt={title} className={s.newsImage} />
      <div className={s.newsContent}>
        <h3 className={s.newsTitle}>{title}</h3>
        <p className={s.newsDescription}>{description}</p>
      </div>
    </div>
  );
};

const News = ({ state }) => {
  const newsElements = state.news.map((n) => (
    <NewsItem key={n.id} title={n.title} description={n.description} image={n.image} />
  ));

  return <div className={s.newsWrapper}>{newsElements}</div>;
};

export default News;
