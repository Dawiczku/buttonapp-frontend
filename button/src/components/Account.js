import React from "react";

export default function Account() {
  const stopProp = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="account-container">
      <img
        src={require("../avatars/reindeer-color-icon.png")}
        className="avatar"
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
