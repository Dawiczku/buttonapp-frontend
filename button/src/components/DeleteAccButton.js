import React from "react";

export default function DeleteAccButton(props) {
  return (
    <>
      <button
        className="delete-acc__button"
        data-buttonid={props.buttonID}
        onClick={props.handleClick}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    </>
  );
}
