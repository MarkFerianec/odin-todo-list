// import { projects, deleteToDoItemFunction, createNewToDo } from './app';
import { projects } from './app';

function displayProjects() {
  const content = document.querySelector('.content');

  const projectsDiv = document.createElement('div');
  projectsDiv.classList.add('projects');

  content.appendChild(projectsDiv);

  for (let i = 0; i < projects.length; i++) {
    const div = document.createElement('div');
    projectsDiv.appendChild(div);
    div.classList.add(projects[i].projectTitle);
    div.textContent = 'Project: ' + projects[i].projectTitle;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    div.append(buttonContainer);

    const addToDoItemButton = document.createElement('button');
    addToDoItemButton.classList.add('add-to-do-item-button');
    addToDoItemButton.textContent = 'Add to-do item';

    buttonContainer.append(addToDoItemButton);

    // addToDoItemButton.addEventListener('click', createNewToDo);
    addToDoItemButton.addEventListener('click', addToDoItemAndClearForm);

    function createNewToDo() {
      // alert('test');
      const createdNewToDo = document.createElement('div');
      // div.appendChild(createdNewToDo);

      // createdNewToDo.textContent = 'test';
      // createdNewToDo =
      const toDoItemTitleDiv = document.createElement('div');
      const toDoItemTitle = document.querySelector('#title');
      let titleOfToDoItem = toDoItemTitle.value;
      toDoItemTitleDiv.textContent = 'Title: ' + titleOfToDoItem;

      const toDoItemDescriptionDiv = document.createElement('div');
      const toDoItemDescription = document.querySelector('#description');
      let descriptionOfToDoItem = toDoItemDescription.value;
      toDoItemDescriptionDiv.textContent =
        'Description: ' + descriptionOfToDoItem;

      const toDoItemDueDateDiv = document.createElement('div');
      const toDoItemDueDate = document.querySelector('#duedate');
      let dueDateOfToDoItem = toDoItemDueDate.value;
      toDoItemDueDateDiv.textContent = 'Due Date: ' + dueDateOfToDoItem;

      const toDoItemPriorityDiv = document.createElement('div');
      const toDoItemPriority = document.querySelector('#priority');
      let priorityOfToDoItem = toDoItemPriority.value;
      toDoItemPriorityDiv.textContent = 'Priority: ' + priorityOfToDoItem;

      createdNewToDo.appendChild(toDoItemTitleDiv);
      createdNewToDo.appendChild(toDoItemDescriptionDiv);
      createdNewToDo.appendChild(toDoItemDueDateDiv);
      createdNewToDo.appendChild(toDoItemPriorityDiv);

      const deleteToDoItemButton = document.createElement('button');
      deleteToDoItemButton.classList.add('delete-to-do-item-button');
      // deleteToDoItemButton.classList.add(projects[i].toDoItems[a].title);   //this probably needs to be modified to something similar to be used
      deleteToDoItemButton.textContent = 'Delete to-do item';

      createdNewToDo.appendChild(deleteToDoItemButton);

      createdNewToDo.classList.add(titleOfToDoItem);
      createdNewToDo.classList.add('to-do-item-container');

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
        div.removeChild(createdNewToDo); // this does not delete the object.
      }
    }

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.add('delete-project-button');
    deleteProjectButton.textContent = 'Delete project';

    buttonContainer.append(deleteProjectButton);

    deleteProjectButton.addEventListener('click', deleteProjectFunction);

    function deleteProjectFunction() {
      // alert('test');
      projectsDiv.removeChild(div);
    }

    for (let a = 0; a < projects[i].toDoItems.length; a++) {
      const toDoItemContainer = document.createElement('div');
      toDoItemContainer.classList.add(projects[i].toDoItems[a].title);
      toDoItemContainer.classList.add('to-do-item-container');
      div.appendChild(toDoItemContainer);

      const titleDiv = document.createElement('div');
      toDoItemContainer.appendChild(titleDiv);
      titleDiv.classList.add('title');
      titleDiv.textContent = 'Title: ' + projects[i].toDoItems[a].title;

      const descriptionDiv = document.createElement('div');
      toDoItemContainer.appendChild(descriptionDiv);
      descriptionDiv.classList.add('description');
      descriptionDiv.textContent =
        'Description: ' + projects[i].toDoItems[a].description;

      const dueDateDiv = document.createElement('div');
      toDoItemContainer.appendChild(dueDateDiv);
      dueDateDiv.classList.add('due-date');
      dueDateDiv.textContent = 'Due Date: ' + projects[i].toDoItems[a].dueDate;

      const priorityDiv = document.createElement('div');
      toDoItemContainer.appendChild(priorityDiv);
      priorityDiv.classList.add('priority');
      priorityDiv.textContent =
        'Priority: ' + projects[i].toDoItems[a].priority;

      const deleteToDoItemButton = document.createElement('button');
      deleteToDoItemButton.classList.add('delete-to-do-item-button');
      deleteToDoItemButton.classList.add(projects[i].toDoItems[a].title);
      deleteToDoItemButton.textContent = 'Delete to-do item';

      toDoItemContainer.appendChild(deleteToDoItemButton);

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
        div.removeChild(toDoItemContainer); // this does not delete the object.
      }
    }

    function clearAddToDoItemForm() {
      const toDoItemTitle = document.querySelector('#title');
      const toDoItemDescription = document.querySelector('#description');
      const toDoItemDueDate = document.querySelector('#duedate');
      const toDoItemPriority = document.querySelector('#priority');
      toDoItemTitle.value = '';
      toDoItemDescription.value = '';
      toDoItemDueDate.value = '';
      toDoItemPriority.value = '';
    }

    function addToDoItemAndClearForm() {
      createNewToDo();
      clearAddToDoItemForm();
    }
  }
}

