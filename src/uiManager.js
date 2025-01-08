// handles all UI functionality
import { saveProjectToStorage } from "./storage";
import { createProject } from "./todoList";

function setupEventHandlers(){
  btnProjectConfirmEventHandler();
  btnOpenDialogProjectEventHandler();
}

function btnOpenDialogProjectEventHandler() {
  let btnOpenDialogProject = document.querySelector("#btn-open-dialog-project");
  let dialogProject = document.querySelector("#dialog-project");

  btnOpenDialogProject.addEventListener("click", function (e) {
    dialogProject.showModal();
  });
}

function btnProjectConfirmEventHandler(){
  let btnProjectConfirm = document.querySelector("#btn-project-confirm");
  let textProjectTitle = document.querySelector("#text-project-title");
  btnProjectConfirm.addEventListener("click", function(e){
    e.preventDefault();
    let newProject = createProject(textProjectTitle.value);
    saveProjectToStorage(newProject);
  });
}

export {setupEventHandlers};