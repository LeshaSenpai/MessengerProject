import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./RedirectPage.module.css";

const RedirectPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/profile");
  };

  return (
    <div className={s.redirectPage}>
      <h1>Извините, данная страница недоступна</h1>
      <button onClick={handleGoHome} className={s.goHomeButton}>
        На главную
      </button>
    </div>
  );
};

export default RedirectPage;
