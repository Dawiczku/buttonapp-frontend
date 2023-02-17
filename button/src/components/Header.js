import React from "react";

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <span className="material-symbols-outlined">open_with</span>
        <h1>Button App</h1>
      </div>

      <div className="dark-mode-container">
        <p className="dark-mode-paragraph">Dark mode</p>
        <input type="checkbox" id="dark-mode-switch" />
        <label for="dark-mode-switch">Toggle</label>
      </div>
    </header>
  );
}
