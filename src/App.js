import React, { useState, useRef } from 'react';
import TodoList from './TodoList.js';
import uuidv4 from 'uuid/v4';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState([
    // { id: 1, name: 'Create website', complete: false },
    // { id: 2, name: 'Register company', complete: false },
    // { id: 3, name: 'Define mission', complete: false },
    // { id: 4, name: 'Allocate funding', complete: false },
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name == '') {
      return setTodos((prevTodos) => {
        return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
      });
    }
    todoNameRef.current.value = null;
  };

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add todo</button>
      <button>Clear Todo</button>
      <p>0 left to do</p>
    </>
  );
}
