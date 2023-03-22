import React from "react";

export default function ScoreBoardPlayer({ nickname, avatarid, isadmin }) {
  return (
    <div className="scoreboard__player">
      <img
        className="avatar avatar--small"
        src={require(`../avatars/${avatarid}.png`)}
        alt="avatar"
      />
      <p
        className={` ${
          isadmin
            ? "scoreboard__position highlight--admin"
            : "scoreboard__position"
        }`}
      >
        {nickname}
      </p>
    </div>
  );
}
