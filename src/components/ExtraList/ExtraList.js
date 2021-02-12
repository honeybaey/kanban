import React, { Component } from "react";
import "./ExtraList.css";
import { deleteSpaces } from "../Backlog/Backlog.js";

export default class ExtraList extends Component {
  render() {
    const extralistClassName = `dropdown__list dropdown__list-${deleteSpaces(
      this.props.title
    )} extralist`;

    return (
      <div className="extralist-container">
        <span
          className="extralist-head"
          onClick={this.props.onShowExtraListTasks}
        >
          <i
            className={
              !this.props.isExtraListTasksShow
                ? "extralist-icon fa fa-chevron-down"
                : "extralist-icon fa fa-chevron-up"
            }
          ></i>
        </span>
        <ul
          className={
            !this.props.isExtraListTasksShow
              ? extralistClassName
              : `${extralistClassName} show`
          }
        >
          {this.props.issues.map((item, index) => (
            <li
              className="extralist-item"
              data-task-id={item.id}
              key={item.id}
              onClick={() => {
                this.props.onSelectTask(this.props.listIndex, index);
                this.props.closeExtralistHandler();
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
