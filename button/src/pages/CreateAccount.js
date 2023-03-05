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
  const [randomNumber, setRandomNumber] = useState(1);
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
  const handleSubmitButton = (event) => {
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

  // Function setting avatar's number so it's random.
  const handleAvatarButton = () => {
    setRandomNumber(Math.floor(Math.random() * 3) + 1);
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
              src={require(`../avatars/avatar${randomNumber}.png`)}
              className="new-avatar"
              alt="avatar"
            ></img>
            <button className="random-avatar" onClick={handleAvatarButton}>
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

          <button
            className="submit-btn create-acc"
            onClick={handleSubmitButton}
          >
            Create
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
