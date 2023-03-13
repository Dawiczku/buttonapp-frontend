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
  }, []);

  const leaveLobby = () => {
    socket.emit("leaveLobby", location.state.lobbyCode);
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="content__container content__container--large lobby">
        <div className="lobby__header">
          <ReturnButton leaveLobby={leaveLobby} />
          <h2>Lobby - {location.state.lobbyCode}</h2>
          <button className="lobby__close-button">
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
          <Link to="/button-game" className="link">
            <button className="submit__button start-game__button">
              Start the game !
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
