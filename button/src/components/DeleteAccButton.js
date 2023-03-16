import React from "react";

export default function DeleteAccButton({ handleClick, buttonID }) {
  return (
    <>
      <button
        className="delete-acc__button"
        data-buttonid={buttonID}
        onClick={handleClick}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    </>
  );
}
