import React from "react";
import { Link, useLocation } from "react-router-dom";
import LobbyUser from "../components/LobbyUser";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReturnButton from "../components/ReturnButton";

export default function Lobby(user) {
  const location = useLocation();

  return (
    <>
      <Header />
      <div
        className={
          user.type === "users"
            ? "content__container content__container--large player__lobby"
            : "content__container content__container--large admin__lobby"
        }
      >
        <div className="lobby__header">
          <ReturnButton />
          <h2>Lobby - {location.state.lobbyCode}</h2>
          <button className="lobby__close-button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="lobby__user-list-container">
          <ul className="lobby__user-list">
            {location.state.lobbyUsers.map((user, index) => {
              return (
                <li key={index}>
                  <LobbyUser
                    nickname={user.nickname}
                    avatarid={user.avatarID}
                  />
                </li>
              );
            })}
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
