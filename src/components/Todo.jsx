import styles from '../style.module.css'

const Todo = ( {todoItem,todoList,setTodoList}) =>{

    const deleteTodo =() =>{
        setTodoList(todoList.filter((item)=>item.id !== todoItem.id)
)
    }
    return (
        <div className={styles.toDoItem}>
            <h3 className={styles.toDoName} >{todoItem.name}</h3>
            <button onClick={deleteTodo} className={styles.deleteButton}>Done</button>
        </div>
    )
}

export default Todo