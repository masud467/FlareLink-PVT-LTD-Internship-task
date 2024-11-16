import PropTypes from "prop-types";

const TaskSorting = ({ setSortingCriteria }) => (
  <div className="task-sorting">
    <select onChange={(e) => setSortingCriteria(e.target.value)}>
      <option value="title">Sort by Title</option>
      <option value="completed">Sort by Completion</option>
      <option value="priority">Sort by Priority</option>
    </select>
  </div>
);
TaskSorting.propTypes = {
  setSortingCriteria: PropTypes.func.isRequired,
};

export default TaskSorting;
