import React from "react";
import User from "../components/User";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReturnButton from "../components/ReturnButton";
import { Link } from "react-router-dom";

export default function Lobby(user) {
  return (
    <>
      <Header />
      <div
        className={
          user.type === "users"
            ? "content__container--large player__lobby"
            : "content__container--large admin__lobby"
        }
      >
        <div className="lobby__header">
          <ReturnButton />
          <h2>Lobby</h2>
          <button className="lobby__close-button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="lobby__user-list-container">
          <ul className="lobby__user-list">
            <li>
              <User />
            </li>
            <li>
              <User />
            </li>
            <li>
              <User />
            </li>
            <li>
              <User />
            </li>
            <li>
              <User />
            </li>
            <li>
              <User />
            </li>
            <li>
              <User />
            </li>
            <li>
              <User />
            </li>
            <li>
              <User />
            </li>
            <li>
              <User />
            </li>
            <li>
              <User />
            </li>
            <li>
              <User />
            </li>
          </ul>
        </div>
        <div className="lobby__admin-buttons">
          <Link to="/button-game" className="link">
            <button className="submit__button start-game__button">
              Start the game !
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
