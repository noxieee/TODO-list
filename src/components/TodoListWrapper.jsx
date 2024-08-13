import "../css/todoListWrapper.css"
import {useState} from "react";
import {NewTodoPanel} from "./NewTodoPanel";
import {Header} from "./Header";
import {TodoList} from "./TodoList";

export function TodoListWrapper() {
  const [showCompleted, setShowCompleted] = useState(false);
  const [todos, setTodoChanges] = useState(TODOS);

  return (
      <div className="todoListWrapper">
        <Header showCompleted={showCompleted} onShowCompletedChange={setShowCompleted}/>
        <TodoList todos={todos} showCompleted={showCompleted} updateTodos={setTodoChanges}/>
        <NewTodoPanel/>
      </div>
  );
}

const TODOS = [
  {id: 1, title: "aaa", completed: false},
  {id: 2, title: "bbb", completed: false},
  {id: 3, title: "ccc", completed: true},
  {id: 4, title: "ddd", completed: true}
];