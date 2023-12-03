import { projects, deleteToDoItemFunction, createNewToDo } from "./app";

function displayProjects() {

    const content = document.querySelector(".content");

    const projectsDiv = document.createElement("div");
    projectsDiv.classList.add("projects");

    content.appendChild(projectsDiv);

    for (let i = 0; i < projects.length; i++) {

        const div = document.createElement("div");
        projectsDiv.appendChild(div);
        div.classList.add(projects[i].projectTitle);
        div.textContent = "Project: " + projects[i].projectTitle;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        div.append(buttonContainer);

        const addToDoItemButton = document.createElement('button');
        addToDoItemButton.classList.add("add-to-do-item-button");
        addToDoItemButton.textContent = 'Add to-do item';

        buttonContainer.append(addToDoItemButton);

        addToDoItemButton.addEventListener('click', createNewToDo);

        function createNewToDo() {
            // alert('test');
            const createdNewToDo = document.createElement("div");
            createdNewToDo.classList.add("to-do-item-container");                       //  MOD THIS
            // div.appendChild(createdNewToDo);

            // createdNewToDo.textContent = 'test';
            // createdNewToDo = 
            const toDoItemTitleDiv = document.createElement("div");
            const toDoItemTitle = document.querySelector('#title');
            let titleOfToDoItem = toDoItemTitle.value;
            toDoItemTitleDiv.textContent = titleOfToDoItem;

            const toDoItemDescriptionDiv = document.createElement("div");
            const toDoItemDescription = document.querySelector('#description');
            let descriptionOfToDoItem = toDoItemDescription.value;
            toDoItemDescriptionDiv.textContent = descriptionOfToDoItem;

            const toDoItemDueDateDiv = document.createElement("div");
            const toDoItemDueDate = document.querySelector('#duedate');
            let dueDateOfToDoItem = toDoItemDueDate.value;
            toDoItemDueDateDiv.textContent = dueDateOfToDoItem;

            const toDoItemPriorityDiv = document.createElement("div");
            const toDoItemPriority = document.querySelector('#priority');
            let priorityOfToDoItem = toDoItemPriority.value;
            toDoItemPriorityDiv.textContent = priorityOfToDoItem;

            createdNewToDo.appendChild(toDoItemTitleDiv);
            createdNewToDo.appendChild(toDoItemDescriptionDiv);
            createdNewToDo.appendChild(toDoItemDueDateDiv);
            createdNewToDo.appendChild(toDoItemPriorityDiv);


            const deleteToDoItemButton = document.createElement('button');
            deleteToDoItemButton.classList.add("delete-to-do-item-button");
            // deleteToDoItemButton.classList.add(projects[i].toDoItems[a].title);   //this probably needs to be modified to something similar to be used    
            deleteToDoItemButton.textContent = 'Delete to-do item';

            createdNewToDo.appendChild(deleteToDoItemButton);

            div.appendChild(createdNewToDo);



            deleteToDoItemButton.addEventListener('click', deleteToDoItemFunction);

            function deleteToDoItemFunction() {
                // console.log(projects[i].toDoItems[a].title);
                // alert(projects[i].toDoItems[a].title);
                // alert(projects[i].projectTitle);
                // projects[i].projectTitle.removeChild(projects[i].toDoItems[a].title);
                // const something0 = document.querySelector(projects[i].toDoItems[a].title);
                // console.log(something0);
                // const something = document.querySelector(projects[i].projectTitle);
                // projectsDiv.removeChild(something);
                // projectsDiv.removeChild(toDoItemContainer);
                div.removeChild(createdNewToDo);                          // this does not delete the object.
            }

        }

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add("delete-project-button");
        deleteProjectButton.textContent = 'Delete project';

        buttonContainer.append(deleteProjectButton);

        deleteProjectButton.addEventListener('click', deleteProjectFunction);

        function deleteProjectFunction() {
            // alert('test');
            projectsDiv.removeChild(div);
        }

        for (let a = 0; a < projects[i].toDoItems.length; a++) {

            const toDoItemContainer = document.createElement("div");
            toDoItemContainer.classList.add(projects[i].toDoItems[a].title);
            toDoItemContainer.classList.add("to-do-item-container");
            div.appendChild(toDoItemContainer);

            const titleDiv = document.createElement("div");
            toDoItemContainer.appendChild(titleDiv);
            titleDiv.classList.add("title");
            titleDiv.textContent = "Title: " + projects[i].toDoItems[a].title;

            const descriptionDiv = document.createElement("div");
            toDoItemContainer.appendChild(descriptionDiv);
            descriptionDiv.classList.add("description");
            descriptionDiv.textContent = "Description: " + projects[i].toDoItems[a].description;

            const dueDateDiv = document.createElement("div");
            toDoItemContainer.appendChild(dueDateDiv);
            dueDateDiv.classList.add("due-date");
            dueDateDiv.textContent = "Due Date: " + projects[i].toDoItems[a].dueDate;

            const priorityDiv = document.createElement("div");
            toDoItemContainer.appendChild(priorityDiv);
            priorityDiv.classList.add("priority");
            priorityDiv.textContent = "Priority: " + projects[i].toDoItems[a].priority;

            const deleteToDoItemButton = document.createElement('button');
            deleteToDoItemButton.classList.add("delete-to-do-item-button");
            deleteToDoItemButton.classList.add(projects[i].toDoItems[a].title);
            deleteToDoItemButton.textContent = 'Delete to-do item';

            toDoItemContainer.appendChild(deleteToDoItemButton);

            deleteToDoItemButton.addEventListener('click', deleteToDoItemFunction);

            function deleteToDoItemFunction() {
                console.log(projects[i].toDoItems[a].title);
                // alert(projects[i].toDoItems[a].title);
                // alert(projects[i].projectTitle);
                // projects[i].projectTitle.removeChild(projects[i].toDoItems[a].title);
                // const something0 = document.querySelector(projects[i].toDoItems[a].title);
                // console.log(something0);
                // const something = document.querySelector(projects[i].projectTitle);
                // projectsDiv.removeChild(something);
                // projectsDiv.removeChild(toDoItemContainer);
                div.removeChild(toDoItemContainer);                          // this does not delete the object.
            }


        }


    }

}

