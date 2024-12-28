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
