import React from "react";
// Import Components
import Todo from "./Todo";
const List = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-cointainer">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            text={todo.text}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
