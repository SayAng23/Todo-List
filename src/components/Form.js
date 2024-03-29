import React, {useEffect} from 'react';
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, todo, setTodo, editTodo, setEditTodo}) => {
    const updateTodo = (title, id, completed) => {
      const newTodo = todo.map((todo) => 
        todo.id === id ? {title, id, completed} : todo
      );
      setTodo(newTodo);
      setEditTodo("");
    };
    useEffect(() => {
      if (editTodo) {
        setInput(editTodo.title);
      } else {
        setInput("");
      }
      }, [setInput, editTodo]);

    const onInputChange = (event) =>{
      setInput(event.target.value);
    };
    const onFormSubmit = (event) =>{
      event.preventDefault();
      if(!editTodo){
        setTodo([...todo, { id: uuidv4(), title: input, completed:false}]);
        setInput("");
      } else {
        updateTodo(input, editTodo.id, editTodo.completed);
      }
      
    };
  return (
    <form onSubmit={onFormSubmit}  className="TodoForm">
        <input type="text" placeholder="what todo.." className="todo-input" 
        value={input} required
        onChange={onInputChange}/>
        <button type="submit" className="todo-btn">
          {editTodo ? "OK" : "ADD"}
        </button>
    </form>
  )
}

export default Form