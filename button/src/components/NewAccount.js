import React from "react";

// This component represents a "New Account" container, used to add new account.

export default function NewAccount() {
  return (
    <div className="account-container">
      <img
        src={require("../icons/plus-round-line-icon.png")}
        className="avatar normal new-acc-icon"
        alt="new-acc-icon"
      ></img>
      <p>Create new</p>
      <button className="close">
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}
