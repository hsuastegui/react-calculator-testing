import React, { Component } from "react";
import { add, substract } from '../stateChanges';

class Calculator extends Component {
  static propTypes = {
    amount: React.PropTypes.number.isRequired
  };
  static defaultProps = {
    amount: 0
  };
  state = {
    amount: this.props.amount,
    total: 0
  };
  handleChange = event => {
    this.setState({
      amount: Number(event.target.value)
    });
  };
  add = () => {
    this.setState(add);
  };
  substract = () => {
    this.setState(substract);
  };
  render() {
    return (
      <section>
        <h1>Simple Calculator</h1>
        <input
          type="text"
          value={this.state.amount}
          onChange={this.handleChange}
        />
        <button id="add" onClick={this.add}>+</button>
        <button id="substract" onClick={this.substract}>-</button>
        <p>Total: <span id="total">{this.state.total}</span></p>
      </section>
    );
  }
}

export default Calculator;
