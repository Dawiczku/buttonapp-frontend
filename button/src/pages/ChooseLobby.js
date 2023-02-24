import React from "react";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";

export default function ChooseLobby() {
  const createButtonRef = useRef();

  const [code, setCode] = useState("");
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

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
    // Reset after pushing to the array!
    setCode("");
    navigate("/lobby-users");
  };

  return (
    <>
      <Header />
      <div className="account-list-container">
        <ReturnButton />
        <div className="create-lobby-container">
          <h2>Nickname</h2>

          <img
            src={require("../avatars/dog-face-color-icon.png")}
            className="new-avatar"
            alt="avatar"
          ></img>

          <Link to="/lobby-admin" className="link">
            <button className="submit-btn create-lobby" ref={createButtonRef}>
              create new lobby
            </button>
          </Link>
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

            <button
              className="join-lobby-button"
              onClick={handleClick}
            ></button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
