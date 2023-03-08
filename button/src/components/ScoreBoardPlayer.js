import React from "react";

export default function ScoreBoardPlayer() {
  return (
    <div className="scoreboard__player">
      <img
        className="avatar avatar--small"
        src={require("../avatars/avatar2.png")}
        alt="avatar"
      />
      <p className="scoreboard__position">1.</p>
      <p className="scoreboard__nickname">Nickname</p>
    </div>
  );
}
