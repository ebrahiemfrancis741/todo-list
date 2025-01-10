const appState = {
  projects: {},
  tasks: {},
  isEditingProject: false,
  // the id of the project we want to edit
  editProjectID: null,
  // reference to the project object we want to edit or is being edited
  editProjectRef: null,
  // the id of the project that we want to add a task to
  projectAddTaskId: null,
};

function removeProjectFromAppState(id) {
  delete appState.projects[id];
}

function saveEditedProjectToAppState(id, project) {
  appState.projects[id] = project;
}

// taskId: full taskId(projectid + "#" + taskid)
function saveTaskToAppState(taskId, task) {
  appState.tasks[taskId] = task;
  console.log(appState);
}

export {
  appState,
  removeProjectFromAppState,
  saveEditedProjectToAppState,
  saveTaskToAppState,
};
