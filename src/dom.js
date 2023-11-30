import { defaultProject, hobbiesProject, projects } from "./app";

//possibly change name of this function displayProject.
// function displayProjects() { 

//     const content = document.querySelector(".content");

//     const projectDiv = document.createElement("project-div");

//     const projectDiv2 = document.createElement("project-div2");

//     content.appendChild(projectDiv);

//     content.appendChild(projectDiv2);

//     projectDiv.textContent = defaultProject.projectTitle;

//     projectDiv2.textContent = hobbiesProject.projectTitle;

//     // this needs to be rewritten because it will not be dry.

// }

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

        for (let a = 0; a < projects[i].toDoItems.length; a++) {

            const titleDiv = document.createElement("div");
            div.appendChild(titleDiv);
            // titleDiv.classList.add(projects[i].toDoItems[a].title);
            titleDiv.classList.add("title");
            titleDiv.textContent = "Title: " + projects[i].toDoItems[a].title;
            
            const descriptionDiv = document.createElement("div");
            div.appendChild(descriptionDiv);
            // descriptionDiv.classList.add(projects[i].toDoItems[a].description);
            descriptionDiv.classList.add("description");
            descriptionDiv.textContent = "Description: " + projects[i].toDoItems[a].description;

            const dueDateDiv = document.createElement("div");
            div.appendChild(dueDateDiv);
            dueDateDiv.classList.add("due-date");
            dueDateDiv.textContent = "Due Date: " + projects[i].toDoItems[a].dueDate;

            const priorityDiv = document.createElement("div");
            div.appendChild(priorityDiv);
            priorityDiv.classList.add("priority");
            priorityDiv.textContent = "Priority: " + projects[i].toDoItems[a].priority;
        }

        // const div2 = document.createElement("div");
        // div.appendChild(div2);
        // div2.classList.add(projects[0].toDoItems[0].title);
        // div2.textContent = projects[0].toDoItems[0].title; 
    }

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

}

export { displayProjects };





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