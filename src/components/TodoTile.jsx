import "../css/App.css"

export function TodoTile({text}) {
  return (
      <div className="todoTile">
        {text}
        <input type="checkbox"/>
      </div>
  );
}