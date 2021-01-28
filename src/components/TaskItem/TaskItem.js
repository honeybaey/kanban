import React, { Component } from "react";
import "./TaskItem.css";

export default class TaskItem extends Component {
  render() {
    return (
      <>
        {this.props.issues.map((item) => (
          <li
            className="dropdown__item"
            contentEditable={true}
            suppressContentEditableWarning={true}
            data-task-id={item.id}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </>
    );
  }
}
