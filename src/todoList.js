// groups related tasks together
function createProject(title) {
  return {
    title,
  };
}

// represents a single task
function createTask(
  title = "New Task",
  description = "undefined",
  dueDate = "undefined",
  priority = "low"
) {
  return {
    title,
    description,
    dueDate,
    priority,
    complete: false,
  };
}

export { createProject, createTask };
