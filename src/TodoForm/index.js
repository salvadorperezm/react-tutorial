import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu tarea</label>
      <textarea id="textArea" value={newTodoValue} onChange={onChange} />
      <div>
        <button className="formButton delete" onClick={onCancel} type="button">
          Cerrar
        </button>
        <button className="formButton add" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
