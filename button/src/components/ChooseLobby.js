import React from "react";

export default function ChooseLobby() {
  return (
    <div className="account-list">
      <button className="return">
        <span className="material-symbols-outlined">arrow_back</span>Wstecz
      </button>
      <h2>Choose Avatar !</h2>

      <img
        src={require("../avatars/dog-face-color-icon.png")}
        className="new-avatar"
        alt="avatar"
      ></img>

      <button className="create-lobby-btn">create new lobby</button>
      <button className="join-lobby-btn">join the lobby</button>
    </div>
  );
}
