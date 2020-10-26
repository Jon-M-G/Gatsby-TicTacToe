import React from "react"
import renderer from "react-test-renderer"
import Game from "../components/game.js"
import { calculateWinner }from "../components/calcWin.js"
const sum = require('../components/TicTacToe');

test('Test if X wins', () => {
	const wrapper = renderer.create(<Game/>);
	const inst = wrapper.getInstance();
  expect(
	calculateWinner(['X','X','X',null,null,null,null,null,null]))
	.toBe('X');
});

test('Test if X wins', () => {
	const wrapper = renderer.create(<Game/>);
	const inst = wrapper.getInstance();
  expect(
	calculateWinner(['X','X','X',null,null,null,null,null,null]))
	.toBe('X');
});