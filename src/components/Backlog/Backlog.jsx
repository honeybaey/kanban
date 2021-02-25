import React, { PureComponent } from "react";
import "./Backlog.css";
import Task from "../Task/Task";
import { Link } from "react-router-dom";
import ExtraList from "../ExtraList/ExtraList";
import ApplyButton from "../ApplyButton/ApplyButton";

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

export default class Backlog extends PureComponent {
  state = {
    isExtraListShow: false,
    isExtraListTasksShow: false,
    // isApplyBtnShow: false
  };

  addExtraListHandler = () => {
    this.setState({
      isExtraListShow: true,
    });
  };

  closeExtralistHandler = () => {
    this.setState({
      isExtraListShow: false,
    });
  };

  toggleExtraListTasks = () => {
    this.setState({ isExtraListTasksShow: !this.state.isExtraListTasksShow });
  };

  /* showApplyBtn = () => {
    this.setState({isApplyBtnShow: true})
  } */

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
      isApplyBtnShow,
      removeApplyBtn
    } = this.props;

    const listName = deleteSpaces(title);

    return (
      <section className={`dropdown dropdown-${listName}`}>
        <div className="dropdown__header">
          <h4 className="dropdown__title">
            <Link className="dropdown__link" to={`/${listName}`}>
              {title}
            </Link>
          </h4>
          <i className="dropdown__header-icon fa fa-ellipsis-h"></i>
        </div>
        <ul className={`dropdown__list dropdown__list-${listName}`}>
          <div>
            <Task
              issues={issues}
              tasksIdCounter={tasksIdCounter}
              createTask={createTask}
            />
          </div>

          {listIndex === 0 && isApplyBtnShow && (
            <ApplyButton removeApplyBtn={removeApplyBtn} />
          )}
        </ul>
        {this.state.isExtraListShow && (
          <ExtraList
            title={title}
            issues={backlogs[listIndex - 1].issues}
            tasksIdCounter={tasksIdCounter}
            isExtraListShow={this.state.isExtraListShow}
            isExtraListTasksShow={this.state.isExtraListTasksShow}
            toggleExtraListTasks={this.toggleExtraListTasks}
            listIndex={listIndex}
            onSelectTask={onSelectTask}
            closeExtralistHandler={this.closeExtralistHandler}
          />
        )}
        <button
          className="dropdown__button-add"
          id={`button-${listName}`}
          onClick={listIndex === 0 ? createTask : this.addExtraListHandler}
          disabled={isDisabledBtn}
        >
          <i className="dropdown__button-icon fa fa-plus"></i>
          Add card
        </button>
      </section>
    );
  }
}
