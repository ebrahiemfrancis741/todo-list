

class TodoItem{
  #title;
  #description;
  #dueDate;
  #priority;
  #notes;
  #complete;

  constructor(title, description, dueDate, priority, notes, complete){
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate; // date object?
    this.#priority = priority;
    this.#notes = notes;
    this.#complete = complete;
  }

  toJSON(){
    return {
      title: this.#title,
      todoList: this.#description,
      dueDate: this.dueDate,
      priority: this.#priority,
      notes: this.#notes,
      complete: this.complete
    };
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