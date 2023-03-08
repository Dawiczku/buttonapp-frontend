import React from "react";

// This component represents a single User in Lobby.

export default function User() {
  return (
    <div className="lobby__user">
      <img
        className="avatar avatar--large"
        alt="avatar"
        src={require("../avatars/avatar3.png")}
      ></img>
      <p>Name</p>
    </div>
  );
}
