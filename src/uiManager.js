// handles all UI functionality
import {
  appState,
  removeProjectFromAppState,
  saveEditedProjectToAppState,
  saveTaskToAppState,
  saveProjectToAppState,
} from "./appState";
import {
  saveProjectToStorage,
  removeProjectFromLocalStorage,
  saveEditedProjectToStorage,
  saveTaskToStorage,
} from "./storage";
import { createProject, createTask } from "./todoList";

function setupEventHandlers() {
  btnProjectConfirmEventHandler();
  btnOpenDialogProjectEventHandler();
  btnProjectCancelEventHandler();
  btnTaskCancelEventHandler();
  btnTaskConfirmEventHandler();
}

function btnOpenDialogProjectEventHandler() {
  let btnOpenDialogProject = document.querySelector("#btn-open-dialog-project");
  let dialogProject = document.querySelector("#dialog-project");
  let dialogProjectHeader = document.querySelector(".dialog-project-header");

  btnOpenDialogProject.addEventListener("click", function (e) {
    dialogProjectHeader.textContent = "Add Project";
    dialogProject.showModal();
  });
}

function btnProjectConfirmEventHandler() {
  let btnProjectConfirm = document.querySelector("#btn-project-confirm");
  let textProjectTitle = document.querySelector("#text-project-title");
  let dialogProject = document.querySelector("#dialog-project");

  btnProjectConfirm.addEventListener("click", function (e) {
    let editedProject = appState.editProjectRef;
    editedProject.title = textProjectTitle.value;
    if (appState.isEditingProject) {
      saveEditedProjectToAppState(appState.editProjectID, editedProject);
      saveEditedProjectToStorage(appState.editProjectID, editedProject);
      updateProjectRender(appState.editProjectID);
      // reset app state
      appState.editProjectID = null;
      appState.editProjectRef = null;
      appState.isEditingProject = false;
    } else {
      let newProject = createProject(textProjectTitle.value);
      let projectId = saveProjectToStorage(newProject);
      saveProjectToAppState(projectId, newProject);
      renderProject(projectId, newProject);
      console.log(appState);
    }
    dialogProject.close();
  });
}

// add values to the "dialog-project" dialog for editing
function populateProjectDialog() {
  let textProjectTitle = document.querySelector("#text-project-title");
  textProjectTitle.value = appState.projects[appState.editProjectID].title;
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
  let dialogProject = document.querySelector("#dialog-project");
  let dialogProjectHeader = document.querySelector(".dialog-project-header");
  let dialogTask = document.querySelector("#dialog-task");

  // every .project element will be in the .project-container element
  projectElement.classList.add("project");
  projectElement.setAttribute("project-id", id);
  projectContainer.appendChild(projectElement);

  // add all html elements thats needed to projectElement
  let projectTitle = document.createElement("p");
  projectTitle.textContent = project.title;
  projectTitle.setAttribute("project-id", id);
  projectElement.appendChild(projectTitle);

  // add buttons to projectElement
  let projectBtnRemove = document.createElement("button");
  projectBtnRemove.textContent = "Delete";
  projectBtnRemove.setAttribute("project-id", id);
  projectBtnRemove.addEventListener("click", function (e) {
    removeProject(projectElement, id);
  });
  projectElement.appendChild(projectBtnRemove);

  // add an edit button that allows editing a project
  let projectBtnEdit = document.createElement("button");
  projectBtnEdit.textContent = "Edit";
  projectBtnEdit.setAttribute("project-id", id);
  projectBtnEdit.addEventListener("click", function (e) {
    // set appropriate app state
    appState.isEditingProject = true;
    appState.editProjectID = id;
    appState.editProjectRef = appState.projects[appState.editProjectID];
    dialogProjectHeader.textContent = "Edit Project";
    console.log("Editing a project:");
    console.log(appState);
    populateProjectDialog();
    dialogProject.showModal();
  });
  projectElement.appendChild(projectBtnEdit);

  // add an 'add task' button that adds tasks associated with this project
  let projectBtnAddTask = document.createElement("button");
  projectBtnAddTask.textContent = "Add task";
  projectBtnAddTask.setAttribute("project-id", id);
  projectBtnAddTask.addEventListener("click", function (e) {
    // save the id of the project that we want to add a task to
    appState.projectAddTaskId = id;
    dialogTask.showModal();
  });
  projectElement.appendChild(projectBtnAddTask);
}

// removes the project from localStorage, appState.projects and the DOM
function removeProject(projectElement, id) {
  removeProjectFromAppState(id);
  removeProjectFromLocalStorage(id);
  projectElement.remove();
}

// updates the values in a project element
function updateProjectRender(projectId) {
  let projectTitle = document.querySelector(`p[project-id="${projectId}"]`);
  projectTitle.textContent = appState.editProjectRef.title;
}

function renderAllProjects() {
  // empty the container before adding new elements
  let projectContainer = document.querySelector(".project-container");
  projectContainer.replaceChildren();

  for (const i in appState.projects) {
    if (appState.projects.hasOwnProperty(i)) {
      renderProject(i, appState.projects[i]);
    }
  }
}

function btnTaskCancelEventHandler() {
  let dialogTask = document.querySelector("#dialog-task");
  let btnTaskCancel = document.querySelector("#btn-task-cancel");
  btnTaskCancel.addEventListener("click", function (e) {
    dialogTask.close();
  });
}

function btnTaskConfirmEventHandler() {
  let dialogTask = document.querySelector("#dialog-task");
  let btnTaskConfirm = document.querySelector("#btn-task-confirm");
  let textTaskTitle = document.querySelector("#text-task-title");
  let textareaTaskDescription = document.querySelector(
    "#textarea-task-description"
  );
  let dateTaskDueDate = document.querySelector("#date-task-dueDate");
  let selectTaskPriority = document.querySelector("#select-task-priority");

  btnTaskConfirm.addEventListener("click", function (e) {
    let newTask = createTask(
      textTaskTitle.value,
      textareaTaskDescription.value,
      dateTaskDueDate.value,
      selectTaskPriority.value,
      false
    );
    let taskId = saveTaskToStorage(appState.projectAddTaskId, newTask);
    saveTaskToAppState(taskId, newTask);
    dialogTask.close();
  });
}

export { setupEventHandlers, renderAllProjects };
