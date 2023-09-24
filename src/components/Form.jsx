import styles from '../style.module.css'
const Form =({todo,setTodo, todoList,setTodoList})=>{
    
    const handleChange = (event) =>{
        setTodo(event.target.value)
        console.log(event.target.value)
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        setTodoList([...todoList,{name:todo,id:}])
        console.log(todoList)
    }

    return (
        <div className={styles.toDoForm}>
            <form onSubmit={handleSubmit}>
                <input value={todo}  onChange={handleChange} className={styles.toDoInput} type="text" placeholder="add to do item"/>
                <button type='submit' className={styles.toDoButton}>Add</button>
            </form>
        </div>
    )
}

export default Form