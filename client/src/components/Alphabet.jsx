import React, { Component } from "react";


class Alphabet extends Component {
  getButtons = (l) => {
    const array = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

    return array.map((letter) => {
      return <button>{letter}</button>;
    });
  };

  render() {
    return <div>{this.getButtons()}</div>;
  }
}

export default Alphabet;
