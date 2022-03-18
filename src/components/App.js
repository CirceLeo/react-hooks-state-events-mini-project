import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filterCategory, setFilterCategory] = useState("All")
  const [curTasks, setCurTasks] = useState(TASKS)

  function onTaskFormSubmit(newTaskObj){
    console.log(newTaskObj)
    setCurTasks([...curTasks, newTaskObj])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filterCategory={filterCategory} setFilterCategory={setFilterCategory} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList filterCategory={filterCategory} tasks={curTasks}/>
    </div>
  );
}

export default App;
