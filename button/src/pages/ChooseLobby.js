import React from "react";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";

export default function ChooseLobby() {
  const createButtonRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

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
    // Reset after pushing to the array!
    setCode("");
    navigate("/lobby-users");
  };

  return (
    <>
      <Header />
      <div className="content__container content__container--small">
        <ReturnButton />
        <div className="lobby-chosing__section">
          <h2>{location.state.nickname}</h2>

          <img
            src={require(`../avatars/${location.state.avatarid}`)}
            className="avatar player__avatar"
            alt="avatar"
          ></img>

          <Link to="/lobby-admin" className="link">
            <button
              className="submit__button create-lobby__button"
              ref={createButtonRef}
            >
              create new lobby
            </button>
          </Link>
          <button
            className={
              status
                ? "submit__button join-lobby__button disabled"
                : "submit__button join-lobby__button enabled"
            }
            onClick={toggleInputVisibility}
          >
            join the lobby
          </button>
          <div
            className={
              status
                ? "lobby-code__container enabled"
                : "lobby-code__container disabled"
            }
          >
            <input
              className="lobby-code__input"
              type="text"
              placeholder="ABC12"
              onChange={handleChange}
              value={code}
              minLength="5"
              maxLength="5"
            ></input>

            <button
              className="lobby-code__submit-button"
              onClick={handleClick}
            ></button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
