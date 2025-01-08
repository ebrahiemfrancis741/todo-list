// groups related tasks together
function createProject(title) {
  return {
    title
  };
}

// represents a single task
function createTask(
  title = "New Task",
  dueDate = "undefined",
  priority = "low",
  notes = "undefined"
) {
  return {
    title,
    dueDate,
    priority,
    notes,
    complete: false,
  };
}

export { createProject, createTask };
