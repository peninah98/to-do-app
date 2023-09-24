import styles from '../style.module.css'

const Todo = ( {todoItem}) =>{
    return (
        <div className={styles.toDoItem}>
            <h3 className={styles.toDoName} >{todoItem}</h3>
            <button className={styles.deleteButton}>Done</button>
        </div>
    )
}

export default Todo