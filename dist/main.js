/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.content {
    display: flex;
}

.projects {
    display: flex;
    padding: 1rem;
    gap: 2rem;
}

.to-do-item-container {
    margin: 1rem;
}

/* form {
    display: flex;
    flex-direction: column;
    width: 10rem;
} */

.button-container {
    display: flex;
    flex-direction: column;
}

.project-form {
    margin: 1rem;
}

.projects > div {
    width: 12rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;;;;GAIG;;AAEH;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB","sourcesContent":[".content {\n    display: flex;\n}\n\n.projects {\n    display: flex;\n    padding: 1rem;\n    gap: 2rem;\n}\n\n.to-do-item-container {\n    margin: 1rem;\n}\n\n/* form {\n    display: flex;\n    flex-direction: column;\n    width: 10rem;\n} */\n\n.button-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-form {\n    margin: 1rem;\n}\n\n.projects > div {\n    width: 12rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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




/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewProject: () => (/* binding */ addNewProject),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
// import { projects, deleteToDoItemFunction, createNewToDo } from './app';


function displayProjects() {
  const content = document.querySelector('.content');

  const projectsDiv = document.createElement('div');
  projectsDiv.classList.add('projects');

  content.appendChild(projectsDiv);

  for (let i = 0; i < _app__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
    const div = document.createElement('div');
    projectsDiv.appendChild(div);
    div.classList.add(_app__WEBPACK_IMPORTED_MODULE_0__.projects[i].projectTitle);
    div.textContent = 'Project: ' + _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].projectTitle;

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

    for (let a = 0; a < _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems.length; a++) {
      const toDoItemContainer = document.createElement('div');
      toDoItemContainer.classList.add(_app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].title);
      toDoItemContainer.classList.add('to-do-item-container');
      div.appendChild(toDoItemContainer);

      const titleDiv = document.createElement('div');
      toDoItemContainer.appendChild(titleDiv);
      titleDiv.classList.add('title');
      titleDiv.textContent = 'Title: ' + _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].title;

      const descriptionDiv = document.createElement('div');
      toDoItemContainer.appendChild(descriptionDiv);
      descriptionDiv.classList.add('description');
      descriptionDiv.textContent =
        'Description: ' + _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].description;

      const dueDateDiv = document.createElement('div');
      toDoItemContainer.appendChild(dueDateDiv);
      dueDateDiv.classList.add('due-date');
      dueDateDiv.textContent = 'Due Date: ' + _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].dueDate;

      const priorityDiv = document.createElement('div');
      toDoItemContainer.appendChild(priorityDiv);
      priorityDiv.classList.add('priority');
      priorityDiv.textContent =
        'Priority: ' + _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].priority;

      const deleteToDoItemButton = document.createElement('button');
      deleteToDoItemButton.classList.add('delete-to-do-item-button');
      deleteToDoItemButton.classList.add(_app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].title);
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");

// import { home } from "./home"; // Example of how an import statement should look.
// import { ToDoItem } from "./app";
// import { Project } from "./app";
// import { ToDoItem, Project, exampleToDoItem, exampleToDoItem2, exampleToDoItem3, exampleToDoItem4, workProject, hobbyProject, projects } from "./app";
// import { someVariable } from "./app";
// import { test } from "./dom";
// import { displayProjects, addNewProject } from "./dom";


// console.log(ToDoItem);
// console.log(Project);

// console.log(exampleToDoItem);
// console.log(exampleToDoItem2);
// console.log(exampleToDoItem3);
// console.log(exampleToDoItem4);

// console.log(workProject);
// console.log(hobbyProject);

// console.log(projects);
// test();
// addProject();
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
// addNewProject();

// const newProjectButtonQuerySelector = document.querySelector('#submit');

