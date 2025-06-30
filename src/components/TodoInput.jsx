import { useState } from "react";

const TodoInput = ({ todoItems, setTodoItems }) => {
  // console.log(todoItems);
  // add input state
  const [input, setInput] = useState("");

  // handle input functionality
  const handleAdd = () => {
    if (!input) {
      return alert("Please Enter ToDo Task!");
    }

    // generate date
    const newToDo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    // if input is not Empty
    const updatedTodo = [newToDo, ...todoItems];
    setTodoItems(updatedTodo);
    // console.log(updatedTodo);
    setInput("");
  };

  return (
    // input and buttons to add new List
    <div className="addTodo w-screen h-[87px] md:h-[121px] bg-cyan-200 flex justify-center items-center mt-[76px] md:mt-[96px] p-3  ">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-[57%] h-[55%] md:w-[70%] md:h-[55%]  bg-gray-300 text-lg p-3 shadow-md rounded-l-md"
        type="text"
        placeholder="Add ToDo List"
      />
      <button
        onClick={handleAdd}
        className=" w-[14%] h-[55%] md:w-[14%] md:h-[55%] transition delay-150 text-md md:text-xl p-1 text-gray-700  bg-blue-500  font-medium hover:bg-cyan-500 hover:text-white  shadow-md rounded-r-md cursor-pointer"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