const newProjectButtonQuerySelector = document.querySelector('#submit');

newProjectButtonQuerySelector.addEventListener(
  'click',
  addNewProjectAndClearNewProjectForm
);

function addNewProject() {
  const projectsQuerySelector = document.querySelector('.projects');

  const newProjectDiv = document.createElement('div');

  const titleOfNewProject = document.querySelector('#project-title');

  newProjectDiv.classList.add(titleOfNewProject.value);

  newProjectDiv.textContent = 'Project: ' + titleOfNewProject.value;

  projectsQuerySelector.appendChild(newProjectDiv);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  newProjectDiv.append(buttonContainer);

  const addToDoItemButton = document.createElement('button');
  addToDoItemButton.classList.add('add-to-do-item-button');
  addToDoItemButton.textContent = 'Add to-do item';

  buttonContainer.append(addToDoItemButton);

  // addToDoItemButton.addEventListener('click', createNewToDo);
  addToDoItemButton.addEventListener('click', addToDoItemAndClearForm);

  function createNewToDo() {
    const createdNewToDo = document.createElement('div');

    const toDoItemTitleDiv = document.createElement('div');
    const toDoItemTitle = document.querySelector('#title');
    let titleOfToDoItem = toDoItemTitle.value;
    toDoItemTitleDiv.textContent = 'Title: ' + titleOfToDoItem;

    const toDoItemDescriptionDiv = document.createElement('div');
    const toDoItemDescription = document.querySelector('#description');
    let descriptionOfToDoItem = toDoItemDescription.value;
    toDoItemDescriptionDiv.textContent =
      'Description: ' + descriptionOfToDoItem;

    const toDoItemDueDateDiv = document.createElement('div');
    const toDoItemDueDate = document.querySelector('#duedate');
    let dueDateOfToDoItem = toDoItemDueDate.value;
    toDoItemDueDateDiv.textContent = 'Due Date: ' + dueDateOfToDoItem;

    const toDoItemPriorityDiv = document.createElement('div');
    const toDoItemPriority = document.querySelector('#priority');
    let priorityOfToDoItem = toDoItemPriority.value;
    toDoItemPriorityDiv.textContent = 'Priority: ' + priorityOfToDoItem;

    createdNewToDo.appendChild(toDoItemTitleDiv);
    createdNewToDo.appendChild(toDoItemDescriptionDiv);
    createdNewToDo.appendChild(toDoItemDueDateDiv);
    createdNewToDo.appendChild(toDoItemPriorityDiv);

    const deleteToDoItemButton = document.createElement('button');
    deleteToDoItemButton.classList.add('delete-to-do-item-button');
    deleteToDoItemButton.textContent = 'Delete to-do item';

    createdNewToDo.appendChild(deleteToDoItemButton);

    createdNewToDo.classList.add(titleOfToDoItem);
    createdNewToDo.classList.add('to-do-item-container');

    newProjectDiv.appendChild(createdNewToDo);

    deleteToDoItemButton.addEventListener('click', deleteToDoItemFunction);

    function deleteToDoItemFunction() {
      newProjectDiv.removeChild(createdNewToDo); // this does not delete the object.
    }
  }

  const deleteProjectButton = document.createElement('button');
  deleteProjectButton.classList.add('delete-project-button');
  deleteProjectButton.textContent = 'Delete project';

  buttonContainer.append(deleteProjectButton);

  deleteProjectButton.addEventListener('click', deleteProjectFunction);

  function deleteProjectFunction() {
    // alert('test');
    // newProjectDiv.removeChild(div);
    // const newProjectButtonQuerySelector = document.querySelector('#submit');
    const projectsDiv = document.querySelector('.projects');
    projectsDiv.removeChild(newProjectDiv);
  }

  function clearAddToDoItemForm() {
    const toDoItemTitle = document.querySelector('#title');
    const toDoItemDescription = document.querySelector('#description');
    const toDoItemDueDate = document.querySelector('#duedate');
    const toDoItemPriority = document.querySelector('#priority');
    toDoItemTitle.value = '';
    toDoItemDescription.value = '';
    toDoItemDueDate.value = '';
    toDoItemPriority.value = '';
  }

  function addToDoItemAndClearForm() {
    createNewToDo();
    clearAddToDoItemForm();
  }
}

function clearNewProjectForm() {
  const titleOfNewProject = document.querySelector('#project-title');
  titleOfNewProject.value = '';
}

function addNewProjectAndClearNewProjectForm() {
  addNewProject();
  clearNewProjectForm();
}

// export { displayProjects };
// export { displayProjects, addProject };
export { displayProjects, addNewProject };
