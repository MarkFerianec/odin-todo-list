// function test() {

import { defaultProject, hobbiesProject } from "./app";

//     const content = document.querySelector(".content");

//     const testDiv = document.createElement("test");

//     content.appendChild(testDiv);

//     testDiv.textContent = "test";

// }

// export { test };

//possibly change name of this function displayProject.
function displayProjects() { 

    const content = document.querySelector(".content");

    const projectDiv = document.createElement("project-div");

    const projectDiv2 = document.createElement("project-div2");

    content.appendChild(projectDiv);

    content.appendChild(projectDiv2);

    projectDiv.textContent = defaultProject.projectTitle;

    projectDiv2.textContent = hobbiesProject.projectTitle;

    // this needs to be rewritten

}

export { displayProjects };