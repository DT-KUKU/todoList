import React, { useState } from "react";
import { useInputCustomHook } from "../hook/useInputCustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as Star } from "@fortawesome/free-solid-svg-icons";
import TodoCategory from "./TodoCategory";
import { postHeader } from "../headers/requestHeaders";
const TodoInputComponent = ({ setReloadData }) => {
  const [category, setCategory, resetCategory] = useInputCustomHook("");
  const [todo, setTodo, resetTodo] = useInputCustomHook("");
  const [important, setImportant] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (category === "") {
      alert("category를 선택해주세요!");
      return;
    }
    const data = {
      category: category,
      title: todo,
      check: false,
      importance: important,
    };
    await fetch("http://localhost:3001/todo", postHeader(data));
    resetTodo();
    resetCategory();
    setImportant(false);
    setReloadData((prev) => !prev);
  };

  return (
    <section className="todo__form">
      <form onSubmit={submitHandler}>
        <TodoCategory
          categoryChangeHandler={setCategory}
          selectCategory={category}
        />
        <label htmlFor="todo__Input" className="todo__label">
          Todo
        </label>
        <input
          id="todo__Input"
          value={todo}
          onChange={setTodo}
          maxLength={20}
        />
        <span className="todo__favorite">
          {important ? (
            <FontAwesomeIcon
              onClick={() => setImportant((prev) => !prev)}
              icon={Star}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setImportant((prev) => !prev)}
              icon={faStar}
              style={{ cursor: "pointer" }}
            />
          )}
        </span>
        <div className="todo__formBtn">
          <button>추가</button>
        </div>
      </form>
    </section>
  );
};

export default TodoInputComponent;
