import "../css/todoList.css"
import "../css/typography.css"


import {TodoTile} from "./TodoTile";
import {CompletedTitle} from "./CompletedTitle";

export function TodoList({todos, showCompleted}) {
  todos.sort((a, b) => a.completed - b.completed);
  const rows = [];
  let completedExists = false;
  let lastCompleted = false;

  if(todos.length === 0 || todos[0].completed) {
    rows.push(<p className="subtleText">Nothing there...</p>);
  }

  if(showCompleted && todos.length === 0) {
    rows.push(<CompletedTitle completedExists={completedExists}/>);
  }

  for(const todo of todos) {
    completedExists = todo.completed;

    if(!showCompleted && todo.completed) {
      break;
    }

    if(lastCompleted !== todo.completed) {
      rows.push(<CompletedTitle completedExists={completedExists}/>);
    }

    rows.push(<TodoTile title={todo.title} completed={todo.completed}/>);

    if(todos[todos.length - 1] === todo && !todo.completed && showCompleted) {
      rows.push(<CompletedTitle completedExists={completedExists}/>);
    }

    lastCompleted = todo.completed;
  }



  return (
      <div className="todoList">
        {rows}
      </div>
  );
}