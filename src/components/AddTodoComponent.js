import React from 'react';
import './TodoComponent.css';
import { makeStyles } from '../../node_modules/@material-ui/core/styles';
import SaveIcon from '../../node_modules/@material-ui/icons/Save';
import DeleteOutlinedIcon from '../../node_modules/@material-ui/icons/DeleteOutlined';

class AddTodoComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            content: ''
        }
        this.contentChanged = this.contentChanged.bind(this);
        this.deleteContent = this.deleteContent.bind(this);
    }
    contentChanged() {
        this.setState(() => {
            var resp = document.getElementById('content').value;
            return {
                content: resp
            }
        });
    }
    deleteContent() {
        this.setState(() => {
            return {
                content: ''
            }
        });
        this.props.deleteAddTodo();
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
                        <div className="row">
                            <div className="col-sm-8">
                                <input id="content" type="text" onChange={this.contentChanged} />
                            </div>
                            <div className="col-sm-4 buttonsDiv">
                                <button onClick={() => this.props.saveTodo(this.state.content)} className="no-padding btn btn-sm btn-outline-primary"><SaveIcon className={classes.icon} /></button>
                                <button onClick={this.deleteContent} className=" no-padding btn btn-sm btn-outline-danger"><DeleteOutlinedIcon className={classes.icon} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTodoComponent;