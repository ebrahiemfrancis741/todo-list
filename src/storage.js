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

// gets all projects from localStorage and return as an array
function getProjectsFromStorage() {
  const projects = {};
  let projectObj;
  let id;
  for (let i = 0; i < localStorage.length; i++) {
    id = localStorage.key(i);
    if (id.startsWith("project-") && !id.includes("task-")) {
      projectObj = JSON.parse(localStorage.getItem(id));
      projects[id] = projectObj;
    }
  }
  return projects;
}

function getTasksFromStorage() {
  const tasks = {};
  let taskObj;
  let id;
  for (let i = 0; i < localStorage.length; i++) {
    id = localStorage.key(i);
    if (id.includes("task-")) {
      taskObj = JSON.parse(localStorage.getItem(id));
      tasks[id] = taskObj;
    }
  }
  return tasks;
}

function removeProjectFromLocalStorage(id) {
  localStorage.removeItem(id);
}

function removeTaskFromLocalStorage(id) {
  localStorage.removeItem(id);
}

// tasks are stored with their associated projects id and their own id
// full taskId = projectId + "#task-" + taskId
function saveTaskToStorage(projectId, task) {
  const taskId = generateTaskId();
  const stringObj = JSON.stringify(task);
  const combinedId = projectId + "#" + taskId;
  localStorage.setItem(combinedId, stringObj);
  return combinedId;
}

function saveEditedTaskToStorage(taskId, taskObj) {
  localStorage.setItem(taskId, JSON.stringify(taskObj));
}

export {
  saveProjectToStorage,
  removeProjectFromLocalStorage,
  saveEditedProjectToStorage,
  saveTaskToStorage,
  getProjectsFromStorage,
  getTasksFromStorage,
  removeTaskFromLocalStorage,
  saveEditedTaskToStorage,
};
