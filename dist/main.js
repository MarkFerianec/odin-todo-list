/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ToDoItem: () => (/* binding */ ToDoItem),
/* harmony export */   exampleToDoItem: () => (/* binding */ exampleToDoItem),
/* harmony export */   exampleToDoItem2: () => (/* binding */ exampleToDoItem2),
/* harmony export */   exampleToDoItem3: () => (/* binding */ exampleToDoItem3),
/* harmony export */   exampleToDoItem4: () => (/* binding */ exampleToDoItem4),
/* harmony export */   hobbyProject: () => (/* binding */ hobbyProject),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   workProject: () => (/* binding */ workProject)
/* harmony export */ });
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


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProjects: () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");


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

    for (let i = 0; i < _app__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
        // console.log("test");
        const div = document.createElement("div");
        projectsDiv.appendChild(div);
        div.classList.add(_app__WEBPACK_IMPORTED_MODULE_0__.projects[i].projectTitle);
        div.textContent = _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].projectTitle;

        // console.log(projects[y].toDoItems[y].title);
        // console.log(projects[y]);
        // projects[y]
        // console.log(projects[y].toDoItems);

        for (let a = 0; a < _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems.length; a++) {
            const div2 = document.createElement("div");
            div.appendChild(div2);
            div2.classList.add(_app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].title);
            div2.textContent = _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].title;
            // console.log(a);
            // console.log(projects[i].toDoItems[a].title);
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
// import { home } from "./home"; // Example of how an import statement should look.
// import { ToDoItem } from "./app";
// import { Project } from "./app";

// import { someVariable } from "./app";
// import { test } from "./dom";


console.log(_app__WEBPACK_IMPORTED_MODULE_0__.ToDoItem);
console.log(_app__WEBPACK_IMPORTED_MODULE_0__.Project);

console.log(_app__WEBPACK_IMPORTED_MODULE_0__.exampleToDoItem);
console.log(_app__WEBPACK_IMPORTED_MODULE_0__.exampleToDoItem2);
console.log(_app__WEBPACK_IMPORTED_MODULE_0__.exampleToDoItem3);

console.log(_app__WEBPACK_IMPORTED_MODULE_0__.workProject);
console.log(_app__WEBPACK_IMPORTED_MODULE_0__.hobbyProject);

console.log(_app__WEBPACK_IMPORTED_MODULE_0__.projects);
// test();
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();



// let exampleToDoItem = new ToDoItem("Study", "Study hard", "December 1, 2023", "High");

// let defaultProject = new Project("Default");

// defaultProject.toDoItems.push(exampleToDoItem);

// console.log(exampleToDoItem);

// console.log(defaultProject);
// console.log(defaultProject.toDoItems[0]);

