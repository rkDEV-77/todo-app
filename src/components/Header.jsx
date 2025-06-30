const Header = ({ todoItems }) => {
 

  return (
    // toDo list Heading
    <div className=" header w-screen h-[77px] md:h-[97px] flex justify-center items-center gap-2  p-1 fixed top-0 z-11 ">
      <h1 className=" font-bold text-3xl sm:text-4xl md:text-5xl text-center text-cyan-500">
        TODO APP
      </h1>
      <img
        src="./src/assets/images/list.png"
        alt="todo-icon"
        width="30px"
        height="30px"
        className="m-1 mt-3 w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13"
      />

      {/* <sup className=" ml-17 mb-3 bg-cyan-400  px-[11px] py-[17px]  rounded-full border-2">{todoLength}</sup> */}
    </div>
  );
};

export default Header;
