import React, { useState, useEffect } from "react";

export default function Header() {
  let storageDarkMode = null;

  localStorage.getItem("darkMode")
    ? (storageDarkMode = JSON.parse(localStorage.getItem("darkMode")))
    : (storageDarkMode = false);

  const [darkMode, setDarkMode] = useState(storageDarkMode);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-body")
      : document.body.classList.remove("dark-body");

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const switchDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <div className="logo__container">
        <span className="material-symbols-outlined">open_with</span>
        <h1>Button App</h1>
      </div>

      <div className="dark-mode__container">
        <p className="dark-mode__paragraph">Dark mode</p>
        <input
          type="checkbox"
          id="dark-mode__switch"
          checked={darkMode}
          onChange={switchDarkMode}
        />
        <label for="dark-mode__switch">Toggle</label>
      </div>
    </header>
  );
}
