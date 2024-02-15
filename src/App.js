import React from "react";
import CreateTodo from "./components/create-todo";
import Header from "./components/header";
import TodoList from "./components/todo-list";

function App() {
  return (
   <React.Fragment>
    <Header />
    <CreateTodo />
    <TodoList/>
   </React.Fragment>

  );
}

export default App;