const newProjectButtonQuerySelector = document.querySelector('#submit');

newProjectButtonQuerySelector.addEventListener('click', addNewProject);

function addNewProject() {

    // event.preventDefault()

    const projectsQuerySelector = document.querySelector('.projects');

    const newProjectDiv = document.createElement('div');

    let titleOfNewProject = document.querySelector('#project-title');

    newProjectDiv.classList.add(titleOfNewProject.value);

    newProjectDiv.textContent = "Project: " + titleOfNewProject.value;

    projectsQuerySelector.appendChild(newProjectDiv);


    // const toDoItemTitleDiv = document.createElement("div");
    // const toDoItemTitle = document.querySelector('#title');
    // let titleOfToDoItem = toDoItemTitle.value;
    // toDoItemTitleDiv.textContent = titleOfToDoItem;
}

// function addToDoItemButtonFunction() {
//     const toDoItemTitle = document.querySelector('#title');
//     let titleOfToDoItem = toDoItemTitle.value;

// }

// function deleteToDoItemFunction() {
//     alert("hi");
// }

// export { displayProjects };
// export { displayProjects, addProject };
export { displayProjects, addNewProject };







// Somethis like this I believe is correct:
// for (let y = 0; y < projects.length; y++) {
//     // console.log(projects[y].toDoItems[y].title);
//     // console.log(projects[y]);
//     // projects[y]
//     // console.log(projects[y].toDoItems);

//     for (let a = 0; a < projects[y].toDoItems.length; a++) {
//         // console.log(a);
//         console.log(projects[y].toDoItems[a].title);
//     }
// }






//Just saving this here incase I need to go back:
// for (let i = 0; i < projects.length; i++) {
//     // console.log("test");
//     const div = document.createElement("div");
//     projectsDiv.appendChild(div);
//     div.classList.add(projects[i].projectTitle);
//     div.textContent = projects[i].projectTitle;

