import "../css/newTodoPanel.css"
import "../css/buttons.css"

export function NewTodoPanel(updateTodos, lastID) {
  function handleSaveClicked() {

  }

  return (
    <div className="newTodoPanel">
      <textarea className="newTodoTextArea" spellCheck="false" maxLength="128" placeholder="Go shopping today..."/>
      <button className="primary" onChange={handleSaveClicked}>Save</button>
    </div>
  );
}