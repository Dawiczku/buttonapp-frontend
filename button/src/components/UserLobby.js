import React from "react";
import User from "./User";

export default function UserLobby() {
  return (
    <div className="lobby users">
      <div className="lobby-header">
        <button className="return">
          <span className="material-symbols-outlined">arrow_back</span>Wstecz
        </button>
        <h2>Lobby</h2>
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
    </div>
  );
}
