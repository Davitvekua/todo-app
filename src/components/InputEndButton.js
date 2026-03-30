import { useRef } from "react";
import "../App.css";

function InputEndButton({ addTodo }) {
  const inputRef = useRef();

  function handleClick() {
    const value = inputRef.current.value;
    addTodo(value);
    inputRef.current.value = ""; // Input leeren
  }

  return (
    <div className="input-button">
      <input className="main-input" ref={inputRef} />

      <button className="add-button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default InputEndButton;
