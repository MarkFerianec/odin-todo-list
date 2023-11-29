// Array for project objects
// projects = [];

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

let exampleToDoItem3 = new ToDoItem("Play Guitar", "Practice guitar", "December 1, 2023", "Low");

let defaultProject = new Project("Work");
let hobbiesProject = new Project("Hobbies");

defaultProject.toDoItems.push(exampleToDoItem);
defaultProject.toDoItems.push(exampleToDoItem2);

// export { ToDoItem, Project, someVariable };
// export { ToDoItem, Project };
export { ToDoItem, Project, exampleToDoItem, exampleToDoItem2, exampleToDoItem3, defaultProject, hobbiesProject };