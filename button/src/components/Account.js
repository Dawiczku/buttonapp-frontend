import React from "react";

// This component represents a single account placed in AccountList.

export default function Account() {
  return (
    <div className="account-container">
      <img
        src={require("../avatars/reindeer-color-icon.png")}
        className="avatar normal"
        alt="avatar"
      ></img>
      <p>Name</p>
    </div>
  );
}
