import React from "react";

// This component represents a single account placed in AccountList.

export default function Account() {
  const stopProp = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="account-container">
      <img
        src={require("../avatars/reindeer-color-icon.png")}
        className="avatar normal"
        alt="avatar"
      ></img>
      <p>Name</p>
      <button
        className="close"
        onClick={(e) => {
          stopProp(e);
        }}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}
