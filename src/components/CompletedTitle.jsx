import "../css/completedTitle.css"
import "../css/typography.css"

export function CompletedTitle({completedExists}) {
  const rows = [<h2>Completed</h2>];

  if(!completedExists) {
    rows.push(<p className="subtleText">Nothing there...</p>)
  }

  return (
      <div className="completedTitle">
        {rows}
      </div>
  );
}