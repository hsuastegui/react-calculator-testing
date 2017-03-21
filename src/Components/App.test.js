import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import { increaseScore, decreaseScore } from '../stateChanges';

describe('Main app', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component.find('.App').length).toBe(1);
  });
});
