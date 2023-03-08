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
  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  // Submit button click handler.
  const handleCreateAccButton = () => {
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

  const getRandomNumber = (maxValue) => {
    return Math.floor(Math.random() * maxValue) + 1;
  };

  // Function setting avatar's ID randomly.
  const handleRandomAvatarButton = () => {
    const random = getRandomNumber(amountOfAvatars);
    setAvatarID(`avatar${random}.png`);
  };

  return (
    <>
      <Header />
      <div className="content__container content__container--small">
        <ReturnButton />
        <div className="create-acc__container">
          <h2>Choose Avatar !</h2>
          <div className="create-acc__container--avatar">
            <img
              src={require(`../avatars/${avatarID}`)}
              className="avatar create-acc__avatar"
              alt="avatar"
            ></img>
            <button
              className="avatar__randomize-button"
              onClick={handleRandomAvatarButton}
            >
              <BsArrowClockwise />
            </button>
          </div>
          <input
            className="create-acc__nickname-input"
            type="text"
            placeholder="Nickname"
            onChange={handleNicknameChange}
            value={nickname}
            minLength="2"
            maxLength="15"
          ></input>

          <button
            className="submit__button create-acc__button"
            onClick={handleCreateAccButton}
          >
            Create
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
