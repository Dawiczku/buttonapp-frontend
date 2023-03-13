import React from "react";

export default function ReturnButton(props) {
  return (
    <>
      <button
        className="return__button"
        onClick={
          props.pageType === "lobby"
            ? props.leaveLobby
            : props.navigateToLastPage
        }
      >
        <span className="material-symbols-outlined">arrow_back</span>Wstecz
      </button>
    </>
  );
}
