import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LobbyUser from "../components/LobbyUser";
import ReturnButton from "../components/ReturnButton";

export default function Lobby({ socket }) {
  // Hooks

  const location = useLocation();
  const navigate = useNavigate();
  const [lobbyUserList, setLobbyUserList] = useState([]);

  // UseEffects

  useEffect(() => {
    socket.emit("getLobbyUsers", location.state.lobbyCode);
  }, [socket, location.state.lobbyCode]);

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      socket.on("startGame", () => {
        navigate("/button-game", {
          state: {
            lobbyCode: location.state.lobbyCode,
          },
        });
      });
      return () => {
        mounted = true;
      };
    }
  }, [socket, navigate, location.state.lobbyCode]);

  useEffect(() => {
    let mounted = true;
    socket.on("closeLobby", () => {
      if (mounted) {
        navigate("/");
        window.alert("Admin closed the lobby!");
      }
    });
    return () => {
      mounted = false;
    };
  }, [socket, navigate]);

  // Functions

  const isAdminInLobby = (playerList) => {
    return playerList.some((player) => player.isAdmin);
  };

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

  // Receiving sockets.

  socket.on("sendLobbyUsers", (lobbyUsers) => {
    setLobbyUserList(JSON.parse(lobbyUsers));
  });

  socket.on("leaveLobby", (newLobbyUserList) => {
    if (!isAdminInLobby(JSON.parse(newLobbyUserList))) {
      socket.emit("closeLobby", location.state.lobbyCode);
    }
    setLobbyUserList(JSON.parse(newLobbyUserList));
  });

  return (
    <>
      <div className="content__container content__container--large lobby">
        <div className="lobby__header">
          <ReturnButton
            pageType="lobby"
            leaveLobby={leaveLobby}
            socket={socket}
          />
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
    </>
  );
}
