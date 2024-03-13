

function Square({value}) {
  return (
    <button className="square">{value}</button>
  );
}

/**
 * Renders a board with 9 buttons arranged in a 3x3 grid.
 * Each button represents a square on the board.
 * @returns {JSX.Element} The rendered board component.
 */
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </>
  );
}
