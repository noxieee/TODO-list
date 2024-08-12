import "../css/todoListWrapper.css"
import {NewTodoPanel} from "./NewTodoPanel";
import {Header} from "./Header";
import {TodoList} from "./TodoList";

export function TodoListWrapper() {
  return (
      <div className="todoListWrapper">
        <Header/>
        <TodoList/>
        <NewTodoPanel/>
      </div>
  );
}