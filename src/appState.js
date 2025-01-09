const appState = {
  projects: {},
  isEditingProject: false,
  editProjectID: null,
  editProjectRef: null,
};

function removeProjectFromAppState(id) {
  console.log(`removing project: ${id}`);
  delete appState.projects[id];
}

function saveEditedProjectToAppState(id, project) {
  console.log(
    `about to save edited project to app state with id:${id} and project.title: ${project.title}`
  );
  appState.projects[id] = project;
  // console.log("Saving edited project");
  // console.log(appState.projects);
}

export { appState, removeProjectFromAppState, saveEditedProjectToAppState };
