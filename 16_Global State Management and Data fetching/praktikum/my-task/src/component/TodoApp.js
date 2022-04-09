import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, addTodo, completedChange } from "../store/TodosSlice";
import "./Todo.css";

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [todo, setTodo] = useState("");

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
      dispatch(addTodo(newData));
      setTodo(" ");
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("enter");
      onSubmitHandle(e);
    }
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
          {console.log(todo.completed)}
          <div className="result">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(completedChange(index))}
            />
            {todo.completed ? (
              <div className="title correct">{todo.title}</div>
            ) : (
              <div className="title ">{todo.title}</div>
            )}
          </div>
          <div
            className="btn-delete"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <span>Delete</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoApp;
