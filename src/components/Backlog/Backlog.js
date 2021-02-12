import React, { Component } from "react";
import "./Backlog.css";
import TaskItem from "../TaskItem/TaskItem";
import { Link } from "react-router-dom";
import ExtraList from "../ExtraList/ExtraList";

export const deleteSpaces = (str) => {
  const newStr = str.trim();

  if (newStr.indexOf(" ") > 0) {
    let res =
      newStr.slice(0, newStr.indexOf(" ")) +
      newStr.slice(newStr.indexOf(" ") + 1, newStr.length);

    return res.toLowerCase().trim();
  }
  return newStr.toLowerCase();
};

export default class Backlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExtraListShow: false,
      isExtraListTasksShow: false,
    };
  }

  onShowExtraListTasks = () => {
    this.state.isExtraListTasksShow
      ? this.setState({ isExtraListTasksShow: false })
      : this.setState({
          isExtraListTasksShow: true,
        });
  };

  addTaskHandler = () => {
    this.setState({
      isExtraListShow: true,
    });
  };

  closeExtralistHandler = () => {
    this.state.isExtraListShow
      ? this.setState({ isExtraListShow: false })
      : this.setState({
          isExtraListShow: true,
        });
  };

  render() {
    const {
      title,
      issues,
      tasksIdCounter,
      listIndex,
      backlogs,
      isDisabledBtn,
      createTask,
      onSelectTask,
    } = this.props;

    return (
      <section className={`dropdown dropdown-${deleteSpaces(title)}`}>
        <div className="dropdown__header">
          <h4 className="dropdown__title">
            <Link className="dropdown__link" to={`/${deleteSpaces(title)}`}>
              {title}
            </Link>
          </h4>
          <i className="dropdown__header-icon fa fa-ellipsis-h"></i>
        </div>
        <ul className={`dropdown__list dropdown__list-${deleteSpaces(title)}`}>
          <TaskItem issues={issues} tasksIdCounter={tasksIdCounter} />
        </ul>
        {this.state.isExtraListShow ? (
          <ExtraList
            title={title}
            issues={backlogs[listIndex - 1].issues}
            tasksIdCounter={tasksIdCounter}
            isExtraListShow={this.state.isExtraListShow}
            isExtraListTasksShow={this.state.isExtraListTasksShow}
            onShowExtraListTasks={this.onShowExtraListTasks}
            listIndex={listIndex}
            onSelectTask={onSelectTask}
            closeExtralistHandler={this.closeExtralistHandler}
          />
        ) : null}
        <button
          className="dropdown__button-add"
          id={`button-${deleteSpaces(title)}`}
          onClick={listIndex === 0 ? createTask : this.addTaskHandler}
          disabled={isDisabledBtn}
        >
          <i className="dropdown__button-icon fa fa-plus"></i>
          Add card
        </button>
      </section>
    );
  }
}
