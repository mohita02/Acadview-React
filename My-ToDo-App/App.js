import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, item: 'Play Badminton' },
      {id: 2, item: 'Evaluate Assignments' }
    ]
  }

  deleteTodo = (id) => {
    //console.log(id);
    let todos = this.state.todos.filter( todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  addTodo = (item) => {
    console.log(item);
    item.id = Math.random();

    let todos = [...this.state.todos, item]
    this.setState({
      todos:todos
    })
  }
  componentDidMount(){
    console.log('component mounted');
  }
  componentDidUpdate(prevProps , prevState){
    console.log('component updated');
    console.log(prevProps);

  }
  render() {
    return (
      <div className="App container">
      <h3 className="center purple-text">MY TODO'S</h3>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
//=> does auto-binding for the context that is it is a kind of function having different syntax