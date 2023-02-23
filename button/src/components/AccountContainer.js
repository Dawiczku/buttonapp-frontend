import React from "react";
import { Link } from "react-router-dom";
import Account from "./Account";
import DeleteAccButton from "./DeleteAccButton";

export default function AccountContainer() {
  return (
    <>
      <Link to="choose-lobby" className="link">
        <Account />
      </Link>
      <DeleteAccButton />
    </>
  );
}
