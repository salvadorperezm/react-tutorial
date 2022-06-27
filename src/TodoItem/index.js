import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="item">
      <p className="itemText">{props.text}</p>
      <div className="buttonsContainer">
        <button
          className="itemButton complete"
          onClick={props.onComplete}
          type="button"
        >
          C
        </button>
        <button
          className="itemButton delete"
          onClick={props.onDelete}
          type="button"
        >
          X
        </button>
      </div>
    </li>
  );
}

export { TodoItem };
