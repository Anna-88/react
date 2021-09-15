import classes from './TodoButton.module.css'

function ToDoButton ({children, ...props}){
    return(
        <button {...props} className={classes.ToDoButton}>{children}</button>
    );
}

export default ToDoButton