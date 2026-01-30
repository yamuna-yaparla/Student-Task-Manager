import { useState , useEffect } from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
});

  const [newTask , setNewTask]=useState("");
  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const[filter,setFilter]=useState("all");

  const filteredTasks = tasks.filter(task=>{
    if(filter=== "completed") return task.completed;
    if(filter=== "pending") return !task.completed;
    if(filter==="all") return tasks;
  });
  
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

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
        <div style={{marginBottom:"12px"}} >
          <strong>Total:</strong>{totalTasks}|{" "}
          <strong>Completed:</strong>{completedTasks}|{" "}
          <strong>Pending:</strong>{pendingTasks}
        </div>
        <input type= "text" 
         className="task-input"
         placeholder="Enter new task"
         value={newTask}
         onChange={(e)=>setNewTask(e.target.value)} />

        <button onClick={addTask}>Add Task</button>
        <div style={{ marginBottom:"12px"}}>
          <button onClick={()=>setFilter("all")}>All</button>{" "}
          <button onClick={()=>setFilter("completed")}>Completed</button>{" "}
          <button onClick={()=>setFilter("pending")}>Pending</button>
        </div>
        <ul>
        {filteredTasks.map((tasks, index) => (
         <TaskItem
          key={index}
          task={tasks}
          onDelete={() => deleteTask(index)}
          onToggle={() => toggleTask(index)}
          />
        ))}
        </ul>

      
    </div>
  );
}

export default TaskList;