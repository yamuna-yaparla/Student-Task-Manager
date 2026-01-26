import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Practice DSA",
    "Build Projects"
  ]);

  const [newTask , setNewTask]=useState("");

  const addTask = ()=>{
     if (newTask.trim() === "") return;
     
     setTasks([...tasks, newTask]);
     setNewTask("")
  };

  return (
    <div>
        <input type= "text" 
         placeholder="Enter new task"
         value={newTask}
         onChange={(e)=>setNewTask(e.target.value)} />

         <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;