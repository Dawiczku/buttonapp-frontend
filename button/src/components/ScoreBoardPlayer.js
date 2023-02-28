import React from "react";

export default function ScoreBoardPlayer() {
  return (
    <div className="scoreboard-player">
      <img
        className="avatar small"
        src={require("../avatars/dog-face-color-icon.png")}
        alt="small-avatar"
      />
      <p className="scoreboard-position">1.</p>
      <p className="scoreboard-nickname">Nickname</p>
    </div>
  );
}
