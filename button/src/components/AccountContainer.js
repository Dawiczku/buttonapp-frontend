import React from "react";
import { Link } from "react-router-dom";
import Account from "./Account";
import NewAccount from "./NewAccount";

export default function AccountContainer(account) {
  return (
    <>
      {account.type === "new" ? (
        <Link to="/create-account" className="link">
          <NewAccount />
        </Link>
      ) : (
        <Link to="choose-lobby" className="link">
          <Account nickname={account.nickname} />
        </Link>
      )}
    </>
  );
}
