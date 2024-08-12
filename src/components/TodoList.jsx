import "../css/todoList.css"

import {TodoTile} from "./TodoTile";
import {CompletedTitle} from "./CompletedTitle";

export function TodoList() {
  return (
      <div className="todoList">
        <TodoTile title="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
        <TodoTile title="1"/>
        <TodoTile title="2"/>
        <CompletedTitle/>
        <TodoTile title="3"/>
        <TodoTile title="4"/>
        <TodoTile title="4"/>
        <TodoTile title="4"/>
        <TodoTile title="4"/>
        <TodoTile title="4"/>
        <TodoTile title="4"/>
        <TodoTile title="4"/>
        <TodoTile title="4"/>
        <TodoTile title="4"/>
      </div>
  );
}