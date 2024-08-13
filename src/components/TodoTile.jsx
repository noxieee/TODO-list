import "../css/todoTile.css"
import {useState} from "react";

export function TodoTile({id, title, completed, todos, updateTodos}) {
  const todoID = id;

  function handleCompletedChange() {
    const modifiedTodos = todos.map(todo => {
      if(todoID !== todo.id) {
        return todo;
      }
      else {
        return {
          ...todo, completed: !completed
        }
      }
    });

    updateTodos(modifiedTodos);
  }

  return (
      <div className="todoTile">
        <p className="todoTitle">{title}</p>
        <input type="checkbox" checked={completed} onChange={handleCompletedChange}/>
      </div>
  );
}