import React from "react";

function Task({category, text}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={(event) => event.target.parentNode.remove()} className="delete">X</button>
    </div>
  );
}

export default Task;
