import React from "react";
import { Link } from "react-router-dom";
import Account from "./Account";
import NewAccount from "./NewAccount";

export default function AccountContainer({ nickname, avatarid, type }) {
  return (
    <>
      {type === "new" ? (
        <Link to="/create-account" className="link">
          <NewAccount />
        </Link>
      ) : (
        <Link
          to="choose-lobby"
          className="link"
          state={{ nickname: nickname, avatarid: avatarid }}
        >
          <Account nickname={nickname} avatarid={avatarid} />
        </Link>
      )}
    </>
  );
}
