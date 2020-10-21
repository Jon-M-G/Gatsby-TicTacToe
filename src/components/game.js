import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Board from "../components/board.js"
class Game extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "game" },
      React.createElement("div", { className: "game-board" },
      React.createElement(Board, null)),

      React.createElement("div", { className: "game-info" },
      React.createElement("div", null),
      React.createElement("ol", null))));



  }}


// ========================================
/*
ReactDOM.render(
React.createElement(Game, null),
document.getElementById('root'));
*/

function calculateWinner(squares) {
  const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
module.exports = calculateWinner;
export default Game;