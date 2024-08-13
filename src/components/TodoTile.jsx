import "../css/todoTile.css"
import {useState} from "react";

export function TodoTile({title, completed}) {
  const [isCompleted, setIsCompleted] = useState(completed);

  function checkboxClicked() {
    setIsCompleted(!isCompleted);
  }

  return (
      <div className="todoTile">
        <p className="todoTitle">{title}</p>
        <input type="checkbox" checked={isCompleted} onChange={checkboxClicked}/>
      </div>
  );
}