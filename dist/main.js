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
/* harmony export */   defaultProject: () => (/* binding */ defaultProject),
/* harmony export */   exampleToDoItem: () => (/* binding */ exampleToDoItem),
/* harmony export */   exampleToDoItem2: () => (/* binding */ exampleToDoItem2),
/* harmony export */   exampleToDoItem3: () => (/* binding */ exampleToDoItem3),
/* harmony export */   hobbiesProject: () => (/* binding */ hobbiesProject)
/* harmony export */ });
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
// function test() {



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

    projectDiv.textContent = _app__WEBPACK_IMPORTED_MODULE_0__.defaultProject.projectTitle;

    projectDiv2.textContent = _app__WEBPACK_IMPORTED_MODULE_0__.hobbiesProject.projectTitle;

    // this needs to be rewritten

}



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

console.log(_app__WEBPACK_IMPORTED_MODULE_0__.defaultProject);
console.log(_app__WEBPACK_IMPORTED_MODULE_0__.hobbiesProject);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVk7QUFDWixZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENaOztBQUV1RDs7QUFFdkQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsWUFBWTs7QUFFWjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDZCQUE2QixnREFBYzs7QUFFM0MsOEJBQThCLGdEQUFjOztBQUU1Qzs7QUFFQTs7Ozs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSxZQUFZLE9BQU8sZUFBZTtBQUNsQyxZQUFZLFdBQVc7QUFDdkIsWUFBWSxVQUFVO0FBQ3lHO0FBQy9ILFlBQVksZUFBZTtBQUMzQixZQUFZLE9BQU87QUFDcUI7O0FBRXhDLFlBQVksMENBQVE7QUFDcEIsWUFBWSx5Q0FBTzs7QUFFbkIsWUFBWSxpREFBZTtBQUMzQixZQUFZLGtEQUFnQjtBQUM1QixZQUFZLGtEQUFnQjs7QUFFNUIsWUFBWSxnREFBYztBQUMxQixZQUFZLGdEQUFjO0FBQzFCO0FBQ0EscURBQWU7OztBQUdmOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXJyYXkgZm9yIHByb2plY3Qgb2JqZWN0c1xuLy8gcHJvamVjdHMgPSBbXTtcblxuY2xhc3MgVG9Eb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3RUaXRsZSkge1xuICAgICAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICB9XG5cbiAgICB0b0RvSXRlbXMgPSBbXTtcbn1cblxuLy8gbGV0IHNvbWVWYXJpYWJsZSA9IDU7XG5cbmxldCBleGFtcGxlVG9Eb0l0ZW0gPSBuZXcgVG9Eb0l0ZW0oXCJFbWFpbFwiLCBcIlJlYWQgZW1haWxzXCIsIFwiRGVjZW1iZXIgMSwgMjAyM1wiLCBcIk1lZGl1bVwiKTtcbmxldCBleGFtcGxlVG9Eb0l0ZW0yID0gbmV3IFRvRG9JdGVtKFwiUHJvZ3JhbVwiLCBcIkNvbXB1dGVyIHByb2dyYW1taW5nXCIsIFwiRGVjZW1iZXIgMSwgMjAyM1wiLCBcIkhpZ2hcIik7XG5cbmxldCBleGFtcGxlVG9Eb0l0ZW0zID0gbmV3IFRvRG9JdGVtKFwiUGxheSBHdWl0YXJcIiwgXCJQcmFjdGljZSBndWl0YXJcIiwgXCJEZWNlbWJlciAxLCAyMDIzXCIsIFwiTG93XCIpO1xuXG5sZXQgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIldvcmtcIik7XG5sZXQgaG9iYmllc1Byb2plY3QgPSBuZXcgUHJvamVjdChcIkhvYmJpZXNcIik7XG5cbmRlZmF1bHRQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbSk7XG5kZWZhdWx0UHJvamVjdC50b0RvSXRlbXMucHVzaChleGFtcGxlVG9Eb0l0ZW0yKTtcblxuLy8gZXhwb3J0IHsgVG9Eb0l0ZW0sIFByb2plY3QsIHNvbWVWYXJpYWJsZSB9O1xuLy8gZXhwb3J0IHsgVG9Eb0l0ZW0sIFByb2plY3QgfTtcbmV4cG9ydCB7IFRvRG9JdGVtLCBQcm9qZWN0LCBleGFtcGxlVG9Eb0l0ZW0sIGV4YW1wbGVUb0RvSXRlbTIsIGV4YW1wbGVUb0RvSXRlbTMsIGRlZmF1bHRQcm9qZWN0LCBob2JiaWVzUHJvamVjdCB9OyIsIi8vIGZ1bmN0aW9uIHRlc3QoKSB7XG5cbmltcG9ydCB7IGRlZmF1bHRQcm9qZWN0LCBob2JiaWVzUHJvamVjdCB9IGZyb20gXCIuL2FwcFwiO1xuXG4vLyAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuLy8gICAgIGNvbnN0IHRlc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVzdFwiKTtcblxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGVzdERpdik7XG5cbi8vICAgICB0ZXN0RGl2LnRleHRDb250ZW50ID0gXCJ0ZXN0XCI7XG5cbi8vIH1cblxuLy8gZXhwb3J0IHsgdGVzdCB9O1xuXG4vL3Bvc3NpYmx5IGNoYW5nZSBuYW1lIG9mIHRoaXMgZnVuY3Rpb24gZGlzcGxheVByb2plY3QuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7IFxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvamVjdC1kaXZcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0RGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcm9qZWN0LWRpdjJcIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2Mik7XG5cbiAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gZGVmYXVsdFByb2plY3QucHJvamVjdFRpdGxlO1xuXG4gICAgcHJvamVjdERpdjIudGV4dENvbnRlbnQgPSBob2JiaWVzUHJvamVjdC5wcm9qZWN0VGl0bGU7XG5cbiAgICAvLyB0aGlzIG5lZWRzIHRvIGJlIHJld3JpdHRlblxuXG59XG5cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjsgLy8gRXhhbXBsZSBvZiBob3cgYW4gaW1wb3J0IHN0YXRlbWVudCBzaG91bGQgbG9vay5cbi8vIGltcG9ydCB7IFRvRG9JdGVtIH0gZnJvbSBcIi4vYXBwXCI7XG4vLyBpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBUb0RvSXRlbSwgUHJvamVjdCwgZXhhbXBsZVRvRG9JdGVtLCBleGFtcGxlVG9Eb0l0ZW0yLCBleGFtcGxlVG9Eb0l0ZW0zLCBkZWZhdWx0UHJvamVjdCwgaG9iYmllc1Byb2plY3QgfSBmcm9tIFwiLi9hcHBcIjtcbi8vIGltcG9ydCB7IHNvbWVWYXJpYWJsZSB9IGZyb20gXCIuL2FwcFwiO1xuLy8gaW1wb3J0IHsgdGVzdCB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmNvbnNvbGUubG9nKFRvRG9JdGVtKTtcbmNvbnNvbGUubG9nKFByb2plY3QpO1xuXG5jb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW0pO1xuY29uc29sZS5sb2coZXhhbXBsZVRvRG9JdGVtMik7XG5jb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW0zKTtcblxuY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuY29uc29sZS5sb2coaG9iYmllc1Byb2plY3QpO1xuLy8gdGVzdCgpO1xuZGlzcGxheVByb2plY3RzKCk7XG5cblxuLy8gbGV0IGV4YW1wbGVUb0RvSXRlbSA9IG5ldyBUb0RvSXRlbShcIlN0dWR5XCIsIFwiU3R1ZHkgaGFyZFwiLCBcIkRlY2VtYmVyIDEsIDIwMjNcIiwgXCJIaWdoXCIpO1xuXG4vLyBsZXQgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIik7XG5cbi8vIGRlZmF1bHRQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbSk7XG5cbi8vIGNvbnNvbGUubG9nKGV4YW1wbGVUb0RvSXRlbSk7XG5cbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LnRvRG9JdGVtc1swXSk7XG5cbi8vIGNvbnNvbGUubG9nKHNvbWVWYXJpYWJsZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9