import { useState } from "react";
import "./App.css";
import InputEndButton from "./components/InputEndButton";
import TodoEl from "./components/TodoEl";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    if (text.trim() === "") return;

    const newTodo = {
      id: Math.random(),
      done: false,
      text: text,
      decoration: null,
    };

    setTodos((prev) => [...prev, newTodo]);
  }

  function handleChangeCheckbox(id) {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
            decoration: todo.done ? "" : "decoration",
          };
        } else {
          return todo;
        }
      });
    });
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <InputEndButton addTodo={addTodo} />

      {todos.map((todo) => (
        <TodoEl
          key={todo.id}
          todoItem={todo}
          changeDone={handleChangeCheckbox}
          deleteTodo={deleteTodo}
          decoration={todo.decoration}
        />
      ))}
    </div>
  );
}

export default App;

// function handleChangeCheckbox(id) {
//   setTodos((todos) =>
//     todos.map((todo) =>
//       todo.id === id ? { ...todo, done: !todo.done } : todo,
//     ),
//   );
// }

// function handleChangeCheckbox(id) {
//   console.log(todos);

//   setTodos((todos) => {
//     return todos.map((todo) => {
//       return { ...todo, done: !todo.done };
//     });
//   });
// }
