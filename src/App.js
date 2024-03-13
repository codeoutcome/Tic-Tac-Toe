import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }
  return (
    <button onClick={handleClick} className="square">{value}</button>
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
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
