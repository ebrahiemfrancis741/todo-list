import { Project } from "./project";

function setupEventHandlers(){
  
  btnProjectDialogEventHandler();
  btnProjectClose();
  btnProjectCreate();
}

function btnProjectDialogEventHandler(){
  let body = document.querySelector("body");
  let addProjectBtn = document.querySelector(".add-project-btn");
  addProjectBtn.addEventListener("click", (e)=>{
    let addProjectDialog = document.querySelector("#addProjectDialog");
    console.log("opening project dialog");
    body.classList.toggle("dialog-open");
    addProjectDialog.showModal();
  });
}

function btnProjectClose(){
  let body = document.querySelector("body");
  let btnProjectClose = document.querySelector("#btnProjectClose");
  btnProjectClose.addEventListener("click", (e)=>{
    let addProjectDialog = document.querySelector("#addProjectDialog");
    console.log("closing project dialog");
    body.classList.toggle("dialog-open");
    addProjectDialog.close();
  });
}

function btnProjectCreate(){
  let body = document.querySelector("body");
  let btnProjectCreate = document.querySelector("#btnProjectCreate");
  let projectTitle = document.querySelector("#projectTitle");
  let addProjectDialog = document.querySelector("#addProjectDialog");

  btnProjectCreate.addEventListener("click", ()=>{
    let newProject = new Project(projectTitle.value, []);
    console.log(newProject);

    let stringObject = JSON.stringify(newProject);
    console.log(stringObject);
    localStorage.setItem(newProject.title, stringObject);
    addProjectToContainer(newProject);

    body.classList.toggle("dialog-open");
    addProjectDialog.close();
  });
}

function displayProjects(){
  let projectObj;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    projectObj = JSON.parse(`${value}`);
    addProjectToContainer(projectObj);
}

}

function addProjectToContainer(projectObj){
  let projectsContainer = document.querySelector(".projects-container");
  let project, projectToDoList, projectTitle;

  project = document.createElement("div");
  project.classList.add("project");
  project.id = projectObj.title;
  projectsContainer.appendChild(project);

  projectTitle = document.createElement("h3");
  projectTitle.textContent = projectObj.title;
  project.appendChild(projectTitle);

  projectToDoList = document.createElement("div");
  projectToDoList.classList.add("project-todo-list");
  project.appendChild(projectToDoList);
}

export {setupEventHandlers, displayProjects};