import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReturnButton from "../components/ReturnButton";
import ScoreBoardPlayer from "../components/ScoreBoardPlayer";

export default function ButtonGame() {
  return (
    <>
      <Header />
      <div className="content__container content__container--large ingame__lobby">
        <div className="lobby__header">
          <ReturnButton />
          <h2>LSBI Game !</h2>
        </div>
        <div class="ingame-section__container">
          <ul className="score-board__list">
            <ScoreBoardPlayer />
            <ScoreBoardPlayer />
            <ScoreBoardPlayer />
            <ScoreBoardPlayer />
            <ScoreBoardPlayer />
            <ScoreBoardPlayer />
            <ScoreBoardPlayer />
            <ScoreBoardPlayer />
            <ScoreBoardPlayer />
            <ScoreBoardPlayer />
            <ScoreBoardPlayer />
            <ScoreBoardPlayer />
          </ul>
          <button className="ingame__main-button">CLICK ME !</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
