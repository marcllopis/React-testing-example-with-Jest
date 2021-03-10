/* 3rd party imports */
import React from 'react';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow, configure } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

import Counter, {minusOne, plusOne} from './Counter';


describe('How to test a component:\n', () => {

  describe('Counter:', () => {

    it('shallow renders properly', () => {
      const wrapper = shallow(<Counter />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('is mounted properly', () => {
      const domTree = renderer.create(<Counter />).toJSON();
      expect(domTree).toMatchSnapshot();
    });

    it('constructor method: it\'s initial counter is null', () => {
      // arrange
      const wrapper = shallow(<Counter />,
        { disableLifecycleMethods: true });
      const expected = null;

      // assert
      expect(wrapper.state('counter')).toEqual(expected);
    });

    it('componentDidMount method: it\'s counter is 0', () => {
      // arrange
      const wrapper = shallow(<Counter />,
        { disableLifecycleMethods: true });
      const initialState = { counter: null };
      const expectedState = { counter: 0 };

      // assert
      expect(wrapper.instance().state).toEqual(initialState);

      // act
      wrapper.instance().componentDidMount();

      // assert
      expect(wrapper.instance().state).toEqual(expectedState);
    });

    it('increment method actually increments the counter value', () => {
      // arrange
      const instance = shallow(<Counter />).instance();
      const initialState = { counter: 43 };
      const expectedState = { counter: 44 };
      instance.setState(initialState);

      // assert
      expect(instance.state).toEqual(initialState);

      // act
      instance.increment();

      // assert
      expect(instance.state).toEqual(expectedState);
    });

    it('decrement method actually decrease the counter value', () => {
      // arrange
      const instance = shallow(<Counter />).instance();
      const initialState = { counter: 43 };
      const expectedState = { counter: 42 };
      instance.setState(initialState);

      // assert
      expect(instance.state).toEqual(initialState);

      // act
      instance.decrement();

      // assert
      expect(instance.state).toEqual(expectedState);
    });
  });

  describe('Helper functions:', () => {
    it('plusOne fn is defined and returns a var incremented', () => {
      expect(plusOne).toBeDefined();
      expect(plusOne(1)).toBe(2);
    });

    it('minusOne fn is defined and returns a var decremented', () => {
      expect(minusOne).toBeDefined();
      expect(minusOne(2)).toBe(1);
    });
  });
});
