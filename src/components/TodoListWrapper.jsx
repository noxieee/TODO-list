import "../css/todoListWrapper.css"
import {NewTodoPanel} from "./NewTodoPanel";
import {Header} from "./Header";
import {TodoList} from "./TodoList";
import {TODOS} from "./Todos"

export function TodoListWrapper() {
  return (
      <div className="todoListWrapper">
        <Header/>
        <TodoList todos={TODOS} showCompleted={true}/>
        <NewTodoPanel/>
      </div>
  );
}