import React from "react";

export default function DeleteAccButton(props) {
  return (
    <>
      <button
        className="close"
        data-buttonid={props.buttonID}
        onClick={props.handleClick}
      >
        <span className="material-symbols-outlined close-span">close</span>
      </button>
    </>
  );
}
