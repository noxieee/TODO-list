import "../css/todoTile.css"
import {useState} from "react";

export function TodoTile({id, title, completed, todos, updateTodos}) {
  const todoID = id;
  const [isCompleted, setIsCompleted] = useState(completed);
  let checkboxDisabled = false;

  function handleCompletedChange() {
    if(isCompleted === completed) {
      setIsCompleted(!isCompleted);
    }

    setTimeout(() => {
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

      modifiedTodos.sort((a, b) => a.completed - b.completed);
      updateTodos(modifiedTodos);

    }, 500);
  }

  return (
      <div className={`todoTile ${isCompleted ? "completed" : ""}`}>
        <p className="todoTitle">{title}</p>
        <input type="checkbox" checked={isCompleted} onChange={handleCompletedChange}/>
      </div>
  );
}