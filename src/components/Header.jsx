import "../css/header.css"

export function Header() {
  return (
      <div className="header">
        <div className="top">
          <h1 className="title">TODO List</h1>
          <div className="completedCheckbox">
            <p className="label">Show completed</p>
            <input type="checkbox"/>
          </div>
        </div>
        <hr className="divider"></hr>
      </div>
  );
}