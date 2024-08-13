import "../css/newTodoPanel.css"
import "../css/buttons.css"
import {useState} from "react";

export function NewTodoPanel({todos, updateTodos}) {
  const [areaText, setAreaText] = useState("");

  function handleSaveClicked() {
    if(areaText.length) {
      updateTodos([{id: todos.length, title: areaText, completed: false}, ...todos]);
      setAreaText("");
    }
  }

  return (
    <div className="newTodoPanel">
      <textarea
          className="newTodoTextArea"
          spellCheck="false" maxLength="128"
          placeholder="Go shopping today..."
          value={areaText}
          onChange={e => setAreaText(e.target.value)}
      />
      <button className="primary" onClick={handleSaveClicked}>Save</button>
    </div>
  );
}