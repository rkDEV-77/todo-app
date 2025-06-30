// import { useState } from "react";
// import "../App.css";

// // D:\INTERNSHALA\PROJECTS\React Projects\ToDo-List-App\todo\src\App.css
// // todo\src\App.css

// const TodoItem = ({ todo, setTodoItems, todoItems }) => {
//   const [isChecked, setIsChecked] = useState(todo.completed);

//   // Edit states
//    const [isEditing, setIsEditing] = useState(false);
//    const [newText, setNewText] = useState(todo.text);

//   function deleteTodo(id) {
//     // console.log(id);

//     const deletedTodo = todoItems.filter((item) => item.id !== id);
//     setTodoItems(deletedTodo);
//   }

//   function handleTask(id) {
//     // console.log('handle onchange');

//     // console.log('completed', id);

//     const item = todoItems.find((item) => item.id === id);
//     // console.log("find", item);
//     if (item) {
//       item.completed = !item.completed;
//       setTodoItems(todoItems);
//       setIsChecked(item.completed);
//       localStorage.setItem("items", JSON.stringify(todoItems));

//       // console.log(todoItems);
//       // setTodoItems(todoItems);
//     }

//     //  console.log(todoItems);
//     //  console.log(item);
//   }

//   // handle Edit

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   function newDate(id){
//     const today = new Date(id);
//     return today.toLocaleDateString();
//   }

//   // const completed = todo.completed;
//   // console.log(completed);
//   // const completedBg = todo.completed
//   //  hover:bg-[#A1E3F9]
//   // bg-gray-300
//   //  "       completeBg notCompleteBg w-screen  flex justify-between items-center p-5 rounded-md  shadow-md  hover:scale-103 cursor-pointer"

//   return (
//     <div className={` w-screen  flex justify-between items-start p-3 sm:p-5 rounded-md  shadow-md  hover:scale-103 cursor-pointer  hover:bg-[#A1E3F9]     ${todo.completed ? 'bg-gray-200 hover:bg-pink-200 ' : 'bg-gray-300 '} `} >
//       <div className="flex justify-start items-start gap-3 p-1  sm:gap-7 sm:p-2 ">
//         <input
//           className=" w-[17px] h-[17px] accent-cyan-700 cursor-pointer shadow-md md:w-[27px] md:h-[27px] shrink-0 "
//           type="checkbox"
//           checked={isChecked}
//           value={todo.completed}
//           onChange={() => handleTask(todo.id)}
//         />

//         {todo.completed ? (
//           <div>
//           <p className="custom-strike text-center flex-1 text-md sm:text-lg font-medium line-through text-[#F05A7E] md:text-2xl p-2 sm:p-3 ">
//             {todo.text}
//           </p>
//           <span className="text-xs text-gray-400">Created on: {newDate(todo.id)}</span>
//           </div>
//         ) : (
//           <div>
//           <p className=" text-center font-medium text-md sm:text-lg text-gray-700  md:text-2xl p-2 sm:p-3">
//             {todo.text}
//           </p>
//           <span className="text-xs text-gray-400">Created on: {newDate(todo.id)}</span>
//           </div>
//         )}
//       </div>
// {/* ///////// */}

//         {/* delete and edit button */}

//         <div className="  flex flex-col gap-3 sm:mr-3 mt-2 md:flex-row md:gap-3 ">
//         <button
//         className=" bg-cyan-300 px-2 py-1  rounded-md text-sm font-medium text-gray-700 shadow-md hover:bg-gray-300 hover:text-blue-500  md:text-xl cursor-pointer"
//         onClick={() => editTodo(todo.id)}
//       >
//         Edit
//       </button>

//       <button
//         className="bg-pink-300 px-2 py-1  rounded-md text-sm font-medium text-gray-700 shadow-md hover:bg-cyan-300 hover:text-red-500  md:text-xl cursor-pointer"
//         onClick={() => deleteTodo(todo.id)}
//       >
//         Delete
//       </button>
//       </div>
//     </div>
//   );
// };

// export default TodoItem;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import "../App.css";

const TodoItem = ({ todo, setTodoItems, todoItems }) => {
  // toggle checked state
  const [isChecked, setIsChecked] = useState(todo.completed);

  // Edit states
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  // Delete function
  function deleteTodo(id) {
    const deletedTodo = todoItems.filter((item) => item.id !== id);
    setTodoItems(deletedTodo);
  }

  // Toggle complete
  function handleTask(id) {
    if (isEditing) {
      return alert("Finish Editing !");
    }
    const updatedItems = todoItems.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setIsChecked(!isChecked);
  }

  // Start editing when isEdit is true
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Save edited
  const handleSave = () => {
    if (newText.trim() === "") return;
    const updatedTodos = todoItems.map((item) =>
      item.id === todo.id ? { ...item, text: newText } : item
    );
    setTodoItems(updatedTodos);
    setIsEditing(false);
    localStorage.setItem("items", JSON.stringify(updatedTodos));
  };

  // cancel edit
  const handleCancel = () => {
    setIsEditing(false);
    setNewText(todo.text);
  };

  // Date formatter
  function newDate(id) {
    const today = new Date(id);
    return today.toLocaleDateString();
  }

  return (
    // todo item card
    <div
      className={`w-[87%] md:w-[91%] flex justify-between items-start transition delay-200 p-3 sm:p-5 rounded-md shadow-md hover:scale-103 cursor-pointer
         ${
           todo.completed
             ? "bg-gray-200 hover:bg-pink-200"
             : "bg-gray-300 hover:bg-[#A1E3F9]"
         }`}
    >
      {/* checkBox */}
      <div className="flex justify-start items-start gap-3 p-1 sm:gap-7 sm:p-2">
        <input
          className="w-[17px] h-[17px] accent-cyan-700 cursor-pointer shadow-md md:w-[27px] md:h-[27px] shrink-0"
          type="checkbox"
          checked={isChecked}
          onChange={() => handleTask(todo.id)}
        />
        {/* text area and buttons to edit list */}
        {isEditing ? (
          <div className=" flex flex-col gap-1">
            <textarea
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className=" w-55 h-27 sm:w-120 md:w-145 lg:w-205 xl:w-280  border-3 border-gray-400 p-1 rounded text-md md:text-xl  [@media(min-width:460px)_and_(max-width:640px)]:w-90"
            />
            <div className="flex gap-2 mt-2 ml-3">
              <button
                className="bg-green-300 px-2 py-1 rounded-md text-sm font-medium text-gray-700 shadow-md hover:bg-green-400 md:text-md"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-yellow-200 px-2 py-1 rounded-md text-sm font-medium text-gray-700 shadow-md hover:bg-yellow-300 md:text-md"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p
              className={`text-start flex-1 font-semibold text-sm sm:text-lg md:text-xl p-2 sm:p-3 ${
                todo.completed
                  ? "custom-line-through text-pink-500"
                  : "text-gray-700"
              }`}
            >
              {todo.text}
            </p>
            {/* date in bottom of list card */}
            <span className="text-xs text-gray-400 ml-3">
              Created on: {newDate(todo.id)}
            </span>
          </div>
        )}
      </div>

      {/* Delete and Edit buttons */}
      {!isEditing && (
        <div className="flex flex-col gap-3 mr-1 mt-2 sm:flex-row md:gap-5 ">
          <button
            className="bg-cyan-500 px-2 py-1 cursor-pointer rounded-md text-sm sm:text-lg transition delay-150  font-medium text-white shadow-md hover:bg-cyan-700 hover:text-cyan-300 md:text-xl"
            onClick={handleEdit}
          >
            <i className="fa-solid fa-pen p-1 md:p-2" ></i>
            </button>

          <button
            className="bg-pink-500 px-3 py-1 cursor-pointer  rounded-md text-sm sm:text-lg transition delay-150 font-medium text-white shadow-md hover:bg-pink-700 hover:text-pink-300 md:text-xl"
            onClick={() => deleteTodo(todo.id)}
          >
           <i className="fa-solid fa-trash p-1 md:p-2" ></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
