import React from "react";

// This component represents a single User in Lobby.

export default function User() {
  return (
    <div className="user">
      <img
        className="avatar large"
        alt="avatar"
        src={require("../avatars/reindeer-color-icon.png")}
      ></img>
      <p>Name</p>
    </div>
  );
}
