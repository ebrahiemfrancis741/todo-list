import { appState } from "./appState";
import { generateProjectId } from "./idGenerator";

// handles localStorage functionality

function saveProjectToStorage(project) {
  const projectId = generateProjectId();
  const stringObj = JSON.stringify(project);
  localStorage.setItem(projectId, stringObj);
}

// gets all projects from localStorage and return as an array
function getProjectsFromStorage() {
  const projects = [];
  let projectObj;
  let id;
  for (let i = 0; i < localStorage.length; i++) {
    id = localStorage.key(i);
    if (id.startsWith("project-")) {
      projectObj = JSON.parse(localStorage.getItem(id));
      projects.push(projectObj);
    }
  }
  return projects;
}

// this effectively syncs what projects are in localStorage to appState.projects
function loadProjectsIntoAppState() {
  appState.projects = getProjectsFromStorage();
}

export { saveProjectToStorage, loadProjectsIntoAppState };
