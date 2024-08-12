import "../css/newTodoPanel.css"
import "../css/buttons.css"

export function NewTodoPanel() {
  return (
    <div className="newTodoPanel">
      <textarea className="newTodoTextArea" spellCheck="false" maxLength="48" placeholder="Go shopping today..."/>
      <button className="primary">Save</button>
    </div>
  );
}