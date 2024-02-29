import React, {useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import './App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="App">
      <div className="sed">
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todo={todo}
          setTodo={setTodo}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList todo={todo} setTodo={setTodo} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
