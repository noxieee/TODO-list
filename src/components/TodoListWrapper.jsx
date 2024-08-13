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
        <NewTodoPanel updateTodos={setTodoChanges}/>
      </div>
  );
}

const TODOS = [
  {id: 0, title: "Saving todos inside a json?", completed: false},
  {id: 1, title: "Button for deleting all completed todos?", completed: false},
  {id: 2, title: "Implement adding new todos", completed: false},
  {id: 3, title: "Create a static version of the app", completed: true},
  {id: 4, title: "Make the app somewhat responsive", completed: true},
  {id: 5, title: "Implement conditional list rendering", completed: true},
  {id: 6, title: "Make the tile wrap around long text. This is the long text. As you can see, the tile changes height.", completed: true}
];