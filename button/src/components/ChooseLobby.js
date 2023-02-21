import React from "react";
import { useRef, useState } from "react";

export default function ChooseLobby() {
  const createButtonRef = useRef();

  const [code, setCode] = useState("");
  const [status, setStatus] = useState(false);

  const toggleInputVisibility = () => {
    setStatus(!status);
  };

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (code.length < 5) {
      window.alert("Code too short!");
      return;
    }

    setCode(code);
    setCode("");
  };

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

        <button className="submit-btn create-lobby" ref={createButtonRef}>
          create new lobby
        </button>
        <button
          className={
            status
              ? "submit-btn join-lobby disabled"
              : "submit-btn join-lobby enabled"
          }
          onClick={toggleInputVisibility}
        >
          join the lobby
        </button>
        <div
          className={
            status
              ? "join-lobby-input-container enabled"
              : "join-lobby-input-container disabled"
          }
        >
          <input
            className="join-lobby-input"
            type="text"
            placeholder="ABC12"
            onChange={handleChange}
            value={code}
            minLength="5"
            maxLength="5"
          ></input>
          <button className="join-lobby-button"></button>
        </div>
      </div>
    </div>
  );
}
