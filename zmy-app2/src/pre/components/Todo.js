import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { completed, text, onClick } = this.props;
    return (
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        {text}
      </li>
    );
  }
}

export default Todo;
