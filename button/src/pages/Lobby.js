import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LobbyUser from "../components/LobbyUser";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReturnButton from "../components/ReturnButton";

export default function Lobby({ socket }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [lobbyUserList, setLobbyUserList] = useState([]);

  socket.on("sendLobbyUsers", (lobbyUsers) => {
    setLobbyUserList(JSON.parse(lobbyUsers));
  });

  socket.on("leaveLobby", (newLobbyUserList) => {
    setLobbyUserList(JSON.parse(newLobbyUserList));
  });

  useEffect(() => {
    socket.emit("getLobbyUsers", location.state.lobbyCode);
  });

  const leaveLobby = () => {
    socket.emit("leaveLobby", location.state.lobbyCode);
    navigate(-1);
  };

  const closeLobby = () => {
    for (let user of lobbyUserList) {
      if (user.socketID === socket.id) {
        if (user.isAdmin) {
          socket.emit("closeLobby", location.state.lobbyCode);
          return;
        } else {
          window.alert("You're not the admin!");
          return;
        }
      }
    }
  };

  const startTheGame = () => {
    for (let user of lobbyUserList) {
      if (user.socketID === socket.id) {
        if (user.isAdmin) {
          socket.emit("startGame", location.state.lobbyCode);
          return;
        } else {
          window.alert("You're not the admin!");
          return;
        }
      }
    }
  };

  socket.on("startGame", () => {
    navigate("/button-game", {
      state: {
        lobbyCode: location.state.lobbyCode,
      },
    });
  });

  useEffect(() => {
    socket.on("closeLobby", () => {
      navigate("/");
    });
  });

  return (
    <>
      <Header />
      <div className="content__container content__container--large lobby">
        <div className="lobby__header">
          <ReturnButton pageType="lobby" leaveLobby={leaveLobby} />
          <h2>Lobby - {location.state.lobbyCode}</h2>
          <button className="lobby__close-button" onClick={closeLobby}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="lobby__user-list-container">
          <ul className="lobby__user-list">
            {lobbyUserList.map((user, index) => {
              return (
                <li key={index}>
                  <LobbyUser
                    nickname={user.nickname}
                    avatarid={user.avatarID}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lobby__admin-buttons">
          <button
            className="submit__button start-game__button"
            onClick={startTheGame}
          >
            Start the game !
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
