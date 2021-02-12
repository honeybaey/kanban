import React from "react";
import TaskItemMore from "../TaskItemMore/TaskItemMore";
import "./BacklogMore.css";

const BacklogMore = (props) => {
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

export default BacklogMore;
