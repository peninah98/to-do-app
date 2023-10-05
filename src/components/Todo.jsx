import styles from '../style.module.css'
import { useState } from 'react'

const Todo = ( {todoItem,todoList,setTodoList}) =>{

    const deleteTodo =() =>{
        setTodoList(todoList.filter((item)=>item.id !== todoItem.id))
    }
    const [isCompleted, setIsCompleted] = useState(false)

    const handleCheckboxChange = () => {
        setIsCompleted(!isCompleted)
    }
    
    return (
        <div className={styles.toDoItem}>

            <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheckboxChange}/>
            <h3 className={styles.toDoName} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{todoItem.name}</h3>
            <button onClick={deleteTodo} className={styles.deleteButton}>🚮</button>
        </div>
    )
}

export default Todo