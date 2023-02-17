import "./styles/styles.css";
import React from "react";
import Header from "./components/Header";
import AccountList from "./components/AccountList";
import Footer from "./components/Foooter";

function App() {
  return (
    <>
      <Header />
      <AccountList />
      <Footer />
    </>
  );
}

export default App;
