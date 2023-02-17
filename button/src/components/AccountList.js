import React from "react";
import Account from "./Account";
import NewAccount from "./NewAccount";

export default function AccountList() {
  return (
    <>
      <div className="account-list">
        <ul>
          <li>
            <Account />
          </li>
          <li>
            <Account />
          </li>
          <li>
            <Account />
          </li>
          <li>
            <Account />
          </li>
          <li>
            <NewAccount />
          </li>
        </ul>
      </div>
    </>
  );
}