// newProjectButtonQuerySelector.addEventListener('click', addNewProject);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBZTtBQUNmOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZ2FwOiAycmVtO1xufVxuXG4udG8tZG8taXRlbS1jb250YWluZXIge1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLyogZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMHJlbTtcbn0gKi9cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3QtZm9ybSB7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4ucHJvamVjdHMgPiBkaXYge1xuICAgIHdpZHRoOiAxMnJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzs7O0dBSUc7O0FBRUg7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi50by1kby1pdGVtLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLyogZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMHJlbTtcXG59ICovXFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgPiBkaXYge1xcbiAgICB3aWR0aDogMTJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi9kb21cIjtcblxuLy8gQXJyYXkgZm9yIHByb2plY3Qgb2JqZWN0c1xubGV0IHByb2plY3RzID0gW107XG5cbmNsYXNzIFRvRG9JdGVtIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RUaXRsZSkge1xuICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xuICB9XG5cbiAgdG9Eb0l0ZW1zID0gW107XG59XG5cbi8vIGxldCBzb21lVmFyaWFibGUgPSA1O1xuXG5sZXQgZXhhbXBsZVRvRG9JdGVtID0gbmV3IFRvRG9JdGVtKFxuICAnRW1haWwnLFxuICAnUmVhZCBlbWFpbHMnLFxuICAnRGVjZW1iZXIgMSwgMjAyMycsXG4gICdNZWRpdW0nXG4pO1xubGV0IGV4YW1wbGVUb0RvSXRlbTIgPSBuZXcgVG9Eb0l0ZW0oXG4gICdQcm9ncmFtJyxcbiAgJ0NvbXB1dGVyIHByb2dyYW1taW5nJyxcbiAgJ0RlY2VtYmVyIDEsIDIwMjMnLFxuICAnSGlnaCdcbik7XG5cbmxldCBleGFtcGxlVG9Eb0l0ZW0zID0gbmV3IFRvRG9JdGVtKFxuICAnR3VpdGFyJyxcbiAgJ1ByYWN0aWNlIGd1aXRhcicsXG4gICdEZWNlbWJlciAxLCAyMDIzJyxcbiAgJ0xvdydcbik7XG5sZXQgZXhhbXBsZVRvRG9JdGVtNCA9IG5ldyBUb0RvSXRlbShcbiAgJ0V4ZXJjaXNlJyxcbiAgJ0dvIHRvIGd5bScsXG4gICdEZWNlbWJlciAxLCAyMDIzJyxcbiAgJ0xvdydcbik7XG5cbmxldCB3b3JrUHJvamVjdCA9IG5ldyBQcm9qZWN0KCdXb3JrJyk7XG5sZXQgaG9iYnlQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0hvYmJpZXMnKTtcblxud29ya1Byb2plY3QudG9Eb0l0ZW1zLnB1c2goZXhhbXBsZVRvRG9JdGVtKTtcbndvcmtQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbTIpO1xuXG5ob2JieVByb2plY3QudG9Eb0l0ZW1zLnB1c2goZXhhbXBsZVRvRG9JdGVtMyk7XG5ob2JieVByb2plY3QudG9Eb0l0ZW1zLnB1c2goZXhhbXBsZVRvRG9JdGVtNCk7XG5cbnByb2plY3RzLnB1c2god29ya1Byb2plY3QpO1xucHJvamVjdHMucHVzaChob2JieVByb2plY3QpO1xuXG4vLyBmdW5jdGlvbiBkZWxldGVUb0RvSXRlbUZ1bmN0aW9uKCkge1xuXG4vLyAgICAgLy8gdG9Eb0l0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1swXS50b0RvSXRlbXNbMF0udGl0bGUpO1xuXG4vLyAgICAgLy8gaG9iYnlQcm9qZWN0LnRvRG9JdGVtcy5wb3AoKTtcbi8vICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGhvYmJ5UHJvamVjdC50b0RvSXRlbXMubGVuZ3RoOyBpKyspIHtcblxuLy8gICAgIC8vIH1cbi8vICAgICAvLyBjb25zdCBidXR0b25RdWVyeVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGVsZXRlLXRvLWRvLWl0ZW0tYnV0dG9uJyk7XG4vLyAgICAgLy8gY29uc3QgdG9Eb0l0ZW1UaXRsZVF1ZXJ5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFRvRG9JdGVtLnRpdGxlKTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbi8vICAgICAvLyBhbGVydChcImhpXCIpO1xuLy8gICAgIC8vIGNvbnN0IGluZGV4ID0gYXJyYXkuaW5kZXhPZigpO1xuLy8gICAgIC8vIGlmIChpbmRleCA+IC0xKSB7IC8vIG9ubHkgc3BsaWNlIGFycmF5IHdoZW4gaXRlbSBpcyBmb3VuZFxuLy8gICAgIC8vICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpOyAvLyAybmQgcGFyYW1ldGVyIG1lYW5zIHJlbW92ZSBvbmUgaXRlbSBvbmx5XG4vLyAgICAgLy8gfVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVOZXdUb0RvKCkge1xuLy8gICAgIC8vIGFsZXJ0KFwiaGlcIik7XG4vLyAgICAgbGV0IGV4YW1wbGVUb0RvSXRlbTUgPSBuZXcgVG9Eb0l0ZW0oXCJUZXN0XCIsIFwiVGVzdGluZyBlbWFpbHNcIiwgXCJEZWNlbWJlciAxLCAyMDIzXCIsIFwiSGlnaFwiKTtcbi8vICAgICB3b3JrUHJvamVjdC50b0RvSXRlbXMucHVzaChleGFtcGxlVG9Eb0l0ZW01KTtcbi8vICAgICAvLyBwcm9qZWN0cy5wdXNoKHdvcmtQcm9qZWN0KTsgLy90aGlzIG1lc3NlcyBpdCB1cCBmb3Igc29tZSByZWFzb25cbi8vICAgICBjb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW01KTtcbi8vICAgICAvLyBkaXNwbGF5UHJvamVjdHMoKTsgLy9NYXliZSBzb21ldGhpbmcgc2ltaWxhciB0byB0aGlzPz8gLy9Tb21ldGhpbmcgdGhhdCBjbGVhcnMgRE9NIHRvbz8/P1xuLy8gICAgIC8vIGNsZWFyKCk7XG4vLyAgICAgZGlzcGxheVByb2plY3RzKCk7XG4vLyAgICAgY2xlYXIoKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gY2xlYXIoKSB7XG4vLyAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4vLyAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbi8vICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHByb2plY3RzKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCgpIHtcbi8vICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Byb2plY3RzJyk7XG4vLyAgICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIG5ld1Byb2plY3REaXYudGV4dENvbnRlbnQgPSAndGVzdCc7XG4vLyAgICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGRlbGV0ZVRvRG9JdGVtKCkge1xuXG4vLyB9XG5cbi8vIGV4cG9ydCB7IFRvRG9JdGVtLCBQcm9qZWN0LCBzb21lVmFyaWFibGUgfTtcbi8vIGV4cG9ydCB7IFRvRG9JdGVtLCBQcm9qZWN0IH07XG5cbi8vIGV4cG9ydCB7XG4vLyAgICAgVG9Eb0l0ZW0sIFByb2plY3QsIGV4YW1wbGVUb0RvSXRlbSwgZXhhbXBsZVRvRG9JdGVtMiwgZXhhbXBsZVRvRG9JdGVtMywgZXhhbXBsZVRvRG9JdGVtNCwgd29ya1Byb2plY3QsIGhvYmJ5UHJvamVjdCwgcHJvamVjdHMsXG4vLyAgICAgZGVsZXRlVG9Eb0l0ZW1GdW5jdGlvbiwgY3JlYXRlTmV3VG9EbywgY2xlYXIsIGNyZWF0ZU5ld1Byb2plY3Rcbi8vIH07XG5cbi8vIGV4cG9ydCB7XG4vLyAgICAgVG9Eb0l0ZW0sIFByb2plY3QsIGV4YW1wbGVUb0RvSXRlbSwgZXhhbXBsZVRvRG9JdGVtMiwgZXhhbXBsZVRvRG9JdGVtMywgZXhhbXBsZVRvRG9JdGVtNCwgd29ya1Byb2plY3QsIGhvYmJ5UHJvamVjdCwgcHJvamVjdHMsXG4vLyAgICAgY3JlYXRlTmV3VG9EbywgY2xlYXIsIGNyZWF0ZU5ld1Byb2plY3Rcbi8vIH07XG5cbi8vIGV4cG9ydCB7XG4vLyAgICAgVG9Eb0l0ZW0sIFByb2plY3QsIGV4YW1wbGVUb0RvSXRlbSwgZXhhbXBsZVRvRG9JdGVtMiwgZXhhbXBsZVRvRG9JdGVtMywgZXhhbXBsZVRvRG9JdGVtNCwgd29ya1Byb2plY3QsIGhvYmJ5UHJvamVjdCwgcHJvamVjdHMsXG4vLyAgICAgY3JlYXRlTmV3VG9EbywgY2xlYXJcbi8vIH07XG5cbi8vIGV4cG9ydCB7XG4vLyAgICAgVG9Eb0l0ZW0sIFByb2plY3QsIGV4YW1wbGVUb0RvSXRlbSwgZXhhbXBsZVRvRG9JdGVtMiwgZXhhbXBsZVRvRG9JdGVtMywgZXhhbXBsZVRvRG9JdGVtNCwgd29ya1Byb2plY3QsIGhvYmJ5UHJvamVjdCwgcHJvamVjdHMsIGNsZWFyXG4vLyB9O1xuXG5leHBvcnQge1xuICBUb0RvSXRlbSxcbiAgUHJvamVjdCxcbiAgZXhhbXBsZVRvRG9JdGVtLFxuICBleGFtcGxlVG9Eb0l0ZW0yLFxuICBleGFtcGxlVG9Eb0l0ZW0zLFxuICBleGFtcGxlVG9Eb0l0ZW00LFxuICB3b3JrUHJvamVjdCxcbiAgaG9iYnlQcm9qZWN0LFxuICBwcm9qZWN0cyxcbn07XG4iLCIvLyBpbXBvcnQgeyBwcm9qZWN0cywgZGVsZXRlVG9Eb0l0ZW1GdW5jdGlvbiwgY3JlYXRlTmV3VG9EbyB9IGZyb20gJy4vYXBwJztcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9hcHAnO1xuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RzRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQocHJvamVjdHNbaV0ucHJvamVjdFRpdGxlKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSAnUHJvamVjdDogJyArIHByb2plY3RzW2ldLnByb2plY3RUaXRsZTtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJyk7XG5cbiAgICBkaXYuYXBwZW5kKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBhZGRUb0RvSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRvRG9JdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10by1kby1pdGVtLWJ1dHRvbicpO1xuICAgIGFkZFRvRG9JdGVtQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCB0by1kbyBpdGVtJztcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoYWRkVG9Eb0l0ZW1CdXR0b24pO1xuXG4gICAgLy8gYWRkVG9Eb0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdUb0RvKTtcbiAgICBhZGRUb0RvSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvRG9JdGVtQW5kQ2xlYXJGb3JtKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1RvRG8oKSB7XG4gICAgICAvLyBhbGVydCgndGVzdCcpO1xuICAgICAgY29uc3QgY3JlYXRlZE5ld1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIC8vIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVkTmV3VG9Ebyk7XG5cbiAgICAgIC8vIGNyZWF0ZWROZXdUb0RvLnRleHRDb250ZW50ID0gJ3Rlc3QnO1xuICAgICAgLy8gY3JlYXRlZE5ld1RvRG8gPVxuICAgICAgY29uc3QgdG9Eb0l0ZW1UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgdG9Eb0l0ZW1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgbGV0IHRpdGxlT2ZUb0RvSXRlbSA9IHRvRG9JdGVtVGl0bGUudmFsdWU7XG4gICAgICB0b0RvSXRlbVRpdGxlRGl2LnRleHRDb250ZW50ID0gJ1RpdGxlOiAnICsgdGl0bGVPZlRvRG9JdGVtO1xuXG4gICAgICBjb25zdCB0b0RvSXRlbURlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCB0b0RvSXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgICBsZXQgZGVzY3JpcHRpb25PZlRvRG9JdGVtID0gdG9Eb0l0ZW1EZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgIHRvRG9JdGVtRGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPVxuICAgICAgICAnRGVzY3JpcHRpb246ICcgKyBkZXNjcmlwdGlvbk9mVG9Eb0l0ZW07XG5cbiAgICAgIGNvbnN0IHRvRG9JdGVtRHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgdG9Eb0l0ZW1EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUnKTtcbiAgICAgIGxldCBkdWVEYXRlT2ZUb0RvSXRlbSA9IHRvRG9JdGVtRHVlRGF0ZS52YWx1ZTtcbiAgICAgIHRvRG9JdGVtRHVlRGF0ZURpdi50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTogJyArIGR1ZURhdGVPZlRvRG9JdGVtO1xuXG4gICAgICBjb25zdCB0b0RvSXRlbVByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCB0b0RvSXRlbVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgICBsZXQgcHJpb3JpdHlPZlRvRG9JdGVtID0gdG9Eb0l0ZW1Qcmlvcml0eS52YWx1ZTtcbiAgICAgIHRvRG9JdGVtUHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICcgKyBwcmlvcml0eU9mVG9Eb0l0ZW07XG5cbiAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtVGl0bGVEaXYpO1xuICAgICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQodG9Eb0l0ZW1EZXNjcmlwdGlvbkRpdik7XG4gICAgICBjcmVhdGVkTmV3VG9Eby5hcHBlbmRDaGlsZCh0b0RvSXRlbUR1ZURhdGVEaXYpO1xuICAgICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQodG9Eb0l0ZW1Qcmlvcml0eURpdik7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZVRvRG9JdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdG8tZG8taXRlbS1idXR0b24nKTtcbiAgICAgIC8vIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTsgICAvL3RoaXMgcHJvYmFibHkgbmVlZHMgdG8gYmUgbW9kaWZpZWQgdG8gc29tZXRoaW5nIHNpbWlsYXIgdG8gYmUgdXNlZFxuICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIHRvLWRvIGl0ZW0nO1xuXG4gICAgICBjcmVhdGVkTmV3VG9Eby5hcHBlbmRDaGlsZChkZWxldGVUb0RvSXRlbUJ1dHRvbik7XG5cbiAgICAgIGNyZWF0ZWROZXdUb0RvLmNsYXNzTGlzdC5hZGQodGl0bGVPZlRvRG9JdGVtKTtcbiAgICAgIGNyZWF0ZWROZXdUb0RvLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWl0ZW0tY29udGFpbmVyJyk7XG5cbiAgICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVkTmV3VG9Ebyk7XG5cbiAgICAgIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9Eb0l0ZW1GdW5jdGlvbik7XG5cbiAgICAgIGZ1bmN0aW9uIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgIC8vIGFsZXJ0KHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgIC8vIGFsZXJ0KHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4gICAgICAgIC8vIHByb2plY3RzW2ldLnByb2plY3RUaXRsZS5yZW1vdmVDaGlsZChwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAvLyBjb25zdCBzb21ldGhpbmcwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzb21ldGhpbmcwKTtcbiAgICAgICAgLy8gY29uc3Qgc29tZXRoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUpO1xuICAgICAgICAvLyBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChzb21ldGhpbmcpO1xuICAgICAgICAvLyBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZCh0b0RvSXRlbUNvbnRhaW5lcik7XG4gICAgICAgIGRpdi5yZW1vdmVDaGlsZChjcmVhdGVkTmV3VG9Ebyk7IC8vIHRoaXMgZG9lcyBub3QgZGVsZXRlIHRoZSBvYmplY3QuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QtYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgcHJvamVjdCc7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3RGdW5jdGlvbik7XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RnVuY3Rpb24oKSB7XG4gICAgICAvLyBhbGVydCgndGVzdCcpO1xuICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IHByb2plY3RzW2ldLnRvRG9JdGVtcy5sZW5ndGg7IGErKykge1xuICAgICAgY29uc3QgdG9Eb0l0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvRG9JdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbiAgICAgIHRvRG9JdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWl0ZW0tY29udGFpbmVyJyk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodG9Eb0l0ZW1Db250YWluZXIpO1xuXG4gICAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9Eb0l0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gJ1RpdGxlOiAnICsgcHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlO1xuXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9Eb0l0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICAgICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID1cbiAgICAgICAgJ0Rlc2NyaXB0aW9uOiAnICsgcHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLmRlc2NyaXB0aW9uO1xuXG4gICAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b0RvSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcbiAgICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICcgKyBwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0uZHVlRGF0ZTtcblxuICAgICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvRG9JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcbiAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9XG4gICAgICAgICdQcmlvcml0eTogJyArIHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS5wcmlvcml0eTtcblxuICAgICAgY29uc3QgZGVsZXRlVG9Eb0l0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10by1kby1pdGVtLWJ1dHRvbicpO1xuICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIHRvLWRvIGl0ZW0nO1xuXG4gICAgICB0b0RvSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVUb0RvSXRlbUJ1dHRvbik7XG5cbiAgICAgIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9Eb0l0ZW1GdW5jdGlvbik7XG5cbiAgICAgIGZ1bmN0aW9uIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgIC8vIGFsZXJ0KHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgIC8vIGFsZXJ0KHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4gICAgICAgIC8vIHByb2plY3RzW2ldLnByb2plY3RUaXRsZS5yZW1vdmVDaGlsZChwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAvLyBjb25zdCBzb21ldGhpbmcwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzb21ldGhpbmcwKTtcbiAgICAgICAgLy8gY29uc3Qgc29tZXRoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUpO1xuICAgICAgICAvLyBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChzb21ldGhpbmcpO1xuICAgICAgICAvLyBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZCh0b0RvSXRlbUNvbnRhaW5lcik7XG4gICAgICAgIGRpdi5yZW1vdmVDaGlsZCh0b0RvSXRlbUNvbnRhaW5lcik7IC8vIHRoaXMgZG9lcyBub3QgZGVsZXRlIHRoZSBvYmplY3QuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJBZGRUb0RvSXRlbUZvcm0oKSB7XG4gICAgICBjb25zdCB0b0RvSXRlbVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICBjb25zdCB0b0RvSXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgICBjb25zdCB0b0RvSXRlbUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpO1xuICAgICAgY29uc3QgdG9Eb0l0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgICAgdG9Eb0l0ZW1UaXRsZS52YWx1ZSA9ICcnO1xuICAgICAgdG9Eb0l0ZW1EZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgdG9Eb0l0ZW1EdWVEYXRlLnZhbHVlID0gJyc7XG4gICAgICB0b0RvSXRlbVByaW9yaXR5LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9Eb0l0ZW1BbmRDbGVhckZvcm0oKSB7XG4gICAgICBjcmVhdGVOZXdUb0RvKCk7XG4gICAgICBjbGVhckFkZFRvRG9JdGVtRm9ybSgpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uUXVlcnlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcblxubmV3UHJvamVjdEJ1dHRvblF1ZXJ5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ2NsaWNrJyxcbiAgYWRkTmV3UHJvamVjdEFuZENsZWFyTmV3UHJvamVjdEZvcm1cbik7XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3RzUXVlcnlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCB0aXRsZU9mTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XG5cbiAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKHRpdGxlT2ZOZXdQcm9qZWN0LnZhbHVlKTtcblxuICBuZXdQcm9qZWN0RGl2LnRleHRDb250ZW50ID0gJ1Byb2plY3Q6ICcgKyB0aXRsZU9mTmV3UHJvamVjdC52YWx1ZTtcblxuICBwcm9qZWN0c1F1ZXJ5U2VsZWN0b3IuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJyk7XG5cbiAgbmV3UHJvamVjdERpdi5hcHBlbmQoYnV0dG9uQ29udGFpbmVyKTtcblxuICBjb25zdCBhZGRUb0RvSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUb0RvSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdG8tZG8taXRlbS1idXR0b24nKTtcbiAgYWRkVG9Eb0l0ZW1CdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIHRvLWRvIGl0ZW0nO1xuXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoYWRkVG9Eb0l0ZW1CdXR0b24pO1xuXG4gIC8vIGFkZFRvRG9JdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3VG9Ebyk7XG4gIGFkZFRvRG9JdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9Eb0l0ZW1BbmRDbGVhckZvcm0pO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1RvRG8oKSB7XG4gICAgY29uc3QgY3JlYXRlZE5ld1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHRvRG9JdGVtVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b0RvSXRlbVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgbGV0IHRpdGxlT2ZUb0RvSXRlbSA9IHRvRG9JdGVtVGl0bGUudmFsdWU7XG4gICAgdG9Eb0l0ZW1UaXRsZURpdi50ZXh0Q29udGVudCA9ICdUaXRsZTogJyArIHRpdGxlT2ZUb0RvSXRlbTtcblxuICAgIGNvbnN0IHRvRG9JdGVtRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b0RvSXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgbGV0IGRlc2NyaXB0aW9uT2ZUb0RvSXRlbSA9IHRvRG9JdGVtRGVzY3JpcHRpb24udmFsdWU7XG4gICAgdG9Eb0l0ZW1EZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9XG4gICAgICAnRGVzY3JpcHRpb246ICcgKyBkZXNjcmlwdGlvbk9mVG9Eb0l0ZW07XG5cbiAgICBjb25zdCB0b0RvSXRlbUR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b0RvSXRlbUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpO1xuICAgIGxldCBkdWVEYXRlT2ZUb0RvSXRlbSA9IHRvRG9JdGVtRHVlRGF0ZS52YWx1ZTtcbiAgICB0b0RvSXRlbUR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICcgKyBkdWVEYXRlT2ZUb0RvSXRlbTtcblxuICAgIGNvbnN0IHRvRG9JdGVtUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b0RvSXRlbVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgbGV0IHByaW9yaXR5T2ZUb0RvSXRlbSA9IHRvRG9JdGVtUHJpb3JpdHkudmFsdWU7XG4gICAgdG9Eb0l0ZW1Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJyArIHByaW9yaXR5T2ZUb0RvSXRlbTtcblxuICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtVGl0bGVEaXYpO1xuICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtRGVzY3JpcHRpb25EaXYpO1xuICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtRHVlRGF0ZURpdik7XG4gICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQodG9Eb0l0ZW1Qcmlvcml0eURpdik7XG5cbiAgICBjb25zdCBkZWxldGVUb0RvSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10by1kby1pdGVtLWJ1dHRvbicpO1xuICAgIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSB0by1kbyBpdGVtJztcblxuICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKGRlbGV0ZVRvRG9JdGVtQnV0dG9uKTtcblxuICAgIGNyZWF0ZWROZXdUb0RvLmNsYXNzTGlzdC5hZGQodGl0bGVPZlRvRG9JdGVtKTtcbiAgICBjcmVhdGVkTmV3VG9Eby5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtLWNvbnRhaW5lcicpO1xuXG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVkTmV3VG9Ebyk7XG5cbiAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9Eb0l0ZW1GdW5jdGlvbigpIHtcbiAgICAgIG5ld1Byb2plY3REaXYucmVtb3ZlQ2hpbGQoY3JlYXRlZE5ld1RvRG8pOyAvLyB0aGlzIGRvZXMgbm90IGRlbGV0ZSB0aGUgb2JqZWN0LlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idXR0b24nKTtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgcHJvamVjdCc7XG5cbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvamVjdEZ1bmN0aW9uKTtcblxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RnVuY3Rpb24oKSB7XG4gICAgLy8gYWxlcnQoJ3Rlc3QnKTtcbiAgICAvLyBuZXdQcm9qZWN0RGl2LnJlbW92ZUNoaWxkKGRpdik7XG4gICAgLy8gY29uc3QgbmV3UHJvamVjdEJ1dHRvblF1ZXJ5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChuZXdQcm9qZWN0RGl2KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQWRkVG9Eb0l0ZW1Gb3JtKCkge1xuICAgIGNvbnN0IHRvRG9JdGVtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICBjb25zdCB0b0RvSXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdG9Eb0l0ZW1EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUnKTtcbiAgICBjb25zdCB0b0RvSXRlbVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgdG9Eb0l0ZW1UaXRsZS52YWx1ZSA9ICcnO1xuICAgIHRvRG9JdGVtRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICB0b0RvSXRlbUR1ZURhdGUudmFsdWUgPSAnJztcbiAgICB0b0RvSXRlbVByaW9yaXR5LnZhbHVlID0gJyc7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0RvSXRlbUFuZENsZWFyRm9ybSgpIHtcbiAgICBjcmVhdGVOZXdUb0RvKCk7XG4gICAgY2xlYXJBZGRUb0RvSXRlbUZvcm0oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhck5ld1Byb2plY3RGb3JtKCkge1xuICBjb25zdCB0aXRsZU9mTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XG4gIHRpdGxlT2ZOZXdQcm9qZWN0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RBbmRDbGVhck5ld1Byb2plY3RGb3JtKCkge1xuICBhZGROZXdQcm9qZWN0KCk7XG4gIGNsZWFyTmV3UHJvamVjdEZvcm0oKTtcbn1cblxuLy8gZXhwb3J0IHsgZGlzcGxheVByb2plY3RzIH07XG4vLyBleHBvcnQgeyBkaXNwbGF5UHJvamVjdHMsIGFkZFByb2plY3QgfTtcbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0cywgYWRkTmV3UHJvamVjdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBpbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZVwiOyAvLyBFeGFtcGxlIG9mIGhvdyBhbiBpbXBvcnQgc3RhdGVtZW50IHNob3VsZCBsb29rLlxuLy8gaW1wb3J0IHsgVG9Eb0l0ZW0gfSBmcm9tIFwiLi9hcHBcIjtcbi8vIGltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9hcHBcIjtcbi8vIGltcG9ydCB7IFRvRG9JdGVtLCBQcm9qZWN0LCBleGFtcGxlVG9Eb0l0ZW0sIGV4YW1wbGVUb0RvSXRlbTIsIGV4YW1wbGVUb0RvSXRlbTMsIGV4YW1wbGVUb0RvSXRlbTQsIHdvcmtQcm9qZWN0LCBob2JieVByb2plY3QsIHByb2plY3RzIH0gZnJvbSBcIi4vYXBwXCI7XG4vLyBpbXBvcnQgeyBzb21lVmFyaWFibGUgfSBmcm9tIFwiLi9hcHBcIjtcbi8vIGltcG9ydCB7IHRlc3QgfSBmcm9tIFwiLi9kb21cIjtcbi8vIGltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cywgYWRkTmV3UHJvamVjdCB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9kb20nO1xuXG4vLyBjb25zb2xlLmxvZyhUb0RvSXRlbSk7XG4vLyBjb25zb2xlLmxvZyhQcm9qZWN0KTtcblxuLy8gY29uc29sZS5sb2coZXhhbXBsZVRvRG9JdGVtKTtcbi8vIGNvbnNvbGUubG9nKGV4YW1wbGVUb0RvSXRlbTIpO1xuLy8gY29uc29sZS5sb2coZXhhbXBsZVRvRG9JdGVtMyk7XG4vLyBjb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW00KTtcblxuLy8gY29uc29sZS5sb2cod29ya1Byb2plY3QpO1xuLy8gY29uc29sZS5sb2coaG9iYnlQcm9qZWN0KTtcblxuLy8gY29uc29sZS5sb2cocHJvamVjdHMpO1xuLy8gdGVzdCgpO1xuLy8gYWRkUHJvamVjdCgpO1xuZGlzcGxheVByb2plY3RzKCk7XG4vLyBhZGROZXdQcm9qZWN0KCk7XG5cbi8vIGNvbnN0IG5ld1Byb2plY3RCdXR0b25RdWVyeVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuXG4vLyBuZXdQcm9qZWN0QnV0dG9uUXVlcnlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Byb2plY3QpO1xuXG4vLyBsZXQgZXhhbXBsZVRvRG9JdGVtID0gbmV3IFRvRG9JdGVtKFwiU3R1ZHlcIiwgXCJTdHVkeSBoYXJkXCIsIFwiRGVjZW1iZXIgMSwgMjAyM1wiLCBcIkhpZ2hcIik7XG5cbi8vIGxldCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiRGVmYXVsdFwiKTtcblxuLy8gZGVmYXVsdFByb2plY3QudG9Eb0l0ZW1zLnB1c2goZXhhbXBsZVRvRG9JdGVtKTtcblxuLy8gY29uc29sZS5sb2coZXhhbXBsZVRvRG9JdGVtKTtcblxuLy8gY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuLy8gY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QudG9Eb0l0ZW1zWzBdKTtcblxuLy8gY29uc29sZS5sb2coc29tZVZhcmlhYmxlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==