//import ClassCounter from "./components/classCounter";
//import Counter from "./components/counter";
import './style/App.css'
import { inicialtodos } from './components/SongsList';
import TodoList from './components/TodoList';
import { useState } from 'react';
import AddnewTodo from './components/AddnewTodo';


function App() {
  const [todos, setTodos] = useState(inicialtodos);

  const generatorId = () => {
    if(!todos.length){
      return 1
    }
    return  todos[todos.length - 1].id + 1
  }; 

  const addTodo = (todo) => {
   setTodos([...todos, todo])
  };
  const deleteTodo = (id) => {
     setTodos(todos.filter(todo => todo.id !== id))
  }
  
   return (
    <div className="App">
     {/* <Counter/>,
      <ClassCounter/> */}
      <AddnewTodo addTodo={addTodo} generatorId={generatorId}/>
    <TodoList todos={todos} deleteTodo={deleteTodo}/>
    
    </div>
  );
};

export default App;
