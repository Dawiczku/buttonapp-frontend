import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowClockwise } from "react-icons/bs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReturnButton from "../components/ReturnButton";
import uuid from "react-uuid";

export default function CreateAccount() {
  // Initializing variables.
  const [nickname, setNickname] = useState("");
  let accountList = null;

  /* Setting accountList value based on, if accounts are already stored in local storage. */
  localStorage.getItem("accounts")
    ? (accountList = JSON.parse(localStorage.getItem("accounts")))
    : (accountList = []);

  // Navigation hook.
  const navigate = useNavigate();

  // Handling kayboard clicks on input field.
  const handleChange = (event) => {
    setNickname(event.target.value);
  };

  // Submit button click handler.
  const handleClick = (event) => {
    event.preventDefault();

    if (nickname.length < 2) {
      window.alert("Nickname too short !");
      return;
    }

    setNickname(nickname);

    if (accountList.length < 5) {
      accountList.push({ nickname: nickname, accountID: uuid() });
      localStorage.setItem("accounts", JSON.stringify(accountList));
    }

    setNickname("");

    // Comming back to AccountList after creating a new one
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="account-list-container">
        <ReturnButton />
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

          <button className="submit-btn create-acc" onClick={handleClick}>
            Create
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
