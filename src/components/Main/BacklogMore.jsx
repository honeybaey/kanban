import React from "react";
import TaskMore from "./TaskMore";
import "./BacklogMore.css";

const BacklogMore = ({ issues, dataMock, tasksIdCounter }) => {
  return (
    <section className="list-container">
      <TaskMore
        issues={issues}
        dataMock={dataMock}
        tasksIdCounter={tasksIdCounter}
      />
    </section>
  );
};

export default BacklogMore;
