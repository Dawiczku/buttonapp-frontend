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
  const [avatarID, setAvatarID] = useState("avatar3.png");
  const [accountList, setAccountList] = useState(
    localStorage.getItem("accounts")
      ? JSON.parse(localStorage.getItem("accounts"))
      : []
  );
  const amountOfAvatars = 3;

  // Navigation hook.
  const navigate = useNavigate();

  // Handling kayboard clicks on input field.
  const handleChange = (event) => {
    setNickname(event.target.value);
  };

  // Submit button click handler.
  const handleSubmitButton = () => {
    if (nickname.length < 2) {
      window.alert("Nickname too short !");
      return;
    }

    if (
      accountList.some((account) => {
        return account.nickname === nickname;
      })
    ) {
      window.alert("Nickname already exists!");
      setNickname("");
      return;
    }

    if (accountList.length < 5) {
      localStorage.setItem(
        "accounts",
        JSON.stringify([
          ...accountList,
          { nickname: nickname, accountID: uuid(), avatarID: avatarID },
        ])
      );
      setAccountList(JSON.parse(localStorage.getItem("accounts")));
    }

    // Comming back to AccountList after creating a new one
    navigate("/");
  };

  const randomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  // Function setting avatar's ID randomly.
  const handleAvatarButton = () => {
    const random = randomNumber(amountOfAvatars);
    setAvatarID(`avatar${random}.png`);
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
              src={require(`../avatars/${avatarID}`)}
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
