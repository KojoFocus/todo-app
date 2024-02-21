import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";

function CreateTodo() {
    const [todos, setTodos] = useLocalStorage ("TODO_KEY",[]);

    const saveTodos = () => {
        //save all todos
        setTodos([...todos, todo]);
        // wipe the input box
        setTodo("");
    }


    const [todo, setTodo] = useState("");

    // function saveTodo() {

    //     setTodos([...todos, todo]);
    // }

    // 
    return (
        <section className={styles.createTodoSection}>
            <input
            value = {todo}
                onKeyDown={event => event.key === "Enter" && saveTodos()}
                onChange={event => setTodo(event.target.value)}
                className={styles.createTodoInput}
                placeholder=" start typing..." />
            <button className={`btn ${styles.btn}`}
                onClick={() => saveTodos([...todos, todo])}   >Create</button>
        </section>
    )
}

export default CreateTodo;