import React from "react";
import Account from "../components/Account";
import NewAccount from "../components/NewAccount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function AccountList() {
  return (
    <>
      <Header />
      <div className="account-list">
        <ul>
          <li>
            <Link to="/choose-lobby" className="link">
              <Account />
            </Link>
          </li>
          <li>
            <Link to="/choose-lobby" className="link">
              <Account />
            </Link>
          </li>
          <li>
            <Link to="/choose-lobby" className="link">
              <Account />
            </Link>
          </li>
          <li>
            <Link to="/choose-lobby" className="link">
              <Account />
            </Link>
          </li>
          <li>
            <Link to="/create-account" className="link">
              <NewAccount />
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
