class ToDoApp {
allToDos = [];
inputTask = document.querySelector(".inputTask");
toDoList = document.querySelector("toDoList");

constructor() {
this.inputTask.addEventListener("keyup", this.handleAddToDo);
}

handleAddToDo() { console.log('escribiendo letra')}
}

export default ToDoApp;
