import React from "react";

// This component represents a single account placed in AccountList.

export default function Account(account) {
  return (
    <div className="account-container">
      <img
        src={require(`../avatars/${account.avatarid}`)}
        className="avatar normal"
        alt="avatar"
      ></img>
      <p>{account.nickname}</p>
    </div>
  );
}
