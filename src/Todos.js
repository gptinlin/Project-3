import React, { useState } from "react";    // useState hook
import './Todos.css';                       // Created a CSS file instead
import './App.css';                         
import {DatePicker, Space} from 'antd';     
import {Tooltip} from 'antd';               
import 'antd/dist/antd.css';                

function Todo({ onChange, todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}  // If to do item is completed this puts a line through the text and the date //
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
        <Tooltip title="Enter Your Task Here">   
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
    
    const addTodo = text => {
        const newTodos = [...todos, { text, isCompleted: false}];
        setTodos(newTodos);
        setallTodos(newTodos);
      };
    
      const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
        setallTodos(newTodos);
      };
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        setallTodos(newTodos);
      };
  
      const getCurrentDate = ()=>{
        var cDate = new Date().getDate();
        console.log(cDate)
      }
  
  
     function filterToDoDone () {
        const newTodos = allTodos.filter((todoItem) => todoItem.isCompleted === true)
        setTodos(newTodos);
      };
    
      function filterToDoPending () {
        const newTodos = allTodos.filter((todoItem) => todoItem.isCompleted === false)
        setTodos(newTodos);
      };
    
      function filterToDoAll () {
        setTodos(allTodos);
      };
  
      function Count () {
        const newToDos = [...todos]
        var totalTasks = newToDos.length;
        return (
          <p>{totalTasks} </p>
        );
      }
      function CountDone () {
        const newToDos = allTodos.filter((todoItem) => todoItem.isCompleted === true)
        var totalTasks = newToDos.length;
        return (
          <p>{totalTasks} </p>
        );
      }
      function CountPending () {
        const newToDos = allTodos.filter((todoItem) => todoItem.isCompleted === false)
        var totalTasks = newToDos.length;
        return (
          <p>{totalTasks} </p>
        );
      }
      function onChange(date, dateString) {
        return (
          <space direction="vertical">
          <DatePicker onChange={onChange} />
          </space>
        );
      }
    
      return (
        <div className="app">
          <div className="todo-list">
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
            <TodoForm addTodo={addTodo} />
          </div>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" onClick= {filterToDoAll}>All Tasks: < Count /> </button>
                <button type="button" className="btn btn-outline-primary" onClick= {filterToDoDone}>Completed Tasks: <CountDone /></button>
                <button type="button" className="btn btn-outline-primary" onClick= {filterToDoPending}>Pending Tasks: <CountPending /></button>
            </div>
           
        </div>
      );
    }
    
    export default Tasks;