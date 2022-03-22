import { Component } from "react";
import "./Todo.css";
// import "../App.css";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      data: [
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
      ],
    };
  }

  addTodo(newData) {
    this.setState({
      data: [...this.state.data, newData],
    });
  }

  deleteTodo(id) {
    const todos = [...this.state.data];
    // if (id - 1 == 0) {
    //   console.log(true);
    //   console.log(todos);
    //   console.log("idparams", id);
    //   console.log("id-1", id - 1);
    // } else {
    //   todos.splice(id - 1, 1);
    //   console.log(todos);
    //   console.log("idparams", id);
    //   console.log("id-1", id - 1);
    // }
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      data: [...newTodos],
    });
  }

  onChangeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandle = (e) => {
    e.preventDefault();
    const newData = {
      id: this.state.data.length + 1,
      title: this.state.todo,
      completed: false,
    };

    // console.log(newData);
    this.addTodo(newData);
    this.setState({
      todo: "",
    });
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("enter");
      this.onSubmitHandle(e);
    }
  };

  completedChange(id) {
    // const completedData = this.state.data.filter(item => item.id == id);
    // console.log(completedData.map(x => x.completed));
    const todos = [...this.state.data];
    todos[id - 1].completed = !todos[id - 1].completed;
    this.setState({
      data: [...todos],
    });

    console.log(todos);
  }

  render() {
    const data = this.state.data;
    const todo = this.state.todo;

    // const arr = [1, 2, 3, 4, 5, 6, 7];
    // arr.splice(4, 1);
    // console.log(arr);
    console.log(data);
    return (
      <div className="main">
        <div className="title-todos">todos</div>

        <div className="todo-input">
          <input
            type="text"
            placeholder="Add todo..."
            name="todo"
            value={this.state.todo}
            onChange={this.onChangeHandle}
            onKeyPress={this.onKeyPress}
          />
          <button onClick={this.onSubmitHandle}>Submit</button>
        </div>

        {data.map((item) => (
          <div key={item.id} className="todos">
            <div className="result">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => this.completedChange(item.id)}
              />
              {item.completed ? (
                <div className="title correct">{item.title}</div>
              ) : (
                <div className="title ">{item.title}</div>
              )}
            </div>
            <div
              className="btn-delete"
              onClick={() => this.deleteTodo(item.id)}
            >
              <span>Delete</span>
            </div>
          </div>
        ))}
      </div>
      // <div>
      //   <h1>Todos</h1>
      //   <div>
      //     <input
      //       type="text"
      //       name="todo"
      //       value={this.state.todo}
      //       onChange={this.onChangeHandle}
      //       onKeyPress={this.onKeyPress}
      //     />
      //     <button onClick={this.onSubmitHandle}>submit</button>
      //   </div>
      //   <div>
      //     {/* {data.map(item => (
      //               <p key={item.id} onClick={() => this.completedChange(item.id)} style={{textDecoration: item.completed ?'line-through' : ''}} >{item.title}</p>

      //           ))} */}
      //     {data.map((item) => (
      //       <div key={item.id}>
      //         <input
      //           type="checkbox"
      //           checked={item.completed}
      //           onChange={() => this.completedChange(item.id)}
      //         />
      //         <span
      //           style={{ textDecoration: item.completed ? "line-through" : "" }}
      //         >
      //           {item.title}{" "}
      //         </span>
      //         <button onClick={() => this.deleteTodo(item.id)}>Delete</button>
      //       </div>
      //     ))}
      //   </div>
      // </div>
    );
  }
}

export default Todos;
