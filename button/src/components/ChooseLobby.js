import React from "react";

export default function ChooseLobby() {
  return (
    <div className="account-list">
      <button className="return">
        <span className="material-symbols-outlined">arrow_back</span>Wstecz
      </button>
      <div className="create-lobby-container">
        <h2>Nickname</h2>

        <img
          src={require("../avatars/dog-face-color-icon.png")}
          className="new-avatar"
          alt="avatar"
        ></img>

        <button className="submit-btn create-lobby">create new lobby</button>
        <button className="submit-btn join-lobby">join the lobby</button>
      </div>
    </div>
  );
}
