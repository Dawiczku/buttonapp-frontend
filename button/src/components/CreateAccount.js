import React from "react";
import { useState } from "react";
import { BsArrowClockwise } from "react-icons/bs";

export default function CreateAccount() {
  const [nickname, setNickname] = useState("");

  const handleChange = (event) => {
    setNickname(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (nickname.length < 2) {
      window.alert("Nickname too short !");
      return;
    }

    setNickname(nickname);
    setNickname("");
  };

  return (
    <div className="account-list">
      <button className="return">
        <span className="material-symbols-outlined">arrow_back</span>
        Wstecz
      </button>
      <div className="new-acc-container">
        <h2>Choose Avatar !</h2>
        <div className="new-acc-avatar-container">
          <img
            src={require("../avatars/dog-face-color-icon.png")}
            className="new-avatar"
            alt="avatar"
          ></img>
          <button className="random-avatar">
            <BsArrowClockwise />
          </button>
        </div>
        <input
          className="new-acc-nickname-input"
          type="text"
          placeholder="Nickname"
          onChange={handleChange}
          value={nickname}
          minLength="2"
          maxLength="15"
        ></input>
        <button className="create-acc-btn" onClick={handleClick}>
          Create
        </button>
      </div>
    </div>
  );
}
