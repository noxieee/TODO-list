import "../css/todoTile.css"

export function TodoTile({title, completed}) {
  return (
      <div className="todoTile">
        <p className="todoTitle">{title}</p>
        <input type="checkbox" checked={completed}/>
      </div>
  );
}