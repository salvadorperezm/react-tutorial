import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <div className="hero-container">
      <React.Fragment>
        <TodoCounter />
        <div className="addTaskInput">
          <TodoSearch />
          <CreateTodoButton setOpenModal={setOpenModal} />
        </div>
        <TodoList>
          {error && <p>Hubo un error...</p>}
          {loading && <p>La pagina esta cargando</p>}
          {!loading && !searchedTodos.length && <p>Crea tu primera tarea</p>}
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
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </React.Fragment>
    </div>
  );
}

export { AppUI };
