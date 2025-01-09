const appState = {
  projects: {},
};

function removeProjectFromAppState(id) {
  console.log(`removing project: ${id}`);
  delete appState.projects[id];
}

export { appState, removeProjectFromAppState };
