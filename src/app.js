// import { displayProjects } from "./dom";

// Array for project objects
let projects = [];

class ToDoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
  }

  toDoItems = [];
}

// let someVariable = 5;

let exampleToDoItem = new ToDoItem(
  'Email',
  'Read emails',
  'December 1, 2023',
  'Medium'
);
let exampleToDoItem2 = new ToDoItem(
  'Program',
  'Computer programming',
  'December 1, 2023',
  'High'
);

let exampleToDoItem3 = new ToDoItem(
  'Guitar',
  'Practice guitar',
  'December 1, 2023',
  'Low'
);
let exampleToDoItem4 = new ToDoItem(
  'Exercise',
  'Go to gym',
  'December 1, 2023',
  'Low'
);

let workProject = new Project('Work');
let hobbyProject = new Project('Hobbies');

workProject.toDoItems.push(exampleToDoItem);
workProject.toDoItems.push(exampleToDoItem2);

hobbyProject.toDoItems.push(exampleToDoItem3);
hobbyProject.toDoItems.push(exampleToDoItem4);

projects.push(workProject);
projects.push(hobbyProject);

// function deleteToDoItemFunction() {

//     // toDoItemContainer.classList.add(projects[0].toDoItems[0].title);

//     // hobbyProject.toDoItems.pop();
//     // for (let i = 0; i < hobbyProject.toDoItems.length; i++) {

//     // }
//     // const buttonQuerySelector = document.querySelector('delete-to-do-item-button');
//     // const toDoItemTitleQuerySelector = document.querySelector(ToDoItem.title);

//     // console.log(projects);
//     // alert("hi");
//     // const index = array.indexOf();
//     // if (index > -1) { // only splice array when item is found
//     //     array.splice(index, 1); // 2nd parameter means remove one item only
//     // }
// }

// function createNewToDo() {
//     // alert("hi");
//     let exampleToDoItem5 = new ToDoItem("Test", "Testing emails", "December 1, 2023", "High");
//     workProject.toDoItems.push(exampleToDoItem5);
//     // projects.push(workProject); //this messes it up for some reason
//     console.log(exampleToDoItem5);
//     // displayProjects(); //Maybe something similar to this?? //Something that clears DOM too???
//     // clear();
//     displayProjects();
//     clear();
// }

// function clear() {
//     const content = document.querySelector('.content');
//     const projects = document.querySelector('.projects');
//     content.removeChild(projects);
// }

// function createNewProject() {
//     const projects = document.querySelector('projects');
//     const newProjectDiv = document.createElement('div');
//     newProjectDiv.textContent = 'test';
//     projects.appendChild(newProjectDiv);
// }

// function deleteToDoItem() {

// }

// export { ToDoItem, Project, someVariable };
// export { ToDoItem, Project };

// export {
//     ToDoItem, Project, exampleToDoItem, exampleToDoItem2, exampleToDoItem3, exampleToDoItem4, workProject, hobbyProject, projects,
//     deleteToDoItemFunction, createNewToDo, clear, createNewProject
// };

// export {
//     ToDoItem, Project, exampleToDoItem, exampleToDoItem2, exampleToDoItem3, exampleToDoItem4, workProject, hobbyProject, projects,
//     createNewToDo, clear, createNewProject
// };

// export {
//     ToDoItem, Project, exampleToDoItem, exampleToDoItem2, exampleToDoItem3, exampleToDoItem4, workProject, hobbyProject, projects,
//     createNewToDo, clear
// };

// export {
//     ToDoItem, Project, exampleToDoItem, exampleToDoItem2, exampleToDoItem3, exampleToDoItem4, workProject, hobbyProject, projects, clear
// };

export {
  ToDoItem,
  Project,
  exampleToDoItem,
  exampleToDoItem2,
  exampleToDoItem3,
  exampleToDoItem4,
  workProject,
  hobbyProject,
  projects,
};
