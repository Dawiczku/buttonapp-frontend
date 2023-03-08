import React from "react";

// This component represents a single account placed in AccountList.

export default function Account(account) {
  return (
    <div className="accounts__list__item">
      <img
        src={require(`../avatars/${account.avatarid}`)}
        className="avatar avatar--medium"
        alt="avatar"
      ></img>
      <p>{account.nickname}</p>
    </div>
  );
}
