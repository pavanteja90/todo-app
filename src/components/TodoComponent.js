import React from 'react';
import './TodoComponent.css';
import { makeStyles } from '../../node_modules/@material-ui/core/styles';
import DeleteOutlinedIcon from '../../node_modules/@material-ui/icons/DeleteOutlined';

class TodoComponent extends React.Component {
    // constructor() {
    //     super();
    // }
    render() {
        const classes = makeStyles(theme => ({
            root: {
                color: theme.palette.text.primary,
            },
            icon: {
                margin: theme.spacing(1),
                fontSize: 32,
            },
        }));;
        var content;
        if(this.props.item.isCompleted) {
            content = <p className="inline no-margin padding-left"><del><i>{this.props.item.content}</i></del></p>
        }
        else {
            content = <p className="inline no-margin padding-left">{this.props.item.content}</p>
        }
        return (
            <div className="table">
                <div className="table-cell">
                    <div className="block card padding">
                        <input className="inline vertical-middle padding" type="checkbox" checked={this.props.item.isCompleted} onChange={() => this.props.handleChange(this.props.item.id)} />
                        {content}
                        <button onClick={() => this.props.deleteTodo(this.props.item.id)} className="pull-right no-padding btn btn-sm btn-outline-danger"><DeleteOutlinedIcon className={classes.icon} /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoComponent;