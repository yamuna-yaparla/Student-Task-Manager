function TaskItem({task,onDelete,onToggle}){
    return(
        <li className="task-item">
            <input 
                type="checkbox"
                className="task-checkbox"
                checked={task.completed}
                onChange={onToggle}
            />
            <span
                onClick={onToggle} 
                style={{
                    cursor:"pointer",
                    textdecoration:task.completed?"line-through":"none",
                    color:task.completed?"gray":"black"
                    }}
            >
            {task.text}
            </span>
            <button 
                onClick={onDelete} 
                style={{ marginLeft: "10px" }}
            >
            Delete
            </button>
        </li>
        
    );
}
export default TaskItem;