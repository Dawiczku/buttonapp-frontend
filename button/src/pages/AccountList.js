import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccountContainer from "../components/AccountContainer";
import DeleteAccButton from "../components/DeleteAccButton";

export default function AccountList() {
  const [accountList, setAccountList] = useState(
    localStorage.getItem("accounts")
      ? JSON.parse(localStorage.getItem("accounts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accountList));
  }, [accountList]);

  // Function returns list item with button to create new account if account list it not full.
  const returnNewAccButton = () => {
    return (
      <li>
        <AccountContainer type="new" />
      </li>
    );
  };

  // Handler for button to delete accounts (DeleteAccButton.js)
  const handleClick = (event) => {
    const filteredAccountList = accountList.filter((account) => {
      return account.accountID !== event.target.parentNode.dataset.buttonid;
    });
    setAccountList(filteredAccountList);
  };

  return (
    <>
      <Header />
      <div className="content__container content__container--small">
        <ul className="accounts__list">
          {accountList.map((account, index) => {
            return (
              <li key={index}>
                <AccountContainer
                  nickname={account.nickname}
                  avatarid={account.avatarID}
                />
                <DeleteAccButton
                  handleClick={handleClick}
                  buttonID={account.accountID}
                />
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
