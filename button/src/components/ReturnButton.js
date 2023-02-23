import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReturnButton() {
  const navigate = useNavigate();
  const ReturnToLastPage = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="return" onClick={ReturnToLastPage}>
        <span className="material-symbols-outlined">arrow_back</span>Wstecz
      </button>
    </>
  );
}
