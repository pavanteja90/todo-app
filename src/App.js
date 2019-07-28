import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import TodoComponent from './components/TodoComponent';
import AddTodoComponent from './components/AddTodoComponent';
import Dataset from './data';

import { makeStyles } from '../node_modules/@material-ui/core/styles';
import AddIcon from '../node_modules/@material-ui/icons/Add';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: Dataset,
            addTodo: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.findMaxID = this.findMaxID.bind(this);
        this.AddTodo = this.AddTodo.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
    }

    handleChange(id) {
        this.setState( prevState => {
            var changedTodos = prevState.data.map(item => {
                if(item.id === id) {
                    item.isCompleted = !item.isCompleted;
                }
                return item;
            });
            return {
                data: changedTodos,
                addTodo: prevState.addTodo
            }
        })
    }

    deleteTodo(id) {
        this.setState( prevState => {
            var changedTodos = prevState.data.map (item => {
                if(item.id === id) {
                    item.isDeleted = true;
                }
                return item;
            });
            return {
                data: changedTodos,
                addTodo: prevState.addTodo
            }
        })
    }

    saveTodo(content) {
        let maxId = this.findMaxID();
        this.setState(prevState => {
            let newToDo = {
                id: maxId+1,
                content: content,
                isCompleted: false,
                isDeleted: false
            }
            let changedTodos = prevState.data;
            changedTodos.push(newToDo);
            return {
                data: changedTodos,
                addTodo: false
            }
        })
    }

    AddTodo() {
        this.setState(prevState => {
            var changedState = true
            return {
                data: prevState.data,
                addTodo: changedState
            }
        });
    }

    findMaxID() {
        var maxId = 0;
        this.state.data.map(item => {
            if(item.id > maxId)
                maxId = item.id;
            return item;
        });
        return maxId;
    }

    render() {
        const classes = makeStyles(theme => ({
            root: {
                color: theme.palette.text.primary,
            },
            icon: {
                margin: theme.spacing(1),
                fontSize: 32,
            },
        }));
        var todoComponents = this.state.data.map( item => {
            if(!item.isDeleted) {
                return <TodoComponent key={item.id} handleChange={this.handleChange} deleteTodo={this.deleteTodo} item={item} />
            }
            return <div key='dummy'></div>;
        });
        var addTDC
        if(this.state.addTodo) {
            addTDC = <AddTodoComponent key='1' saveTodo={this.saveTodo}/>
        }
        return(
            <div>
                <NavigationBar />
                <br/>
                <div className="container container-fluid">
                    <div id="todo">
                        {todoComponents}
                        {addTDC}
                        <button onClick={this.AddTodo} className="btn btn-outline-success"><AddIcon className={classes.icon} />&nbsp;Add Todo</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
