import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReturnButton() {
  const navigate = useNavigate();
  const returnToLastPage = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="return__button" onClick={returnToLastPage}>
        <span className="material-symbols-outlined">arrow_back</span>Wstecz
      </button>
    </>
  );
}
