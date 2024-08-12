import "../css/header.css"

export function Header() {
  return (
      <div className="header">
        <div className="top">
          <h1>TODO List</h1>
          <div className="completedCheckbox">
            <p>Show completed</p>
            <input type="checkbox"/>
          </div>
        </div>
        <hr className="divider"></hr>
      </div>
  );
}