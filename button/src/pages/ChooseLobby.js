import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReturnButton from "../components/ReturnButton";

export default function ChooseLobby({ socket }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputCode, setInputCode] = useState("");
  const [lobbyCode, setLobbyCode] = useState("");
  const [lobbyUsers, setLobbyUsers] = useState();
  const [canJoinLobby, setCanJoinLobby] = useState(false);
  const [buttonVisibility, setButtonVisibility] = useState(false);

  useEffect(() => {
    if (lobbyCode && lobbyUsers) {
      navigate("/lobby-admin", {
        state: { lobbyCode: lobbyCode, lobbyUsers: lobbyUsers },
      });
    }
  }, [lobbyCode, lobbyUsers, navigate]);

  useEffect(() => {
    if (canJoinLobby) {
      navigate("/lobby-users", {
        state: { lobbyCode: inputCode, lobbyUsers: lobbyUsers },
      });
    }
  }, [lobbyUsers, canJoinLobby, inputCode, navigate]);

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
        isAdmin: true,
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

  socket.on("sendLobbyCode", (incomingLobbyCode) => {
    setLobbyCode(incomingLobbyCode);
  });

  socket.on("sendLobbyUsers", (incomingLobbyUsers) => {
    setLobbyUsers(JSON.parse(incomingLobbyUsers));
  });

  socket.on("enterIntoLobby", (canEnter) => {
    canEnter ? setCanJoinLobby(true) : setCanJoinLobby(false);
  });

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
