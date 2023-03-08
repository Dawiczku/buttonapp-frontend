import React from "react";

// This component represents a "New Account" container, used to add new account.

export default function NewAccount() {
  return (
    <div className="accounts__list__item">
      <img
        src={require("../icons/plus-round-line-icon.png")}
        className="avatar avatar--medium new-acc__icon"
        alt="new-acc__icon"
      ></img>
      <p>Create new</p>
    </div>
  );
}
