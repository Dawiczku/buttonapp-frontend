import React from "react";
import Account from "../components/Account";
import NewAccount from "../components/NewAccount";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AccountList() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
