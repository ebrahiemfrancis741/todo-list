// handles all UI functionality
import { appState } from "./appState";
import { saveProjectToStorage } from "./storage";
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

  btnProjectConfirm.addEventListener("click", function (e) {
    e.preventDefault();
    let newProject = createProject(textProjectTitle.value);
    saveProjectToStorage(newProject);
  });
}

function btnProjectCancelEventHandler() {
  let btnProjectCancel = document.querySelector("#btn-project-cancel");
  let dialogProject = document.querySelector("#dialog-project");

  btnProjectCancel.addEventListener("click", function (e) {
    dialogProject.close();
  });
}

function renderProject(project) {
  let projectContainer = document.querySelector(".project-container");
  let projectElement = document.createElement("div");

  // every .project element will be in the .project-container element
  projectElement.classList.add("project");
  projectContainer.appendChild(projectElement);

  // add all html elements thats needed to projectElement
  let projectTitle = document.createElement("p");
  projectTitle.textContent = project.title;
  projectElement.appendChild(projectTitle);

  // add buttons to projectElement
  let projectBtnRemove = document.createElement("button");
  projectBtnRemove.textContent = "delete";
  projectBtnRemove.addEventListener("click", function(e){

  });
  projectElement.appendChild(projectBtnRemove);
  
}

function renderAllProjects() {
  for(const i in appState.projects){
    renderProject(appState.projects[i]);
  }
}

export { setupEventHandlers, renderAllProjects };
