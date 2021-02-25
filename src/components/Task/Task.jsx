import React, { Component } from "react";
import "./Task.css";

/* export default class Task extends Component {
  render() {
    return (
      <>
        {this.props.issues.map((item) => (
          <li className="dropdown__item" data-task-id={item.id} key={item.id}>
            {item.name}
          </li>
        ))}
      </>
    );
  }
} */

export default class Task extends Component {
  constructor() {
    super();
    this.renderComponent = "input";
  }

  addTask = () => {
    this.renderComponent = "input";

    this.props.createTask();
  };

  render() {
    return (
      <>
        {this.props.issues.map((item) => (
          <li className="dropdown__item" data-task-id={item.id} key={item.id}>
            {this.renderComponent === "input" ? (
              <input />
            ) : (
              <span>{item.name}</span>
            )}
          </li>
        ))}
      </>
    );
  }
}
