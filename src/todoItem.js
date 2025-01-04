

class TodoItem{
  #title;
  #description;
  #dueDate;
  #priority;
  #notes;
  #checklist;
  #complete;

  constructor(title, description, dueDate, priority, notes, checklist, complete){
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate; // date object?
    this.#priority = priority;
    this.#notes = notes;
    this.#checklist = checklist;
    this.#complete = complete;
  }

  get title(){
    return this.#title;
  }
  
  get description(){
    return this.#description;
  }

  get dueDate(){
    return this.#dueDate;
  }

  get priority(){
    return this.#priority;
  }

  get notes(){
    return this.#notes;
  }

  get checklist(){
    return this.#checklist;
  }

  get complete(){
    return this.#complete;
  }

  set title(title){
    this.#title = title;
  }

  set description(description){
    this.#description = description;
  }

  set dueDate(dueDate){
    this.#dueDate = dueDate;
  }

  set priority(priority){
    this.#priority = priority;
  }

  set notes(notes){
    this.#notes = notes;
  }

  set checklist(checklist){
    this.#checklist = checklist;
  }

  set complete(complete){
    this.#complete = complete;
  }
}

class CheckListItem{
  #title;
  #complete;

  constructor(title, complete){
    this.#title = title;
    this.#complete = complete;
  }

  get title(){
    return this.#title;
  }

  get complete(){
    return this.#complete;
  }

  set title(title){
    this.#title = title;
  }

  set complete(complete){
    this.#complete = complete;
  }
}

export {TodoItem, CheckListItem};