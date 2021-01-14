import React from 'react';

const Todo = props => {
  return (
    <div className="todoContainer">
      <span
        className={props.finished ? "complete" : "incomplete"}
        onClick={() => props.markFinished(props.id)}>
        {props.task}
      </span>
    </div>
  )
}

export default Todo;