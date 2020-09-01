import React, { Component } from "react";

import "./style.css";

export default class SpecialInput extends Component {
  state = {
    value: "Ray",
  };

  handleInput = (event) => {
    this.setState({ value: event.target.value });
  };

  formatText = (text) => {
    if (text.includes("Ray") || text.includes("Rinda")) {
      return text.replace("Ray", "Gay").replace("Rinda", "Princess");
    }

    return text;
  };

  render() {
    const { value } = this.state;

    return (
      <div className="SpecialInput">
        <div className="title">SpecialInput component</div>
        <input value={value} onChange={this.handleInput} />
        <div className="shownValue">Result: {this.formatText(value)}</div>
      </div>
    );
  }
}
