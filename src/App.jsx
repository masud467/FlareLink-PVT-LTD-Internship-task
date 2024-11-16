import  { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskSearch from "./components/TaskSearch";
import TaskSorting from "./components/TaskSorting";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortingCriteria, setSortingCriteria] = useState("title");

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Persist tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortingCriteria === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortingCriteria === "completed") {
      return a.completed - b.completed;
    } else if (sortingCriteria === "priority") {
      const priorityOrder = { Low: 1, Medium: 2, High: 3 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    return 0;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <TaskSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TaskSorting setSortingCriteria={setSortingCriteria} />
      <TaskList
        tasks={sortedTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
