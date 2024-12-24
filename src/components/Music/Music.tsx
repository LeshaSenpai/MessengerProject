import React, { useState } from "react";
import "./Music.css";

const Music: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showUploadTooltip, setShowUploadTooltip] = useState(false);

  const handleMouseEnterInfo = () => setShowInfo(true);
  const handleMouseLeaveInfo = () => setShowInfo(false);

  const handleMouseEnterUpload = () => setShowUploadTooltip(true);
  const handleMouseLeaveUpload = () => setShowUploadTooltip(false);

  return (
    <div className="music-page">
      <div className="header-music">
        <h2>
          Загружайте свои треки и слушайте их с друзьями
          <span
            className="info-icon"
            onMouseEnter={handleMouseEnterInfo}
            onMouseLeave={handleMouseLeaveInfo}
          >
            ⓘ
          </span>
          {showInfo && (
            <div className="tooltip">
              Ваша музыка видна только вашим друзьям.
            </div>
          )}
        </h2>
      </div>
      <div className="upload-section">
        <button
          className="upload-button"
          onMouseEnter={handleMouseEnterUpload}
          onMouseLeave={handleMouseLeaveUpload}
        >
          Загрузить
        </button>
        {showUploadTooltip && (
          <div className="tooltip">
            Загрузка доступна только премиум-пользователям.
          </div>
        )}
      </div>
      <div className="player-section">
        <audio controls>
          <source src={require("./track.mp3")} type="audio/mpeg" />
          Ваш браузер не поддерживает аудио плеер.
        </audio>
        <audio controls>
          <source src={require("./RussellBrower.mp3")} type="audio/mpeg" />
          Ваш браузер не поддерживает аудио плеер.
        </audio>
      </div>
    </div>
  );
};

export default Music;