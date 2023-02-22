import React from "react";

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
