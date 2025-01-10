// handles localStorage functionality
import { appState } from "./appState";
import { generateProjectId, generateTaskId } from "./idGenerator";

// json version of an object stored with its uuid in localStorage
function saveProjectToStorage(project) {
  const projectId = generateProjectId();
  const stringObj = JSON.stringify(project);
  localStorage.setItem(projectId, stringObj);
  return projectId;
}

function saveEditedProjectToStorage(id, project) {
  localStorage.setItem(id, JSON.stringify(project));
}

function saveProjectToAppState(id, project) {
  appState.projects[id] = project;
}

// gets all projects from localStorage and return as an array
function getProjectsFromStorage() {
  const projects = {};
  let projectObj;
  let id;
  for (let i = 0; i < localStorage.length; i++) {
    id = localStorage.key(i);
    if (id.startsWith("project-") && !(id.includes("task-"))) {
      projectObj = JSON.parse(localStorage.getItem(id));
      projects[id] = projectObj;
    }
  }
  return projects;
}

// this effectively syncs what projects are in localStorage to appState.projects
function loadProjectsIntoAppState() {
  appState.projects = getProjectsFromStorage();
}

function removeProjectFromLocalStorage(id) {
  localStorage.removeItem(id);
}

// tasks are stored with their associated projects id and their own id
// full taskId = projectId + "#task-" + taskId
function saveTaskToStorage(projectId, task) {
  const taskId = generateTaskId();
  const stringObj = JSON.stringify(task);
  const combinedId = projectId + "#" + taskId;
  localStorage.setItem(combinedId, stringObj);
  console.log(`saving to storage taskid: ${combinedId}`);
  console.log(`saving to storage task: ${stringObj}`);
  return combinedId;
}

export {
  saveProjectToStorage,
  loadProjectsIntoAppState,
  removeProjectFromLocalStorage,
  saveProjectToAppState,
  saveEditedProjectToStorage,
  saveTaskToStorage,
};
