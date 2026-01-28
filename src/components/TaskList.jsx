import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([
   {text: "Learn React" , completed:false},
    {text:"Practice DSA",completed:false},
    {text:"Build Projects",completed:false}
  ]);

  const [newTask , setNewTask]=useState("");

  const addTask = ()=>{
     if (newTask.trim() === "") return;
     
     setTasks([...tasks, {text:newTask, completed:false}]);
     setNewTask("")
  };
  const deleteTask = (indexToDelete) => {
  const updatedTasks = tasks.filter(
    (_, index) => index !== indexToDelete
  );
  setTasks(updatedTasks);
  };
  const toggleTask = (indexToToggle) => {
  setTasks(
    tasks.map((task, index) =>
      index === indexToToggle
        ? { ...task, completed: !task.completed }
        : task
    )
  );
  };


  return (
    <div>
        <input type= "text" 
         className="task-input"
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
          onToggle={() => toggleTask(index)}
          />
        ))}
        </ul>

      
    </div>
  );
}

export default TaskList;