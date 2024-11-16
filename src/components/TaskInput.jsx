import  { useState } from "react";
import PropTypes from "prop-types";

const TaskInput = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleAdd = () => {
    if (title.trim()) {
      onAddTask({ id: Date.now(), title, completed: false, priority });
      setTitle("");
      setPriority("Low");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

TaskInput.propTypes = {
  onAddTask: PropTypes.func.isRequired
};


export default TaskInput;
