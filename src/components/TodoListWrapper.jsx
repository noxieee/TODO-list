import "../css/App.css"
import {TodoTile} from "./TodoTile";

export function TodoListWrapper() {
  return (
      <div className="todoListWrapper">
        <h1>TODO List</h1>
        <hr className="divider"></hr>
        <div className="todoList">
          <TodoTile text="Title1"/>
          <TodoTile text="Title2"/>
          <TodoTile text="Title3"/>
          <TodoTile text="Title1"/>
          <TodoTile text="Title2"/>
          <TodoTile text="Title3"/>
          <TodoTile text="Title1"/>
          <TodoTile text="Title2"/>
          <TodoTile text="Title3"/>
          <TodoTile text="Title1"/>
          <TodoTile text="Title2"/>
          <TodoTile text="Title3"/>
          <TodoTile text="Title1"/>
          <TodoTile text="Title2"/>
          <TodoTile text="Title3"/>
        </div>
      </div>
  );
}