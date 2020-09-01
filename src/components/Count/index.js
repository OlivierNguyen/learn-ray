import React, { Component } from "react";

export default class Count extends Component {
  state = {
    count: 29,
  };

  onClickPlus = () => {
    // Perfect way
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  onClickMinus = () => {
    // Bad but working way
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Count">
        <div className="title">Count</div>
        <button onClick={this.onClickPlus}>+</button>
        <button onClick={this.onClickMinus}>-</button>
        <div>Count: {count}</div>
      </div>
    );
  }
}
