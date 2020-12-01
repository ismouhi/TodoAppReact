import React,{Component} from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props)
        this.done = this.done.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)

    }

    done(){
        this.props.done(this.props.index)
    }
    deleteTodo(){
        this.props.deleteTodo(this.props.index)
    }

    render(){
        return (
            <div className="flex mb-4 items-center">
                <p className={"w-full " + (this.props.Todo.done ? "line-through text-green" : "text-grey-darkest")}>{this.props.Todo.title}</p>
                <button 
                    onClick={this.done} 
                    className={"flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white "+(this.props.Todo.done ? "text-grey border-grey hover:bg-grey" : "text-green border-green hover:bg-green")}>
                        {(this.props.Todo.done ? "Not Done" : "Done")}
                </button>
                <button 
                    onClick={this.deleteTodo} 
                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                        Remove
                </button>
            </div>
        );
    }
}

export default TodoItem;
