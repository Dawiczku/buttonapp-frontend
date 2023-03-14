import React from "react";

export default function ScoreBoardPlayer({ nickname, avatarid }) {
  return (
    <div className="scoreboard__player">
      <img
        className="avatar avatar--small"
        src={require(`../avatars/${avatarid}`)}
        alt="avatar"
      />
      <p className="scoreboard__position">{nickname}</p>
    </div>
  );
}
