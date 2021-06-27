import React from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core'

function Todo(props) {
    return (
        // <div>
        //     <li>{props.text}</li>
        // </div>

        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={props.text} secondary='⏰'/>
            </ListItem>
        </List>
    )
}

export default Todo
