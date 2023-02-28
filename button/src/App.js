import "./styles/styles.css";
import React from "react";
import CreateAccount from "./pages/CreateAccount";
import AccountList from "./pages/AccountList";
import ChooseLobby from "./pages/ChooseLobby";
import Lobby from "./pages/Lobby";
import ButtonGame from "./pages/ButtonGame";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccountList />} />
          <Route path="choose-lobby" element={<ChooseLobby />} />
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
