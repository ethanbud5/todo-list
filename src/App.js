import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List"

class App extends Component {
  constructor(){
    super()
    this.state ={
      input:"",
      todoArray:[]
    }
    this.inputChange = this.inputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTask = this.removeTask.bind(this)
  }
  addTodo(e){
    e.preventDefault()
    this.setState({todoArray:[...this.state.todoArray,this.state.input]});
  }
  inputChange(e){
    let {name,value} = e.target;
    this.setState({[name]:value})
  }
  removeTask(task){
    let newArray = this.state.todoArray.filter(todo=>(todo!==task))
    this.setState({todoArray:newArray})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <form onSubmit={this.addTodo}>
          <input type="text"name="input" value={this.state.input} onChange={this.inputChange}/>
        </form>
        <List todoArray={this.state.todoArray}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default App;
