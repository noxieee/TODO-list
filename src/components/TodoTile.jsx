import "../css/todoTile.css"

export function TodoTile({title}) {
  return (
      <div className="todoTile">
        <p className="todoTitle">{title}</p>
        <input type="checkbox"/>
      </div>
  );
}