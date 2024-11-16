import PropTypes from "prop-types";

const TaskSearch = ({ searchQuery, setSearchQuery }) => (
  <div className="task-search">
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
);
TaskSearch.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default TaskSearch;
