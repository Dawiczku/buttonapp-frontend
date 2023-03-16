import React, { useState, useEffect } from "react";
import AccountContainer from "../components/AccountContainer";
import DeleteAccButton from "../components/DeleteAccButton";

export default function AccountList() {
  // Hooks

  const [accountList, setAccountList] = useState(
    localStorage.getItem("accounts")
      ? JSON.parse(localStorage.getItem("accounts"))
      : []
  );

  // UseEffects

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accountList));
  }, [accountList]);

  // Functions

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
    </>
  );
}
