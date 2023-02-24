import React from "react";

export default function DeleteAccButton() {
  const stopProp = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <button
        className="close"
        onClick={(e) => {
          stopProp(e);
        }}
      >
        <span className="material-symbols-outlined close-span">close</span>
      </button>
    </>
  );
}
