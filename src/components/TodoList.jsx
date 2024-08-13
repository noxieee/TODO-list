import "../css/todoList.css"
import "../css/typography.css"
import {TodoTile} from "./TodoTile";
import {CompletedTitle} from "./CompletedTitle";

export function TodoList({todos, showCompleted, updateTodos}) {
  const rows = [];
  let completedExists = false;
  let lastCompleted = false;

  if(todos.length === 0 || todos[0].completed) {
    rows.push(<p key="noPendingTodoText" className="subtleText">Everything done!</p>);
  }

  if(showCompleted && todos.length === 0) {
    rows.push(<CompletedTitle key="completedTitle" completedExists={completedExists}/>);
  }

  for(const todo of todos) {
    completedExists = todo.completed;

    if(!showCompleted && todo.completed) {
      break;
    }

    if(lastCompleted !== todo.completed) {
      rows.push(<CompletedTitle key="completedTitle" completedExists={completedExists}/>);
    }

    rows.push(
        <TodoTile
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            todos={todos}
            updateTodos={updateTodos}
        />
    );

    if(todos[todos.length - 1] === todo && !todo.completed && showCompleted) {
      rows.push(<CompletedTitle key="completedTitle" completedExists={completedExists}/>);
    }

    lastCompleted = todo.completed;
  }

  return (
      <div className="todoList">
        {rows}
      </div>
  );
}