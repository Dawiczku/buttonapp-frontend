import React from "react";
import NewAccount from "../components/NewAccount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import AccountContainer from "../components/AccountContainer";

export default function AccountList() {
  return (
    <>
      <Header />
      <div className="account-list">
        <ul>
          <li>
            <AccountContainer />
          </li>
          <li>
            <AccountContainer />
          </li>
          <li>
            <AccountContainer />
          </li>
          <li>
            <AccountContainer />
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
