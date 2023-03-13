import React from "react";

export default function ReturnButton({ leaveLobby }) {
  return (
    <>
      <button className="return__button" onClick={leaveLobby}>
        <span className="material-symbols-outlined">arrow_back</span>Wstecz
      </button>
    </>
  );
}
