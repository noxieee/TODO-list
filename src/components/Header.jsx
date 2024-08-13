import "../css/header.css"

export function Header({showCompleted, onShowCompletedChange}) {
  function handleShowCompletedChange() {
    onShowCompletedChange(!showCompleted);
  }

  console.log("header")

  return (
      <div className="header">
        <div className="top">
          <h1 className="title">TODO List</h1>
          <div className="completedCheckbox">
            <p className="label">Show completed</p>
            <input
                type="checkbox"
                checked={showCompleted}
                onChange={handleShowCompletedChange}
            />
          </div>
        </div>
        <hr className="divider"></hr>
      </div>
  );
}