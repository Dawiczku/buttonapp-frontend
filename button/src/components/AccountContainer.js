import React from "react";
import { Link } from "react-router-dom";
import Account from "./Account";
import DeleteAccButton from "./DeleteAccButton";
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
          <Account />
        </Link>
      )}
      <DeleteAccButton />
    </>
  );
}
