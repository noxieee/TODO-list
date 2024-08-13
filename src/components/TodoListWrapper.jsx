import "../css/todoListWrapper.css"
import {useState} from "react";
import {NewTodoPanel} from "./NewTodoPanel";
import {Header} from "./Header";
import {TodoList} from "./TodoList";
import {TODOS} from "./Todos"

export function TodoListWrapper() {
  const [showCompleted, setShowCompleted] = useState(false);

  return (
      <div className="todoListWrapper">
        <Header onShowCompletedChange={setShowCompleted}/>
        <TodoList todos={TODOS} showCompleted={showCompleted}/>
        <NewTodoPanel/>
      </div>
  );
}