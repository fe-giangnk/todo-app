import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'

function Todo() {

    const [todo, setTodo] = useState([
        {id: 2, title: 'Task completed', status: true},
        {id: 1, title: 'Add some task', status: false},
    ])

    const [task, setTask] = useState('')
    const [updateTask, setUpdateTask] = useState('')

    //Add task
    const addTask = () => {
        if(task) {
            const newId = (todo.length + 1)
            const newTask = {id: newId, title: task, status: false}
            setTodo([...todo, newTask])
            setTask('')
        }
    }
    //Delete task
    const deleteTask = (id) => {
        const newList = todo.filter(element => element.id !== id)
        setTodo(newList)
    }
    //Mark done task
    const markDone = (id) => {
        const newList = todo.map(element => {
            if(element.id === id) {
                return {...element, status: !element.status}
            }
            return element
        })
        setTodo(newList)
    }
    //Edit task (update)
    const editTask = () => {

    }



    return (
        <div className='todo-wrap'>
            <h1>Todo list!</h1>
            <div className='todo-form'>
                <input 
                    value={task} 
                    placeholder='What will you do to day?'
                    onChange= {(e)=> setTask(e.target.value)}
                />
                <button onClick={addTask}>Add task</button>
            </div>
            <div className='todo-form'>
                <input placeholder='What will you do to day?'></input>
                <button>Update task</button>
                <button>Cancel</button>
            </div>
            {todo && todo.length ? '' : 'No tasks...'}
            {todo && todo
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map((element, index) => {
                    return (
                        <div className='todo-task' key={element.id}>
                            <p className={element.status ? 'done' : ''}>{element.title}</p>
                            <div className='task-control'>
                                <span onClick={()=>markDone(element.id)}><FontAwesomeIcon icon={faCircleCheck}/></span>
                                {element.status ? '' : (
                                    <span onClick={editTask}><FontAwesomeIcon icon={faPen}/></span>
                                )}
                                <span onClick={()=>deleteTask(element.id)}><FontAwesomeIcon icon={faTrashCan}/></span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Todo;