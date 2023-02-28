import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReturnButton from "../components/ReturnButton";
import ScoreBoardPlayer from "../components/ScoreBoardPlayer";

export default function ButtonGame() {
  return (
    <>
      <Header />
      <div className="lobby ingame">
        <div className="lobby-header">
          <ReturnButton />
          <h2>Lobby</h2>
        </div>
        <div className="game-section">
          <ul className="score-board">
            <ScoreBoardPlayer />
          </ul>
          <button className="game-button"></button>
        </div>
      </div>
      <Footer />
    </>
  );
}
