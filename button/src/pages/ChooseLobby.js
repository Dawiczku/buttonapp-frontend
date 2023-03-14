import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReturnButton from "../components/ReturnButton";

export default function ChooseLobby({ socket }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputCode, setInputCode] = useState("");
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [lobbyCode, setLobbyCode] = useState("");
  const [canJoin, setCanJoin] = useState(null);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    if (lobbyCode) {
      navigate("/lobby", {
        state: {
          lobbyCode: lobbyCode,
        },
      });
    }
  }, [lobbyCode, navigate]);

  useEffect(() => {
    if (canJoin) {
      navigate("/lobby", { state: { lobbyCode: inputCode } });
    }
  }, [canJoin, inputCode, navigate]);

  useEffect(() => {
    if (errMessage) {
      window.alert(errMessage);
      return;
    }
  }, [errMessage]);

  const toggleInputVisibility = () => {
    setButtonVisibility(!buttonVisibility);
  };

  const handleJoiningLobby = (e) => {
    e.preventDefault();

    if (inputCode.length < 5) {
      window.alert("Code too short!");
      return;
    }

    socket.emit(
      "joinLobby",
      JSON.stringify({
        socketID: socket.id,
        nickname: location.state.nickname,
        avatarID: location.state.avatarid,
        isClicked: false,
        isAdmin: false,
      }),
      inputCode
    );
  };

  const createLobby = () => {
    socket.emit(
      "createLobby",
      JSON.stringify({
        socketID: socket.id,
        nickname: location.state.nickname,
        avatarID: location.state.avatarid,
        isClicked: false,
        isAdmin: true,
      })
    );
  };

  const navigateToLastPage = () => {
    navigate(-1);
  };

  socket.on("enterIntoLobby", (canJoin) => {
    setCanJoin(canJoin);
  });

  socket.on("sendLobbyCode", (lobbyCode) => {
    setLobbyCode(lobbyCode);
  });

  socket.on("gameStartedOrTooMuchPeople", () => {
    setErrMessage(`Lobby ${inputCode} is full or the game started!`);
  });

  socket.on("wrongLobbyCode", () => {
    setErrMessage(`${inputCode} is a wrong code!`);
  });

  return (
    <>
      <Header />
      <div className="content__container content__container--small">
        <ReturnButton
          pageType="accountNav"
          navigateToLastPage={navigateToLastPage}
        />
        <div className="lobby-chosing__section">
          <h2>{location.state.nickname}</h2>

          <img
            src={require(`../avatars/${location.state.avatarid}`)}
            className="avatar player__avatar"
            alt="avatar"
          ></img>

          <button
            className="submit__button create-lobby__button"
            onClick={createLobby}
          >
            create new lobby
          </button>

          <button
            className={
              buttonVisibility
                ? "submit__button join-lobby__button disabled"
                : "submit__button join-lobby__button enabled"
            }
            onClick={toggleInputVisibility}
          >
            join the lobby
          </button>
          <div
            className={
              buttonVisibility
                ? "lobby-code__container enabled"
                : "lobby-code__container disabled"
            }
          >
            <input
              className="lobby-code__input"
              type="text"
              placeholder="ABC12"
              onChange={(e) => setInputCode(e.target.value)}
              value={inputCode}
              minLength="5"
              maxLength="5"
            ></input>

            <button
              className="lobby-code__submit-button"
              onClick={handleJoiningLobby}
            ></button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
