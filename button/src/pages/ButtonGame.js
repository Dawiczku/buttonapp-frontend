import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";
import ScoreBoardPlayer from "../components/ScoreBoardPlayer";

export default function ButtonGame({ socket }) {
  // Hooks

  const location = useLocation();
  const navigate = useNavigate();
  const [lobbyUserList, setLobbyUserList] = useState([]);
  const [lobbyCode, setLobbyCode] = useState(
    location.state.lobbyCode && location.state.lobbyCode
  );

  // UseEffects

  useEffect(() => {
    socket.emit("getLobbyUsers", lobbyCode);
  }, [socket, lobbyCode]);

  useEffect(() => {
    let mounted = true;
    socket.on("closeGame", () => {
      if (mounted) {
        navigate("/");
        window.alert("Admin closed the game!");
      }
    });
    return () => {
      mounted = false;
    };
  }, [socket, navigate]);

  // Functions

  const leaveGame = () => {
    socket.emit("leaveGame", lobbyCode);
    navigate("/");
  };

  const closeGame = () => {
    for (let user of lobbyUserList) {
      if (user.socketID === socket.id) {
        if (user.isAdmin) {
          socket.emit("closeGame", lobbyCode);
          alert("Admin closed the game!");
          return;
        } else {
          window.alert("You're not the admin!");
          return;
        }
      }
    }
  };

  const startTheRound = () => {
    for (let user of lobbyUserList) {
      if (user.socketID === socket.id) {
        if (user.isAdmin) {
          socket.emit("startRound", lobbyCode);
          return;
        } else {
          window.alert("You're not the admin!");
          return;
        }
      }
    }
  };

  const clickTheMainButton = () => {
    socket.emit("buttonClicked", lobbyCode);
  };

  const isAdminInLobby = (playerList) => {
    return playerList.some((player) => player.isAdmin);
  };

  // Receiving sockets

  socket.on("sendLobbyUsers", (lobbyUsers) => {
    setLobbyUserList(JSON.parse(lobbyUsers));
  });

  socket.on("leaveGame", (lobbyUsers) => {
    if (!isAdminInLobby(JSON.parse(lobbyUsers))) {
      socket.emit("closeGame", lobbyCode);
    }
    setLobbyUserList(JSON.parse(lobbyUsers));
  });

  socket.on("startRound", (newLobbyUserList) => {
    setLobbyUserList(JSON.parse(newLobbyUserList));
  });

  socket.on("buttonClicked", (sortedPlayersList) => {
    setLobbyUserList(JSON.parse(sortedPlayersList));
  });

  return (
    <>
      <div className="content__container content__container--large ingame__lobby">
        <div className="lobby__header">
          <ReturnButton pageType="lobby" leaveLobby={leaveGame} />
          <h2>LSBI Game !</h2>
          <button className="lobby__close-button" onClick={closeGame}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="ingame-section__container">
          <ul className="score-board__list">
            {lobbyUserList &&
              lobbyUserList.map((user, index) => {
                return (
                  <li key={index}>
                    <ScoreBoardPlayer
                      nickname={
                        user.isClicked
                          ? `${index + 1}. ${user.nickname}`
                          : user.nickname
                      }
                      avatarid={user.avatarID}
                      isadmin={user.isAdmin}
                    />
                  </li>
                );
              })}
          </ul>
          <div className="game-buttons__container">
            <button
              className="ingame__main-button"
              onClick={clickTheMainButton}
            >
              click me !
            </button>
            <button
              className="ingame__start-button submit__button"
              onClick={startTheRound}
            >
              start the game!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
