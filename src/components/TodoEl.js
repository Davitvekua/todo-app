import "../App.css";

function TodoEl({ todoItem, changeDone, deleteTodo, decoration }) {
  function handleClickDelete() {
    deleteTodo(todoItem.id);
  }

  function handleClickLabel() {
    changeDone(todoItem.id);
  }

  return (
    <div className="todo-el">
      <input
        type="checkbox"
        id={todoItem.id}
        checked={todoItem.done}
        onChange={handleClickLabel}
        className="checkbox"
      ></input>
      <label htmlFor={todoItem.id} className={`todo-text ${decoration}`}>
        {todoItem.text}
      </label>
      <button className="delete-button" onClick={handleClickDelete}>
        Löschen
      </button>
    </div>
  );
}

export default TodoEl;
