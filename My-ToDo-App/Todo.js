import React from 'react';

const Todo = ({ todos, deleteTodo }) => {                                                                 // passing function to,call deletetdodd() means funcion chla do jab isme id pass ogi
   const todoList = todos.length ? todos.map( todo => {
       return ( <div className='collection-item' key = {todo.id}>
       <span  onClick={() => {deleteTodo(todo.id)}}>{todo.item}</span>         

       </div>
       )
    }) : (
       <p> Yay! I don't have anythingg to do! </p>
   )                                                       //agr kuch h toh render something else not
   return (
       <div className='todos collection'>
       { todoList }
       </div>
   )
}

export default Todo;
//class component uses this,functional component does not