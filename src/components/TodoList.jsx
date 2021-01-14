import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            <button onClick={props.clearFinished}>Clear Finished</button>
            {console.log("src>comp>todolist>",props)}
            {props.tasks.map(
                todo => {
                   return <Todo key={todo.id} id={todo.id} finished={todo.finished} task={todo.task} markFinished={props.markFinished}/>
                }
            )}
        </div>
    )
}

export default TodoList;