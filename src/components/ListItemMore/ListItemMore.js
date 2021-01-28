import React from "react";
import TaskItemMore from "../TaskItemMore/TaskItemMore";
import "./ListItemMore.css";

const ListItemMore = (props) => {
  const { issues, dataMock, tasksIdCounter } = props;
  return (
    <section className="list-container">
      <TaskItemMore
        issues={issues}
        dataMock={dataMock}
        tasksIdCounter={tasksIdCounter}
      />
    </section>
  );
};

export default ListItemMore;
