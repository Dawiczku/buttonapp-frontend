import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccountContainer from "../components/AccountContainer";

export default function AccountList() {
  return (
    <>
      <Header />
      <div className="account-list-container">
        <ul className="account-list">
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
            <AccountContainer type="new" />
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
