import React from 'react';
import './css/Todo.css';

const Todo = props => {
        return (
            <p
            className={ props.finished ? "complete" : "incomplete"}  
            onClick={()=>props.markFinished(props.id)}
            >
                {console.log("src>comp>todo>",props)}
                {props.task}
            </p>
        )
}

export default Todo;