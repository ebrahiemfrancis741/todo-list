import { generateProjectId } from "./idGenerator";

// handles localStorage functionality

function saveProjectToStorage(project) {
  const projectId = generateProjectId();
  const stringObj = JSON.stringify(project);
  localStorage.setItem(projectId, stringObj);
}

export {saveProjectToStorage};