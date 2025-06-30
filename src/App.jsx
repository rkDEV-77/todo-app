import { useState } from "react";
import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

// fetching data from localStorage before loading the component
let items = JSON.parse(localStorage.getItem("items")) || [];

function App() {
  // state to store the main app data {localStorage fetched data and updated data}
  const [todoItems, setTodoItems] = useState(items);
  // console.log(todoItems);

  // updating updataed data
  localStorage.setItem("items", JSON.stringify(todoItems));
  // console.log(todoItems);

  return (
    <>
      <Header todoItems={todoItems}/>
      <TodoInput todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
    </>
  );
}

export default App;
