import React from "react"
import renderer from "react-test-renderer"
import Game from "../components/game.js"
const sum = require('../components/TicTacToe');

test('Test if X wins', () => {
	const wrapper = renderer.create(<Game/>);
	const inst = wrapper.getInstance();
  expect(
	calculateWinner(['X','X','X',null,null,null,null,null,null]))
	.toBe('X');
});