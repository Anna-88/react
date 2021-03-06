import { useState } from "react";
import ToDoButton from "./UX/button/TodoButton";


function AddnewTodo ({ addTodo, generatorId }){
    const [todo, setTodo] = useState({
        name: '',
        releaseDate: ''
      });

    const addNewTodos = (event) => {
        event.preventDefault();
        console.log(todo);

    const newTodo = {
            ...todo,
            id: generatorId()
        }

     addTodo(newTodo);   
     };  


    return (
        <form>
        <input 
          className='enterAddSongs'
          type="text" 
          value={todo.name}
          placeholder="name"
          onChange={event => setTodo({...todo, name: event.target.value})}
        />
        <input 
          className='enterAddSongs'
          type="text" 
          value={todo.releaseDate} 
          placeholder=" Set dedline"
          onChange={event => setTodo({...todo, releaseDate: event.target.value})}
          />
        <ToDoButton type="submit" onClick ={addNewTodos}>Add New Song</ToDoButton>
      </form>
    );
}

export default AddnewTodo