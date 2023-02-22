import React from "react";
import User from "../components/User";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Lobby(user) {
  return (
    <>
      <Header />
      <div className={user.type === "users" ? "lobby users" : "lobby admin"}>
        <div className="lobby-header">
          <button className="return">
            <span className="material-symbols-outlined">arrow_back</span>Wstecz
          </button>
          <h2>Lobby</h2>
          <button className="close-lobby-btn">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="lobby-users-container">
          <ul className="user-list">
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
        <div className="admin-buttons">
          <button className="submit-btn start-game">Start the game !</button>
        </div>
      </div>
      <Footer />
    </>
  );
}