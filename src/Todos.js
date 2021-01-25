import React, { useState } from "react";    // useState hook
import './Tasks.css';                       // Created a CSS file to handle the function component vs Class
import './App.css';                         
import {DatePicker, Space} from 'antd';     // component from antd  (npm install 'antd')
import {Tooltip} from 'antd';               // component from antd
import 'antd/dist/antd.css';                // component from antd

function Todo({ onChange, todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}  // If to do item iscompleted this puts a line through the text and the date //
      >
        <div> 
          <Tooltip placement="topLeft" title="Enter Due Date">  
            <DatePicker onChange={onChange} />
          </Tooltip>
        </div>
        {todo.text}
  
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>

      </div>
    );
  }
  
  function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");    
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);      
      setValue("");         
    };
  
    return (
      <form onSubmit={handleSubmit}>                
        <Tooltip title="Enter a new task here">   
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        </Tooltip>
      </form>
    );
  }
  
  function Tasks() {
    const [allTodos, setallTodos] = useState([
      {
        text: "Take out the garbage",
        isCompleted: false
      },
      {
        text: "Make Dinner",
        isCompleted: false
      },
      {
        text: "Read a Book",
        isCompleted: false
      }
    ]);
  
    const [todos, setTodos] = useState([
      {
        text: "Take out the garbage",
        isCompleted: false
      },
      {
        text: "Make Dinner",
        isCompleted: false
      },
      {
        text: "Read a Book",
        isCompleted: false
      }
    ]);