import React,{Component} from 'react';

class TodoAdd extends Component {
    constructor(props){
        super(props)
        this.state={
            title :""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        if (this.state.title !== "") {
            this.setState({
                title: ""
            });
            this.props.addTodo({title:this.state.title,done:false})
        }
    }
    render(){
        return (
            <div className="mb-4">
                <h1 className="text-grey-darkest">Todo List</h1>
                <div className="flex mt-4">
                    <input 
                        onChange={(event) => this.setState({title:event.target.value})} 
                        onKeyDown={(event) => (event.key === 'Enter') ? this.handleClick() : false} 
                        value={this.state.title} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" 
                        placeholder="Add Todo"
                    />
                    <button 
                        onClick={this.handleClick} 
                        className={"flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal " + (this.state.title ==="" ? "cursor-not-allowed" :"")}
                        >
                            Add
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoAdd;
