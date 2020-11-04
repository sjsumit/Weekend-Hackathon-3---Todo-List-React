import "./../styles/App.css";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };
  const handleSaveTask = (index) => {
    if (editText === "") return;
    let tasksCopy = [...tasks];
    tasksCopy[index].name = editText;
    tasksCopy[index].edit = false;
    setTasks(tasksCopy);
    setEditText("");
  };
  const handleAdd = () => {
    if (text === "") return;
    let tasksCopy = [...tasks];
    tasksCopy.push({ name: text, edit: false });
    setTasks(tasksCopy);
    setText("");
  };
  const handleEdit = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy[index].edit = true;
    setTasks(tasksCopy);
  };
  const handleDelete = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };

  return (
    <div id="main">
      <textarea rows="3" id="task" onChange={handleChange} value={text} />
      <button id="btn" onClick={handleAdd} disabled={text.length == 0}>
        Add
      </button>

      {tasks.map((task, index) => (
        <div key={index} className="list">
          <div id={index}>{task.name}</div>

          {!task.edit ? (
            <>
              <button className="edit" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </>
          ) : (
            <>
              <textarea
                onChange={handleEditChange}
                className="editTask"
                value={editText}
              />
              <button
                className="saveTask"
                onClick={() => handleSaveTask(index)}
                disabled={editText.length == 0}
              >
                Save Task
              </button>
            </>
          )}
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
