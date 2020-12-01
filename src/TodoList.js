import React,{ Component} from 'react';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';


class TodoList extends Component {
  
  constructor(){
    super()
    var list = []
    // Check if TODO_LIST variable exists in local memory
    if(localStorage.getItem("TODO_LIST") !== null)
    {
      //Load TODO list from memory to local var 
      list = JSON.parse(localStorage.getItem('TODO_LIST'))
    }
    this.state={
      TODO_LIST:list
    }
    this.addTodo = this.addTodo.bind(this)
    this.done = this.done.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)

  }

  // Add new Todo
  addTodo(Todo){
    this.setState({
      TODO_LIST: [
        ...this.state.TODO_LIST,
        Todo
      ]
    },()=>{localStorage.setItem("TODO_LIST", JSON.stringify(this.state.TODO_LIST))})
    
  }
  
  // Mark a Todo as finished 
  done(index){
    this.setState({
      TODO_LIST: this.state.TODO_LIST.map((Todo,i) =>{
        if(i===index){
          Todo.done = !Todo.done
        }
        return Todo
      })
    },()=>{localStorage.setItem("TODO_LIST", JSON.stringify(this.state.TODO_LIST))})
  }

  // Delete A todo
  deleteTodo(index){
    this.setState({
      TODO_LIST: this.state.TODO_LIST.filter((Todo,i) => i !== index)
    },()=>{localStorage.setItem("TODO_LIST", JSON.stringify(this.state.TODO_LIST))})
  }


  render(){
    return (
      <div className="h-screen overflow-hidden flex items-center justify-center bg-teal-lightest">
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
              <TodoAdd addTodo={this.addTodo}/>
              <div>
                {
                  this.state.TODO_LIST.map((Todo,index) =>(
                    <TodoItem key={index}  index={index} Todo={Todo} done={this.done} deleteTodo={this.deleteTodo}/>
                  ))
                }
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
