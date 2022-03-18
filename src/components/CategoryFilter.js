import React from "react";

function CategoryFilter({filterCategory, categories, setFilterCategory}) {
  const categoryButtonArray = categories.map((category)=>{
    // let btnClassList = ""
    // if (filterCategory === category) {btnClassList = "selected"}
    // console.log(btnClassList, filterCategory)
    const tempBtn = <button  onClick={handleCategoryClick} key={category}>{category}</button>
    // tempBtn.classList.add(btnClassList)
    return tempBtn
  })
  function handleCategoryClick(event){
    event.target.classList.add("selected")
    setFilterCategory(event.target.innerText)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtonArray}
    </div>
  );
}

export default CategoryFilter;
