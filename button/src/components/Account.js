import React from "react";
import DeleteAccButton from "./DeleteAccButton";

// This component represents a single account placed in AccountList.

export default function Account(account) {
  return (
    <div className="account-container">
      <img
        src={require("../avatars/reindeer-color-icon.png")}
        className="avatar normal"
        alt="avatar"
      ></img>
      <p>{account.nickname}</p>
    </div>
  );
}
