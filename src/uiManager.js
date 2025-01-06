import { Project } from "./project";

function setupEventHandlers(){
  
  btnProjectDialogEventHandler();
  btnProjectClose();
  btnProjectCreate();
  btnTodoCloseEventHandler();
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
  let body = document.querySelector("body");
  let projectsContainer = document.querySelector(".projects-container");
  let project, projectToDoList, projectTitle;

  project = document.createElement("div");
  project.classList.add("project");
  // project.id = projectObj.title;
  projectsContainer.appendChild(project);

  projectTitle = document.createElement("h3");
  projectTitle.textContent = projectObj.title;
  project.appendChild(projectTitle);

  projectToDoList = document.createElement("div");
  projectToDoList.classList.add("project-todo-list");
  project.appendChild(projectToDoList);

  //add btn that shows a dialog for creating a todo item
  let btnAddTodo = document.createElement("button");
  btnAddTodo.id = projectObj.title;
  btnAddTodo.textContent = "Add a task";
  btnAddTodo.classList.add(".add-todo");

  btnAddTodo.addEventListener("click", (e)=>{
    console.log(e.target.id);
    body.classList.toggle("dialog-open");
    let addTodoDialog = document.querySelector("#addTodoDialog");
    addTodoDialog.showModal();
  });

  projectToDoList.appendChild(btnAddTodo);
}

// function btnAddTodoEventHandler(projectObj){

// }



function btnTodoCloseEventHandler(){
  let body = document.querySelector("body");
  let addTodoDialog = document.querySelector("#addTodoDialog");
  let btnTodoClose = document.querySelector("#btnTodoClose");
  btnTodoClose.addEventListener("click", ()=>{
    addTodoDialog.close();
    body.classList.toggle("dialog-open");
  });
}

export {setupEventHandlers, displayProjects};