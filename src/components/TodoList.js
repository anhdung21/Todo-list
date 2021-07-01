import React, { useState } from 'react';
import { firestore } from '../firebase';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ props }) => {
  const [checked, setChecked] = useState(props.isDone);

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
    firestore.collection('todo-list').doc(props.id).update({
      isDone: !props.isDone,
    });
  };

  const deleteTodo = () => {
    console.log('delete');
    firestore.collection('todo-list').doc(props.id).delete();
  };

  return (
    <div style={{ display: 'flex' }}>
      <Checkbox
        checked={checked}
        onChange={handleChangeCheckbox}
        color='primary'
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <ListItem style={{ width: '70%' }}>
        <ListItemText
          primary={props.name}
          secondary={props.deadline}
          style={{ overflowX: 'auto' }}
        />
      </ListItem>
      <IconButton aria-label='delete' onClick={deleteTodo}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TodoList;
