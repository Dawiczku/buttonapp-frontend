import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReturnButton from "../components/ReturnButton";
import ScoreBoardPlayer from "../components/ScoreBoardPlayer";

export default function ButtonGame({ socket }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [lobbyUserList, setLobbyUserList] = useState([]);

  const leaveGame = () => {
    socket.emit("leaveGame", location.state.lobbyCode);
    navigate("/");
  };

  useEffect(() => {
    socket.emit("getLobbyUsers", location.state.lobbyCode);
  }, [socket, location.state.lobbyCode]);

  socket.on("sendLobbyUsers", (lobbyUsers) => {
    setLobbyUserList(JSON.parse(lobbyUsers));
  });

  socket.on("leaveGame", (lobbyUsers) => {
    setLobbyUserList(JSON.parse(lobbyUsers));
  });

  return (
    <>
      <Header />
      <div className="content__container content__container--large ingame__lobby">
        <div className="lobby__header">
          <ReturnButton pageType="lobby" leaveLobby={leaveGame} />
          <h2>LSBI Game !</h2>
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
      <Footer />
    </>
  );
}
