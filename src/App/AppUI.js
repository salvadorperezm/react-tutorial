import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <div className="hero-container">
      <React.Fragment>
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <div className="addTaskInput">
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <CreateTodoButton />
        </div>
        <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </React.Fragment>
    </div>
  );
}

export { AppUI };
