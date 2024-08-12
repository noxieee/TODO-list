import "../css/todoList.css"
import "../css/typography.css"

import {TodoTile} from "./TodoTile";
import {CompletedTitle} from "./CompletedTitle";

export function TodoList() {
  return (
      <div className="todoList">
        <p className="subtleText">Nothing there...</p>
        <TodoTile title="aaaaaaaa"/>
        <TodoTile title="bbbbbbbb"/>
        <CompletedTitle/>
        <TodoTile title="cccccccc"/>
        <TodoTile title="dddddddd"/>
      </div>
  );
}