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

let exampleToDoItem = new ToDoItem("Email", "Read emails", "December 1, 2023", "Medium");
let exampleToDoItem2 = new ToDoItem("Program", "Computer programming", "December 1, 2023", "High");

let exampleToDoItem3 = new ToDoItem("Guitar", "Practice guitar", "December 1, 2023", "Low");
let exampleToDoItem4 = new ToDoItem("Exercise", "Go to gym", "December 1, 2023", "Low");

let workProject = new Project("Work");
let hobbyProject = new Project("Hobbies");

workProject.toDoItems.push(exampleToDoItem);
workProject.toDoItems.push(exampleToDoItem2);

hobbyProject.toDoItems.push(exampleToDoItem3);
hobbyProject.toDoItems.push(exampleToDoItem4);

projects.push(workProject);
projects.push(hobbyProject);

// export { ToDoItem, Project, someVariable };
// export { ToDoItem, Project };
export { ToDoItem, Project, exampleToDoItem, exampleToDoItem2, exampleToDoItem3, exampleToDoItem4, workProject, hobbyProject, projects };