// console.log(someVariable);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3QvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFycmF5IGZvciBwcm9qZWN0IG9iamVjdHNcbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5jbGFzcyBUb0RvSXRlbSB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgIH1cblxuICAgIHRvRG9JdGVtcyA9IFtdO1xufVxuXG4vLyBsZXQgc29tZVZhcmlhYmxlID0gNTtcblxubGV0IGV4YW1wbGVUb0RvSXRlbSA9IG5ldyBUb0RvSXRlbShcIkVtYWlsXCIsIFwiUmVhZCBlbWFpbHNcIiwgXCJEZWNlbWJlciAxLCAyMDIzXCIsIFwiTWVkaXVtXCIpO1xubGV0IGV4YW1wbGVUb0RvSXRlbTIgPSBuZXcgVG9Eb0l0ZW0oXCJQcm9ncmFtXCIsIFwiQ29tcHV0ZXIgcHJvZ3JhbW1pbmdcIiwgXCJEZWNlbWJlciAxLCAyMDIzXCIsIFwiSGlnaFwiKTtcblxubGV0IGV4YW1wbGVUb0RvSXRlbTMgPSBuZXcgVG9Eb0l0ZW0oXCJHdWl0YXJcIiwgXCJQcmFjdGljZSBndWl0YXJcIiwgXCJEZWNlbWJlciAxLCAyMDIzXCIsIFwiTG93XCIpO1xubGV0IGV4YW1wbGVUb0RvSXRlbTQgPSBuZXcgVG9Eb0l0ZW0oXCJFeGVyY2lzZVwiLCBcIkdvIHRvIGd5bVwiLCBcIkRlY2VtYmVyIDEsIDIwMjNcIiwgXCJMb3dcIik7XG5cbmxldCB3b3JrUHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiV29ya1wiKTtcbmxldCBob2JieVByb2plY3QgPSBuZXcgUHJvamVjdChcIkhvYmJpZXNcIik7XG5cbndvcmtQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbSk7XG53b3JrUHJvamVjdC50b0RvSXRlbXMucHVzaChleGFtcGxlVG9Eb0l0ZW0yKTtcblxuaG9iYnlQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbTMpO1xuaG9iYnlQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbTQpO1xuXG5wcm9qZWN0cy5wdXNoKHdvcmtQcm9qZWN0KTtcbnByb2plY3RzLnB1c2goaG9iYnlQcm9qZWN0KTtcblxuLy8gZXhwb3J0IHsgVG9Eb0l0ZW0sIFByb2plY3QsIHNvbWVWYXJpYWJsZSB9O1xuLy8gZXhwb3J0IHsgVG9Eb0l0ZW0sIFByb2plY3QgfTtcbmV4cG9ydCB7IFRvRG9JdGVtLCBQcm9qZWN0LCBleGFtcGxlVG9Eb0l0ZW0sIGV4YW1wbGVUb0RvSXRlbTIsIGV4YW1wbGVUb0RvSXRlbTMsIGV4YW1wbGVUb0RvSXRlbTQsIHdvcmtQcm9qZWN0LCBob2JieVByb2plY3QsIHByb2plY3RzIH07IiwiaW1wb3J0IHsgZGVmYXVsdFByb2plY3QsIGhvYmJpZXNQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL2FwcFwiO1xuXG4vL3Bvc3NpYmx5IGNoYW5nZSBuYW1lIG9mIHRoaXMgZnVuY3Rpb24gZGlzcGxheVByb2plY3QuXG4vLyBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7IFxuXG4vLyAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuLy8gICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvamVjdC1kaXZcIik7XG5cbi8vICAgICBjb25zdCBwcm9qZWN0RGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcm9qZWN0LWRpdjJcIik7XG5cbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2Mik7XG5cbi8vICAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gZGVmYXVsdFByb2plY3QucHJvamVjdFRpdGxlO1xuXG4vLyAgICAgcHJvamVjdERpdjIudGV4dENvbnRlbnQgPSBob2JiaWVzUHJvamVjdC5wcm9qZWN0VGl0bGU7XG5cbi8vICAgICAvLyB0aGlzIG5lZWRzIHRvIGJlIHJld3JpdHRlbiBiZWNhdXNlIGl0IHdpbGwgbm90IGJlIGRyeS5cblxuLy8gfVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRlc3RcIik7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnByb2plY3RUaXRsZTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XS50b0RvSXRlbXNbeV0udGl0bGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XSk7XG4gICAgICAgIC8vIHByb2plY3RzW3ldXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW3ldLnRvRG9JdGVtcyk7XG5cbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBwcm9qZWN0c1tpXS50b0RvSXRlbXMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuICAgICAgICAgICAgZGl2Mi5jbGFzc0xpc3QuYWRkKHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgICAgICBkaXYyLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIC8vIGRpdi5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICAgICAgLy8gZGl2Mi5jbGFzc0xpc3QuYWRkKHByb2plY3RzWzBdLnRvRG9JdGVtc1swXS50aXRsZSk7XG4gICAgICAgIC8vIGRpdjIudGV4dENvbnRlbnQgPSBwcm9qZWN0c1swXS50b0RvSXRlbXNbMF0udGl0bGU7IFxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzWzBdLnRvRG9JdGVtcy5sZW5ndGgpO1xuXG4gICAgLy8gZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0c1swXS50b0RvSXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocHJvamVjdHNbMF0udG9Eb0l0ZW1zW2pdLnRpdGxlKTtcbiAgICAvLyB9XG5cbiAgICAvLyBmb3IgKGxldCBrID0gMDsgayA8IHByb2plY3RzWzFdLnRvRG9JdGVtcy5sZW5ndGg7IGsrKykge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1sxXS50b0RvSXRlbXNba10udGl0bGUpO1xuICAgIC8vIH1cblxuICAgIC8vIGltcG9ydGFudDpcbiAgICAvLyBmb3IgKGxldCB5ID0gMDsgeSA8IHByb2plY3RzLmxlbmd0aDsgeSsrKSB7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW3ldLnRvRG9JdGVtc1t5XS50aXRsZSk7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW3ldKTtcbiAgICAvLyAgICAgLy8gcHJvamVjdHNbeV1cbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNbeV0udG9Eb0l0ZW1zKTtcblxuICAgIC8vICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHByb2plY3RzW3ldLnRvRG9JdGVtcy5sZW5ndGg7IGErKykge1xuICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coYSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gZm9yIChsZXQgeSA9IDA7IHkgPCBwcm9qZWN0cy5sZW5ndGg7IHkrKykge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XS50b0RvSXRlbXNbeV0udGl0bGUpO1xuICAgIC8vIH1cblxufVxuXG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfTtcblxuXG5cblxuXG4vLyBTb21ldGhpcyBsaWtlIHRoaXMgSSBiZWxpZXZlIGlzIGNvcnJlY3Q6XG4vLyBmb3IgKGxldCB5ID0gMDsgeSA8IHByb2plY3RzLmxlbmd0aDsgeSsrKSB7XG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNbeV0udG9Eb0l0ZW1zW3ldLnRpdGxlKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XSk7XG4vLyAgICAgLy8gcHJvamVjdHNbeV1cbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XS50b0RvSXRlbXMpO1xuXG4vLyAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBwcm9qZWN0c1t5XS50b0RvSXRlbXMubGVuZ3RoOyBhKyspIHtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coYSk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW3ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4vLyAgICAgfVxuLy8gfVxuXG5cblxuXG5cblxuLy9KdXN0IHNhdmluZyB0aGlzIGhlcmUgaW5jYXNlIEkgbmVlZCB0byBnbyBiYWNrOlxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4vLyAgICAgZGl2LmNsYXNzTGlzdC5hZGQocHJvamVjdHNbaV0ucHJvamVjdFRpdGxlKTtcbi8vICAgICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGU7XG5cbi8vICAgICAvLyBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICAvLyBkaXYuYXBwZW5kQ2hpbGQoZGl2Mik7XG4vLyAgICAgLy8gZGl2Mi5jbGFzc0xpc3QuYWRkKHByb2plY3RzWzBdLnRvRG9JdGVtc1swXS50aXRsZSk7XG4vLyAgICAgLy8gZGl2Mi50ZXh0Q29udGVudCA9IHByb2plY3RzWzBdLnRvRG9JdGVtc1swXS50aXRsZTsgXG4vLyB9XG5cblxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG5cbi8vICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4vLyAgICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIHByb2plY3RzRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcblxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRlc3RcIik7XG4vLyAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4vLyAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4vLyAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnByb2plY3RUaXRsZTtcbi8vICAgICB9XG5cbi8vIH1cblxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuXG4vLyAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuLy8gICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG5cbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcblxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuLy8gICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChkaXYpO1xuLy8gICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUpO1xuLy8gICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGU7XG5cbi8vICAgICAgICAgLy8gY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgICAgIC8vIGRpdi5hcHBlbmRDaGlsZChkaXYyKTtcbi8vICAgICAgICAgLy8gZGl2Mi5jbGFzc0xpc3QuYWRkKHByb2plY3RzWzBdLnRvRG9JdGVtc1swXS50aXRsZSk7XG4vLyAgICAgICAgIC8vIGRpdjIudGV4dENvbnRlbnQgPSBwcm9qZWN0c1swXS50b0RvSXRlbXNbMF0udGl0bGU7XG5cbi8vICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0cy5sZW5ndGg7IGorKykge1xuLy8gICAgICAgICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2Mik7XG4vLyAgICAgICAgICAgICAvLyBkaXYyLmNsYXNzTGlzdC5hZGQocHJvamVjdHNbaV0pXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhqKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lXCI7IC8vIEV4YW1wbGUgb2YgaG93IGFuIGltcG9ydCBzdGF0ZW1lbnQgc2hvdWxkIGxvb2suXG4vLyBpbXBvcnQgeyBUb0RvSXRlbSB9IGZyb20gXCIuL2FwcFwiO1xuLy8gaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgVG9Eb0l0ZW0sIFByb2plY3QsIGV4YW1wbGVUb0RvSXRlbSwgZXhhbXBsZVRvRG9JdGVtMiwgZXhhbXBsZVRvRG9JdGVtMywgZXhhbXBsZVRvRG9JdGVtNCwgd29ya1Byb2plY3QsIGhvYmJ5UHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9hcHBcIjtcbi8vIGltcG9ydCB7IHNvbWVWYXJpYWJsZSB9IGZyb20gXCIuL2FwcFwiO1xuLy8gaW1wb3J0IHsgdGVzdCB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmNvbnNvbGUubG9nKFRvRG9JdGVtKTtcbmNvbnNvbGUubG9nKFByb2plY3QpO1xuXG5jb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW0pO1xuY29uc29sZS5sb2coZXhhbXBsZVRvRG9JdGVtMik7XG5jb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW0zKTtcblxuY29uc29sZS5sb2cod29ya1Byb2plY3QpO1xuY29uc29sZS5sb2coaG9iYnlQcm9qZWN0KTtcblxuY29uc29sZS5sb2cocHJvamVjdHMpO1xuLy8gdGVzdCgpO1xuZGlzcGxheVByb2plY3RzKCk7XG5cblxuXG4vLyBsZXQgZXhhbXBsZVRvRG9JdGVtID0gbmV3IFRvRG9JdGVtKFwiU3R1ZHlcIiwgXCJTdHVkeSBoYXJkXCIsIFwiRGVjZW1iZXIgMSwgMjAyM1wiLCBcIkhpZ2hcIik7XG5cbi8vIGxldCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiRGVmYXVsdFwiKTtcblxuLy8gZGVmYXVsdFByb2plY3QudG9Eb0l0ZW1zLnB1c2goZXhhbXBsZVRvRG9JdGVtKTtcblxuLy8gY29uc29sZS5sb2coZXhhbXBsZVRvRG9JdGVtKTtcblxuLy8gY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuLy8gY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QudG9Eb0l0ZW1zWzBdKTtcblxuLy8gY29uc29sZS5sb2coc29tZVZhcmlhYmxlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=