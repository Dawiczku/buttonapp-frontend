import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="github-link__container">
        <a href="https://github.com/forceindia712">
          <img
            src={require("../icons/github_logo.png")}
            alt="github__logo"
            className="github__logo"
          ></img>
          forceindia712
        </a>
      </div>
      <div className="github-link__container">
        <a href="https://github.com/Dawiczku">
          <img
            src={require("../icons/github_logo.png")}
            alt="github__logo"
            className="github__logo"
          ></img>
          Dawiczku
        </a>
      </div>
    </footer>
  );
}
