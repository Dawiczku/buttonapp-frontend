import React from "react";

// This component represents a single account placed in AccountList.

export default function Account({ nickname, avatarid }) {
  return (
    <div className="accounts__list__item">
      <img
        src={require(`../avatars/${avatarid}.png`)}
        className="avatar avatar--medium"
        alt="avatar"
      ></img>
      <p>{nickname}</p>
    </div>
  );
}
