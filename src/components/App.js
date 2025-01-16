import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS); // State for tasks
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for category filter

  // Filter tasks based on selected category
  const filteredTasks = tasks.filter((task) =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  );

  // Add a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Delete a task
  const handleDeleteTask = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
