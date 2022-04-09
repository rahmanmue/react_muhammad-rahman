import TodoApp from "./component/TodoApp";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./store/store";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./store/TodosSlice";

const store = configureStore({
  reducer: {
    // nama state yang disimpan di store
    todo: todoReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <TodoApp />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
