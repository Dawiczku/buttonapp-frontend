import React from "react";

export default function Foooter() {
  return (
    <footer>
      <div className="footer-container">
        <a href="https://github.com/forceindia712">
          <img
            src={require("../icons/github_logo.png")}
            alt="github-logo"
            className="github-logo"
          ></img>
          forceindia712
        </a>
      </div>
      <div className="footer-container">
        <a href="https://github.com/Dawiczku">
          <img
            src={require("../icons/github_logo.png")}
            alt="github-logo"
            className="github-logo"
          ></img>
          Dawiczku
        </a>
      </div>
    </footer>
  );
}
