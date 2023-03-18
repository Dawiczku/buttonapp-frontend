import React from "react";

// This component represents a single User in Lobby.

export default function User({ nickname, avatarid, isadmin }) {
  return (
    <div className="lobby__user">
      <img
        className="avatar avatar--large"
        alt="avatar"
        src={require(`../avatars/${avatarid}`)}
      ></img>
      <p className={`${isadmin ? "highlight--admin" : null}`}>{nickname}</p>
    </div>
  );
}
