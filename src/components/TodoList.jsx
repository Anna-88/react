import TodoItem from "./TodoItem";

function TodoList ({todos, deleteTodo}){
    return(
        <div>
        {
       
        todos.length 
        ? <div> 
        {
            todos.map(todo => <TodoItem 
            todo={todo} 
            deleteTodo={deleteTodo} 
            key={todo.id}
            />)
        }
        </div>
        : <h2 style={{textAlign: 'center'}}>Add a song via the input form</h2>
      
        }
        </div>
    );
}

export default TodoList
