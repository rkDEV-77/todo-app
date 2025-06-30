import TodoItem from "./TodoItem";

const TodoList = ({ todoItems, setTodoItems }) => {
  const todoLength = todoItems.length;
  // console.log(todoLength);

  let completedTasks = todoItems.filter(
    (item) => item.completed === true
  ).length;
  let remainingTasks = todoItems.filter(
    (item) => item.completed === false
  ).length;

  // console.log(completedTasks, remainingTasks);

  return (
    // listing all toDo list cards using map
    <div className="w-screen flex justify-center items-center flex-wrap gap-y-5 py-5">
      {/* total length of toDo items if not length show Empty item */}
      {todoLength > 0 ? (
        <div className="flex justify-center items-center gap-3 font-bold text-md p-1">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-700">
            Total Tasks in toDo:
          </p>
          <span
            className="bg-cyan-300 text-gray-500 flex justify-center items-center text-xl md:text-2xl 
           px-[6px] py-[3px] sm:px-[10px] sm:py-[7px] md:px-[15px] md:py-[12px]
            rounded-full  border-cyan-700 hover:bg-pink-500 hover:text-cyan-300 transition delay-150"
          >
            {todoLength}
          </span>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-3 ">
          {" "}
          <p className="text-xl sm:text-3xl md:text-5xl font-bold text-pink-700">
            Empty ToDo List
          </p>
          <img
            src="./src/assets/images/empty.png"
            alt="empty-list-icon"
            width="30px"
            height="30px"
            className=" w-11 h-11 sm:w-21 sm:h-21 md:w-37 md:h-37"
          />
        </div>
      )}

      {
        // Completed and Remaining list tasks
        <div className=" w-[97%] text-[13px] sm:text-[21px] flex justify-around items-center gap-1 font-bold p-1">
          <span className="text-green-200 bg-pink-500 p-3 rounded-md hover:text-cyan-700">
            Completed Tasks-{" "}
            <span className="text-cyan-300 text-xl md:text-2xl  hover:text-cyan-700">
              {completedTasks}
            </span>
          </span>{" "}
          <span className="text-green-200 bg-pink-500 p-3 rounded-md hover:text-cyan-700">
            Remaining Tasks-{" "}
            <span className="text-green-300 text-xl md:text-2xl  hover:text-cyan-700 ">
              {remainingTasks}
            </span>
          </span>{" "}
        </div>
      }

      {todoItems &&
        todoItems.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              setTodoItems={setTodoItems}
              todoItems={todoItems}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
