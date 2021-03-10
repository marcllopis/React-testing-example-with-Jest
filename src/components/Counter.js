/* 3rd party imports */
import React, { Component } from 'react';

// initial state is null
// after component didmount is a number
// methods
// functions
// render method renders stuff

export const plusOne = a => a + 1;

export const minusOne = a => a - 1;


class Counter extends Component {

  state = {
    counter: null
  };

  componentDidMount() {
    this.setState({ counter: 0 });
  }

  increment = () =>
    this.setState({ counter: plusOne(this.state.counter) })

  decrement = () => {
    this.setState({ counter: minusOne(this.state.counter) });
  }

  render() {
    return (
      <div>
        <h1>This is the title</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
};

export default Counter;
