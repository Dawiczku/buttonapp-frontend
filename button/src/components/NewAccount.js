import React from "react";

export default function NewAccount() {
  return (
    <div className="account-container">
      <img
        src={require("../icons/plus-round-line-icon.png")}
        className="avatar"
        alt="new-avatar"
      ></img>
      <p>Create new</p>
      <button className="close">
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}
