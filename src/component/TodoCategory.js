import React from "react";

const TodoCategory = ({ selectCategory, categoryChangeHandler }) => {
  const categoryList = ["건강", "공부", "일상", "힐링"];
  return (
    <div>
      {categoryList.map((value, idx) => {
        return (
          <label key={idx}>
            <input
              type="radio"
              value={value}
              checked={selectCategory === value}
              onChange={categoryChangeHandler}
            />
            {value}
          </label>
        );
      })}
    </div>
  );
};

export default TodoCategory;
