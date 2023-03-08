import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReturnButton from "../components/ReturnButton";
import ScoreBoardPlayer from "../components/ScoreBoardPlayer";

export default function ButtonGame() {
  return (
    <>
      <Header />
      <div className="content__container--large ingame__lobby">
        <div className="lobby__header">
          <ReturnButton />
          <h2>Lobby</h2>
        </div>
        <div className="ingame__game-section">
          <ul className="score-board__list">
            <ScoreBoardPlayer />
          </ul>
          <button className="ingame__main-button"></button>
        </div>
      </div>
      <Footer />
    </>
  );
}
