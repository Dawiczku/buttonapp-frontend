import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";
import ScoreBoardPlayer from "../components/ScoreBoardPlayer";

export default function ButtonGame({ socket }) {
  // Hooks

  const location = useLocation();
  const navigate = useNavigate();
  const [lobbyUserList, setLobbyUserList] = useState([]);

  // UseEffects

  useEffect(() => {
    socket.emit("getLobbyUsers", location.state.lobbyCode);
  }, [socket, location.state.lobbyCode]);

  // Functions

  const leaveGame = () => {
    socket.emit("leaveGame", location.state.lobbyCode);
    navigate("/");
  };

  // Receiving sockets

  socket.on("sendLobbyUsers", (lobbyUsers) => {
    setLobbyUserList(JSON.parse(lobbyUsers));
  });

  socket.on("leaveGame", (lobbyUsers) => {
    setLobbyUserList(JSON.parse(lobbyUsers));
  });

  return (
    <>
      <div className="content__container content__container--large ingame__lobby">
        <div className="lobby__header">
          <ReturnButton pageType="lobby" leaveLobby={leaveGame} />
          <h2>LSBI Game !</h2>
          <button className="lobby__close-button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="ingame-section__container">
          <ul className="score-board__list">
            {lobbyUserList.map((user, index) => {
              return (
                <li key={index}>
                  <ScoreBoardPlayer
                    nickname={user.nickname}
                    avatarid={user.avatarID}
                  />
                </li>
              );
            })}
          </ul>
          <button className="ingame__main-button">CLICK ME !</button>
        </div>
      </div>
    </>
  );
}
