import "./styles/styles.css";
import React, { useEffect, useState } from "react";
import CreateAccount from "./pages/CreateAccount";
import AccountList from "./pages/AccountList";
import ChooseLobby from "./pages/ChooseLobby";
import Lobby from "./pages/Lobby";
import ButtonGame from "./pages/ButtonGame";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";
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
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccountList />} />
          <Route
            path="choose-lobby"
            element={<ChooseLobby socket={socket} />}
          />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="lobby" element={<Lobby socket={socket} />} />
          <Route path="button-game" element={<ButtonGame socket={socket} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
