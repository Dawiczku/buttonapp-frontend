import "./styles/styles.css";
import React from "react";
import Header from "./components/Header";
import CreateAccount from "./pages/CreateAccount";
import AccountList from "./pages/AccountList";
import Footer from "./components/Footer";
import ChooseLobby from "./pages/ChooseLobby";
import Lobby from "./pages/Lobby";

function App() {
  return (
    <>
      <Header />
      {/* <Lobby type="admin" /> */}
      <AccountList />
      <Footer />
    </>
  );
}

export default App;
