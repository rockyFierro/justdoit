import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }
  addTask = (event, task) => {
    event.preventDefault();
    console.log("adding task:", task);
    const addTask = {
      task: task,
      id: Date.now(),
      finished: false
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, addTask]
    })
  }

  markFinished = (taskID) => {
    console.log("marking finished:", taskID);
    this.setState({
      ...this.state,
      todos: this.state.todos.map(
        (task) => {
          if (task.id === taskID) {
            return {
              ...task,
              finished: !task.finished
            };
          } else {
            return task;
          }
        }
      )
    })
  }

  clearFinished = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((task) => !task.finished)
    });
  };
  render() {
    return (
      <div>
        <h2>Get it done!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList tasks={this.state.todos}
          clearFinished={this.clearFinished}
          markFinished={this.markFinished} />
      </div>
    );
  }
}

export default App;
