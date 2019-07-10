import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar" id="tarotbg">
        <a id="game-name" href="/">
          <h2 className="ml-2">Tarot Shuffle</h2>
        </a>

        <div className="guess text-center">{props.msg}</div>

        <div className="guess mr-2">
        Score: {props.score} | Top Score: {props.highScore}
      </div>
    </nav>
  );
}

export default Nav;