
class Project{
  #title;
  #todoList;

  constructor(title, todoList){
    this.#title = title;
    this.#todoList = todoList;
  }

  get title(){
    return this.#title;
  }

  get todoList(){
    return this.#todoList;
  }

  set title(title){
    this.#title = title;
  }

  set todoList(todoList){
    this.#todoList = todoList;
  }
}