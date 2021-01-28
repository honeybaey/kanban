import React from "react";
import "./TaskItemMore.css";

const TaskItemMore = (props) => {
  return (
    <>
      {props.issues.map((item) => (
        <div
          className="task-container"
          contentEditable={true}
          suppressContentEditableWarning={true}
          data-task-id={item.id}
          key={item.id}
        >
          <h2 className="task-title">{item.name}</h2>
          <p className="task-description">
            Это был темный лес, издали казавшийся непроходимым. Там Пахапиль
            охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока
            русские не выгнали оккупантов. А когда немцы ушли, Пахапиль
            вернулся. Он появился в Раквере, где советский капитан наградил его
            медалью. Медаль была украшена четырьмя непонятными словами, фигурой
            и восклицательным знаком.
          </p>
        </div>
      ))}
    </>
  );
};

export default TaskItemMore;
