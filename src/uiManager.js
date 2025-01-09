// handles all UI functionality
import { appState, removeProjectFromAppState } from "./appState";
import {
  saveProjectToStorage,
  removeProjectFromLocalStorage,
  saveProjectToAppState,
} from "./storage";
import { createProject } from "./todoList";

function setupEventHandlers() {
  btnProjectConfirmEventHandler();
  btnOpenDialogProjectEventHandler();
  btnProjectCancelEventHandler();
}

function btnOpenDialogProjectEventHandler() {
  let btnOpenDialogProject = document.querySelector("#btn-open-dialog-project");
  let dialogProject = document.querySelector("#dialog-project");

  btnOpenDialogProject.addEventListener("click", function (e) {
    dialogProject.showModal();
  });
}

function btnProjectConfirmEventHandler() {
  let btnProjectConfirm = document.querySelector("#btn-project-confirm");
  let textProjectTitle = document.querySelector("#text-project-title");
  let dialogProject = document.querySelector("#dialog-project");

  btnProjectConfirm.addEventListener("click", function (e) {
    e.preventDefault();
    let newProject = createProject(textProjectTitle.value);
    let projectId = saveProjectToStorage(newProject);
    saveProjectToAppState(projectId, newProject);
    renderProject(projectId, newProject);
    console.log(appState);
    dialogProject.close();
  });
}

function btnProjectCancelEventHandler() {
  let btnProjectCancel = document.querySelector("#btn-project-cancel");
  let dialogProject = document.querySelector("#dialog-project");

  btnProjectCancel.addEventListener("click", function (e) {
    dialogProject.close();
  });
}

function renderProject(id, project) {
  let projectContainer = document.querySelector(".project-container");
  let projectElement = document.createElement("div");

  // every .project element will be in the .project-container element
  projectElement.classList.add("project");
  projectElement.setAttribute("project-id", id);
  projectContainer.appendChild(projectElement);

  // add all html elements thats needed to projectElement
  let projectTitle = document.createElement("p");
  projectTitle.textContent = project.title;
  projectElement.appendChild(projectTitle);

  // add buttons to projectElement
  let projectBtnRemove = document.createElement("button");
  projectBtnRemove.textContent = "delete";
  projectBtnRemove.setAttribute("project-id", id);
  projectBtnRemove.addEventListener("click", function (e) {
    removeProject(projectElement, id);
  });
  projectElement.appendChild(projectBtnRemove);
}

// removes the project from localStorage, appState.projects and the DOM
function removeProject(projectElement, id) {
  removeProjectFromAppState(id);
  removeProjectFromLocalStorage(id);
  projectElement.remove();
}

function renderAllProjects() {
  // empty the container before adding new elements
  let projectContainer = document.querySelector(".project-container");
  projectContainer.replaceChildren();

  for (const i in appState.projects) {
    renderProject(i, appState.projects[i]);
  }
}

export { setupEventHandlers, renderAllProjects };
