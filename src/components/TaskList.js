import React from "react";
import Task from "./Task";
import { v4 as uuid} from "uuid";

function TaskList({tasks, filterCategory}) {
  const filteredTasks = tasks.filter((task) =>{
    return filterCategory === "All" || task.category === filterCategory
  })
  const taskArray = filteredTasks.map((task) => {
    return <Task key={uuid()}category={task.category} text={task.text}/>
  })
  return (
    <div className="tasks">
      {taskArray}
    </div>
  );
}

export default TaskList;
