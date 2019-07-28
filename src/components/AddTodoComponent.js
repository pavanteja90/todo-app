import React from 'react';
import './TodoComponent.css';
import { makeStyles } from '../../node_modules/@material-ui/core/styles';
import SaveIcon from '../../node_modules/@material-ui/icons/Save';

class AddTodoComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            content: ''
        }
        this.contentChanged = this.contentChanged.bind(this);
    }
    contentChanged() {
        this.setState( () => {
            var resp = document.getElementById('content').value;
            return {
                content: resp
            }
        });
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
        return (
            <div className="table">
                <div className="table-cell">
                    <div className="block card padding">
                        <input id="content" type="text" onChange={this.contentChanged} />
                        <button onClick={() => this.props.saveTodo(this.state.content)} className="pull-right no-padding btn btn-sm btn-outline-primary"><SaveIcon className={classes.icon} /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTodoComponent;