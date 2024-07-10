import TodoCard from "./TodoCard";

export default function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            key={todoIndex}
            index={todoIndex}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
