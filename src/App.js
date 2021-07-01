import { useState, useEffect } from 'react';
import { firestore } from './firebase';

import List from '@material-ui/core/List';

import InputAdd from './components/InputAdd';
import TodoList from './components/TodoList';
import './css/app.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodo();
  }, []); //run on first lunch

  //load data real time tu firebase luu vao state
  const getTodo = () => {
    firestore.collection('todo-list').onSnapshot((snapshot) => {
      console.log(snapshot);
      setTodoList(
        snapshot.docs.map((doc) => ({
          //tra ra mot array co chua nhieu object
          id: doc.id,
          name: doc.data().name,
          deadline: doc.data().deadline,
          isDone: doc.data().isDone,
        }))
      );
    });
  };

  return (
    <div className='ui-container'>
      <div className='ui-form'>
        <h1>To do list</h1>
        <InputAdd className='input' />
        <div className='todo-list'>
          <List>
            {todoList.map((todo) => (
              <TodoList key={todo.id} props={todo} />
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}

export default App;
