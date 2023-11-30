import './style.css';
// import { home } from "./home"; // Example of how an import statement should look.
// import { ToDoItem } from "./app";
// import { Project } from "./app";
import { ToDoItem, Project, exampleToDoItem, exampleToDoItem2, exampleToDoItem3, exampleToDoItem4, workProject, hobbyProject, projects } from "./app";
// import { someVariable } from "./app";
// import { test } from "./dom";
import { displayProjects, addProject } from "./dom";

console.log(ToDoItem);
console.log(Project);

console.log(exampleToDoItem);
console.log(exampleToDoItem2);
console.log(exampleToDoItem3);
console.log(exampleToDoItem4);

console.log(workProject);
console.log(hobbyProject);

console.log(projects);
// test();
// addProject();
displayProjects();



// let exampleToDoItem = new ToDoItem("Study", "Study hard", "December 1, 2023", "High");

// let defaultProject = new Project("Default");

// defaultProject.toDoItems.push(exampleToDoItem);

// console.log(exampleToDoItem);

// console.log(defaultProject);
// console.log(defaultProject.toDoItems[0]);

// console.log(someVariable);