import { useState } from "react";

export default function TodoInput({ handleAddTodos, setTodoValue, todoValue }) {
  return (
    <header>
      <input
        value={todoValue}
        onChange={(event) => {
          setTodoValue(event.target.value);
        }}
        type="text"
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
