import React, { useState } from "react";
//import React, { useState } from 'react';  // useState'i import ettik

const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState(""); // useState'i doğru şekilde kullandık
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(value);
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form
      className="flex items-center justify-center max-w-sm mx-auto mb-4 font-primary"
      action=""
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-4 mb-7">
        <input
          type="text"
          className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white rounded placeholder:text-gray-300 font-primary"
          placeholder="Update Task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        {/* <div className="flex items-baseline"> */}
        {/* //bg-gray-700 border-none rounded cursor-pointer */}
        <button
          type="submit"
          className="flex items-center justify-center w-full py-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          update Task
        </button>
      </div>
      {/* </div> */}
    </form>
  );
};

export default Edit;

// import React, { useState } from 'react';  // useState'i import ettik

// const Form = () => {

//   const [value, setValue] = useState('');  // useState'i doğru şekilde kullandık

//   return (
//     <form className="w-full mb-4 font-primary" action="">
//         <input
//           type="text"
//           className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300'
//           placeholder='What task do you have today?'
//           value={value}  // value'yu state'e bağladık
//           onChange={(e) => setValue(e.target.value)}  // onChange ile state'i güncelledik
//         />
//         <button className='p-2 ml-2 text-white bg-gray-700 border-none rounded cursor-pointer' >
//           Add Task (Ekle Button)?
//         </button>
//     </form>
//   )
// }

// export default Form;
