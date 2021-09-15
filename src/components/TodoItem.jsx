import ToDoButton from "./UX/button/TodoButton";

function TodoItem ({ todo, deleteTodo }){
    return (
        <div className="todo_list">
            <strong>{todo.id} : {todo.name}</strong>
            <p>releaseDate: {todo.releaseDate}</p>
            <p>{todo.author}</p>
            <ToDoButton onClick={() => deleteTodo(todo.id)}>Delete</ToDoButton>
        </div>
    );
};


export default TodoItem;