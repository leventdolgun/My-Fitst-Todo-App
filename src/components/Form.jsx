import React, { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(value);
    createTodo(value);
    setValue("");
  };

  return (
    <form className="max-w-sm mx-auto font-primary" onSubmit={handleSubmit}>
      <div className="flex items-center justify-center max-w-sm grid-cols-3 gap-4 p-3 m-3 mx-auto border rounded-md border-lime-600 h-25 hover:border-slate-400">
        <h1 className="text-2xl font-bold text-center font-primary">
          My First Todo App
        </h1>
      </div>

      <div className="flex items-center gap-4 mb-7">
        <input
          type="text"
          className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white rounded placeholder:text-gray-300 font-primary"
          placeholder="What task do you have today?"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          type="submit"
          className="flex items-center justify-center w-full py-5 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 hover:border-slate-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-lime-600"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Form;