//     // const div2 = document.createElement("div");
//     // div.appendChild(div2);
//     // div2.classList.add(projects[0].toDoItems[0].title);
//     // div2.textContent = projects[0].toDoItems[0].title; 
// }









// function displayProjects() {

//     const content = document.querySelector(".content");

//     const projectsDiv = document.createElement("div");
//     projectsDiv.classList.add("projects");

//     content.appendChild(projectsDiv);

//     for (let i = 0; i < projects.length; i++) {
//         // console.log("test");
//         const div = document.createElement("div");
//         projectsDiv.appendChild(div);
//         div.classList.add(projects[i].projectTitle);
//         div.textContent = projects[i].projectTitle;
//     }

// }







// function displayProjects() {

//     const content = document.querySelector(".content");

//     const projectsDiv = document.createElement("div");
//     projectsDiv.classList.add("projects");

//     content.appendChild(projectsDiv);

//     for (let i = 0; i < projects.length; i++) {
//         // console.log("test");
//         const div = document.createElement("div");
//         projectsDiv.appendChild(div);
//         div.classList.add(projects[i].projectTitle);
//         div.textContent = projects[i].projectTitle;

//         // const div2 = document.createElement("div");
//         // div.appendChild(div2);
//         // div2.classList.add(projects[0].toDoItems[0].title);
//         // div2.textContent = projects[0].toDoItems[0].title;

//         for (let j = 0; j < projects.length; j++) {
//             const div2 = document.createElement("div");
//             div.appendChild(div2);
//             // div2.classList.add(projects[i])
//             console.log(j);
//         }
//     }
// }











// console.log(projects[0].toDoItems.length);

// for (let j = 0; j < projects[0].toDoItems.length; j++) {
//     console.log(projects[0].toDoItems[j].title);
// }

// for (let k = 0; k < projects[1].toDoItems.length; k++) {
//     console.log(projects[1].toDoItems[k].title);
// }

// important:
// for (let y = 0; y < projects.length; y++) {
//     // console.log(projects[y].toDoItems[y].title);
//     // console.log(projects[y]);
//     // projects[y]
//     // console.log(projects[y].toDoItems);

//     for (let a = 0; a < projects[y].toDoItems.length; a++) {
//         // console.log(a);
//         console.log(projects[y].toDoItems[a].title);
//     }
// }

// for (let y = 0; y < projects.length; y++) {
//     console.log(projects[y].toDoItems[y].title);
// }









// function addProject() {

//     const content = document.querySelector(".content");

//     const dialogDiv = document.createElement('div');
//     dialogDiv.classList.add("dialog");

//     content.appendChild(dialogDiv);

//     const projectForm = document.createElement('form');
//     projectForm.classList.add('form');

//     dialogDiv.appendChild(projectForm);

//     let inputProjectName = document.createElement('input');
//     inputProjectName.type = 'text';
//     inputProjectName.name = 'project-name';
//     // inputProjectName.value = 'test';

//     let inputProjectDescription = document.createElement('input');
//     inputProjectDescription.type = 'text';
//     inputProjectDescription.name = 'project-description';

//     let inputProjectDueDate = document.createElement('input');
//     inputProjectDueDate.type = 'text';
//     inputProjectDueDate.name = 'due-date';

//     let inputProjectPriority = document.createElement('input');
//     inputProjectPriority.type = 'text';
//     inputProjectPriority.name = 'due-date';

//     let projectSubmitButton = document.createElement('input');
//     projectSubmitButton.type = 'submit';
//     projectSubmitButton.value = 'submit';

//     projectForm.appendChild(inputProjectName);
//     projectForm.appendChild(inputProjectDescription);
//     projectForm.appendChild(inputProjectDueDate);
//     projectForm.appendChild(inputProjectPriority);
//     projectForm.appendChild(projectSubmitButton);
//     // const projectTitle = document.createElement('label');

// }