import React from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Button } from '@material-ui/core'
import { db } from '../firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        // <div>
        //     <li>{props.text}</li>
        // </div>

        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={props.text.todoo} secondary='⏰'/>
            </ListItem>
            <DeleteForeverIcon onClick={(e) => {db.collection('todos').doc(props.text.id).delete()}} />
        </List>
    )
}

export default Todo
