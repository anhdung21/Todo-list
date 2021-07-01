import React, { useState } from 'react';
import { firestore } from '../firebase';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const InputAdd = () => {
  const [todoName, setTodoName] = useState('');
  const [deadline, setDeadline] = useState('');

  //add to do task to db
  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log(todoName);
    firestore.collection('todo-list').add({
      name: todoName,
      deadline: deadline,
      isDone: false,
    });
    setTodoName('');
    setDeadline('');
  };

  return (
    <div style={{ width: '100%', marginBottom: '20px' }}>
      <form
        onSubmit={handleAddTodo}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <TextField
          style={{ width: '50%' }}
          id='outlined-basic'
          label='Task todo'
          variant='outlined'
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          required
        />

        <TextField
          id='date'
          label='Deadline'
          type='date'
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button type='submit' variant='contained' color='primary'>
          Add
        </Button>
      </form>
    </div>
  );
};

export default InputAdd;
