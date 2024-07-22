import React, {useState} from 'react'
import styles from "../app/page.module.css"
const Todo = ({todo, index, deleteTodo}) => {
    return (
        <>
        <div className={StyleSheet.list}>
            <h3 className='Titulo3'>{todo}<button className={styles.btn_delete} onClick={()=>deleteTodo(index)}>X</button></h3>
            
        </div>
        </>
    )
}
export default Todo