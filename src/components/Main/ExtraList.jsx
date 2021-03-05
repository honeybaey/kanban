import React from "react";
import "./ExtraList.css";
import { deleteSpaces } from "./Backlog";

const ExtraList = ({
  title,
  toggleExtraListTasks,
  isExtraListTasksShow,
  issues,
  onSelectTask,
  closeExtralistHandler,
  listIndex,
}) => {
  const extralistClassName = `dropdown__list dropdown__list-${deleteSpaces(
    title
  )} extralist`;

  return (
    <div className="extralist-container">
      <span className="extralist-head" onClick={toggleExtraListTasks}>
        <i
          className={
            !isExtraListTasksShow
              ? "extralist-icon fa fa-chevron-down"
              : "extralist-icon fa fa-chevron-up"
          }
        ></i>
      </span>
      <ul
        className={
          !isExtraListTasksShow
            ? extralistClassName
            : `${extralistClassName} show`
        }
      >
        {issues.map((item, index) => (
          <li
            className="extralist-item"
            data-task-id={item.id}
            key={item.id}
            onClick={() => {
              onSelectTask(listIndex, index);
              closeExtralistHandler();
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraList;
