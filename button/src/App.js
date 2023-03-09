import "./styles/styles.css";
import React, { useEffect, useState } from "react";
import CreateAccount from "./pages/CreateAccount";
import AccountList from "./pages/AccountList";
import ChooseLobby from "./pages/ChooseLobby";
import Lobby from "./pages/Lobby";
import ButtonGame from "./pages/ButtonGame";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080/");

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.emit("checkConnection");

    socket.on("checkConnection", () => {
      setIsConnected(true);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccountList />} />
          <Route
            path="choose-lobby"
            element={<ChooseLobby socket={socket} />}
          />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="lobby-admin" element={<Lobby type="admin" />} />
          <Route path="lobby-users" element={<Lobby type="users" />} />
          <Route path="button-game" element={<ButtonGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
