import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReturnButton({ leaveLobby }) {
  return (
    <>
      <button className="return__button" onClick={leaveLobby}>
        <span className="material-symbols-outlined">arrow_back</span>Wstecz
      </button>
    </>
  );
}
