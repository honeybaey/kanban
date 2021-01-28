import React, { Component } from "react";
import "./ExtraList.css";
import { deleteSpaces } from "../ListItem/ListItem.js";

export default class ExtraList extends Component {
  render() {
    const extralistClassName = `dropdown__list dropdown__list-${deleteSpaces(
      this.props.title
    )} extralist`;

    return (
      <div className="extralist-container">
        <span className="extralist-head" onClick={this.props.onShowExtraList}>
          <i
            className={
              !this.props.isExtraListShow
                ? "extralist-icon fa fa-chevron-down"
                : "extralist-icon fa fa-chevron-up"
            }
          ></i>
        </span>
        <ul
          className={
            !this.props.isExtraListShow
              ? extralistClassName
              : `${extralistClassName} show`
          }
        >
          {this.props.issues.map((item) => (
            <li className="extralist-item" data-task-id={item.id} key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
