import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const onClickButton = (message) => alert(message);
  return (
    <button
      className="button"
      onClick={() => onClickButton("you can add a task")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
