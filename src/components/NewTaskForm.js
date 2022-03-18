import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [formObj, setFormObj] = useState({
    text : "",
    category: "Code"
  })
  function handleFormSubmit(event){
    event.preventDefault()
    console.log(formObj)
    onTaskFormSubmit(formObj)
  }
  function handleFormChange(event){
    setFormObj({
      ...formObj,
      [event.target.name] : event.target.value
    })
  }
  const categoryOptions = categories.map((category => {
    if (category === "All"){return null}
    return <option key={category}>{category}</option>
  }))
  return (
    <form onSubmit={handleFormSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleFormChange} value={formObj.text} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleFormChange} value={formObj.category} name="category">
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
