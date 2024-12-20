import React from "react";
import { useNavigate } from "react-router-dom";
import "./RedirectPage.css";

const RedirectPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/profile");
  };

  return (
    <div className="redirectPage">
      <h1>Извините, данная страница недоступна</h1>
      <button onClick={handleGoHome} className="goHomeButton">
        На главную
      </button>
    </div>
  );
};

export default RedirectPage;