import React from "react";

// This component represents a single User in Lobby.

export default function User({ nickname, avatarid }) {
  return (
    <div className="lobby__user">
      <img
        className="avatar avatar--large"
        alt="avatar"
        src={require(`../avatars/${avatarid}`)}
      ></img>
      <p>{nickname}</p>
    </div>
  );
}
