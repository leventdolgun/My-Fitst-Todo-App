//import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

const Todo = ({task, deleteTodo, editTodo}) => {
  
  return (
    <div className="flex items-center justify-between px-3 py-4 mb-1 text-white bg-gray-600 rounded-md cursor-pointer ">
      <p className="font-primary">{task.task} </p>
      <div className="flex items-center gap-x-4">
         <AiFillEdit className="text-xl" onClick={() => editTodo(task.id)}/>
        <BsFillTrashFill className="text-xl" onClick={() => deleteTodo(task.id)} /> 
      </div>
    </div>
  );
};

export default Todo;

// import React from "react";
// import { AiFillEdit } from "react-icons/ai";
// import { BsFillTrash } from "react-icons/bs";

// const Todo = ({ task, onEdit, onDelete }) => {
//   return (
//     <div className="flex items-center justify-between px-3 py-4 mb-1 text-white rounded-md cursor-pointer bg-violet-800">
//       <p className="font-primary">{task.task}</p>
//       <div className="flex items-center gap-x-4">
//         <AiFillEdit
//           className="text-xl cursor-pointer"
//           onClick={() => onEdit(task.id)}
//           aria-label="Edit Task"
//         />
//         <BsFillTrash
//           className="text-xl cursor-pointer"
//           onClick={() => onDelete(task.id)}
//           aria-label="Delete Task"
//         />
//       </div>
//     </div>
//   );
// };

// export default Todo;
