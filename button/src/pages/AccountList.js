import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccountContainer from "../components/AccountContainer";
import DeleteAccButton from "../components/DeleteAccButton";

export default function AccountList() {
  let accountList = null;

  localStorage.getItem("accounts")
    ? (accountList = JSON.parse(localStorage.getItem("accounts")))
    : (accountList = []);

  const returnNewAccButton = () => {
    return (
      <li>
        <AccountContainer type="new" />
      </li>
    );
  };

  return (
    <>
      <Header />
      <div className="account-list-container">
        <ul className="account-list">
          {accountList.map((account, index) => {
            return (
              <li key={index}>
                <AccountContainer nickname={account.nickname} />
                <DeleteAccButton />
              </li>
            );
          })}
          {accountList.length < 5 ? returnNewAccButton() : null}
        </ul>
      </div>
      <Footer />
    </>
  );
}
