import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoList = ({ todo, setTodo, editTodo, setEditTodo }) => {
  const handleEdit = (id) => {
    const findTodo = todo.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const handleInputChange = (event, id) => {
    const updatedTodos = todo.map((t) =>
      t.id === id ? { ...t, title: event.target.value } : t
    );
    setTodo(updatedTodos);
  };

  return (
    
    <div>
      {todo.map((todo) => (
        <li className="showForm" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="todo-inputs"
            onChange={(event) => handleInputChange(event, todo.id)}
          />
          <div className="">
          <button className="edit-icon" onClick={() => handleEdit(todo.id)}>
            <EditIcon />
          </button>
          <button className="delete-icon" onClick={() => handleDelete(todo.id)}>
            <DeleteIcon />
          </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
