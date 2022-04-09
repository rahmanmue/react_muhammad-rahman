import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
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
];

export const todosSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialValue,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    completedChange: (state, action) => {
      state.todos[action.payload].completed =
        !state.todos[action.payload].completed;
      state.todos = [...state.todos];
    },
  },
});

export const { addTodo, deleteTodo, completedChange } = todosSlice.actions;
export default todosSlice.reducer;
