import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Game, {squares} from "../components/game.js"
import Board from "../components/board.js"
describe('Game', () => {

  test('snapshot renders', () => {
    const component = renderer.create(<Game />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
 
  it('passes all props to Counter', () => {
    const wrapper = mount(<Game />);
    const counterWrapper = wrapper.find(Board);
 
    expect(counterWrapper.find('button').length).toEqual(9);
  });
});
 