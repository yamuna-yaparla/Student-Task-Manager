import { useState } from "react";
import TaskItem from "./TaskItem";

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
  const deleteTask = (indexToDelete) => {
  const updatedTasks = tasks.filter(
    (_, index) => index !== indexToDelete
  );
  setTasks(updatedTasks);
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
         <TaskItem
         key={index}
          task={task}
          onDelete={() => deleteTask(index)}
        />
        ))}
      </ul>
      
    </div>
  );
}

export default TaskList;