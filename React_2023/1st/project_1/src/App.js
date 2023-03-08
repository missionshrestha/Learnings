import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  //here we have used 2 state variables todoList to store array of task & newTask to store String of input
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  //updates newTask with whatever value typed in input
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // updates todoList array
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,//sets id to 1 if todoList array is empty else increases the id from previous
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);//updates todoList with all previous todoList + new task added
  };

  //deletes task based on passed id
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  //completed task are matched & assigned true to make them green
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>

      <div className="list">
        {/*  mapping items of todoList array to Task components*/}
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;