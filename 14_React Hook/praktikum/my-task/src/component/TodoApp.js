import { useState } from "react";
import "./Todo.css";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "mengerjakan exercise",
      completed: true,
    },
    {
      id: 2,
      title: "mengerjakan assignment",
      completed: false,
    },
  ]);

  const addTodo = (newData) => {
    const newTodos = [...todos, newData];
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const allTodo = [...todos];
    const newTodos = allTodo.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (todo == false) {
      return alert("Data Tidak Boleh Kosong");
    } else {
      const newData = {
        id: todos.length + 1,
        title: todo,
        completed: false,
      };
      addTodo(newData);
      setTodo(" ");
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("enter");
      onSubmitHandle(e);
    }
  };

  const completedChange = (index) => {
    const allTodo = [...todos];
    allTodo[index].completed = !allTodo[index].completed;
    setTodos([...todos]);

    console.log(todos);
  };

  console.log(todos);
  return (
    <div className="main">
      <div className="title-todos">todos</div>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Add todo..."
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyPress={onKeyPress}
        />
        <button onClick={onSubmitHandle}>Submit</button>
      </div>

      {todos.map((todo, index) => (
        <div key={index} className="todos">
          <div className="result">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => completedChange(index)}
            />
            {todo.completed ? (
              <div className="title correct">{todo.title}</div>
            ) : (
              <div className="title ">{todo.title}</div>
            )}
          </div>
          <div className="btn-delete" onClick={() => deleteTodo(todo.id)}>
            <span>Delete</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoApp;
