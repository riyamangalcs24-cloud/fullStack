import React, { useState } from 'react';
import './App.css'


const App = () => {
  const [todoList, setToDoList] = useState([]);

  const saveToDoList = (event) => {
    event.preventDefault();
    const toname = event.target.toname.value.trim();
    if (!toname) return;

    if (!todoList.includes(toname)) {
      setToDoList([...todoList, toname]);
    } else {
      alert("ToDo name already exists.....");
    }
    event.target.reset();
  };

  const deleteRow = (indexNumber) => {
    setToDoList(todoList.filter((_, i) => i !== indexNumber));
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" />
        <button>Save</button>
      </form>
      <div className="outerDiv">
        <ul>
          {todoList.map((value, index) => (
            <ToDoListItem
              key={index}
              value={value}
              indexNumber={index}
              onDelete={deleteRow}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

function ToDoListItem({ value, indexNumber, onDelete }) {
  return (
    <li>
      {indexNumber + 1}. {value}{" "}
      <span onClick={() => onDelete(indexNumber)}>&times;</span>
    </li>
  );
}

export default App;