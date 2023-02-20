import "./styles/styles.css";
import React from "react";
import Header from "./components/Header";
import CreateAccount from "./components/CreateAccount";
import AccountList from "./components/AccountList";
import Footer from "./components/Foooter";

function App() {
  return (
    <>
      <Header />
      <CreateAccount />
      <Footer />
    </>
  );
}

export default App;
