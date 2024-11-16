import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const TaskList = ({ tasks, toggleTaskCompletion, onDeleteTask }) => (
  <ul className="task-list">
    <AnimatePresence>
      {tasks.map((task) => (
        <motion.li
          key={task.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span>{task.title}</span>
          <span className="priority">{task.priority}</span>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </motion.li>
      ))}
    </AnimatePresence>
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.func.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
