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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


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


function displayProjects() {

    const content = document.querySelector(".content");

    const projectsDiv = document.createElement("div");
    projectsDiv.classList.add("projects");

    content.appendChild(projectsDiv);

    for (let i = 0; i < _app__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {

        const div = document.createElement("div");
        projectsDiv.appendChild(div);
        div.classList.add(_app__WEBPACK_IMPORTED_MODULE_0__.projects[i].projectTitle);
        div.textContent = "Project: " + _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].projectTitle;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        div.append(buttonContainer);

        const addToDoItemButton = document.createElement('button');
        addToDoItemButton.classList.add("add-to-do-item-button");
        addToDoItemButton.textContent = 'Add to-do item';

        buttonContainer.append(addToDoItemButton);

        // addToDoItemButton.addEventListener('click', createNewToDo);
        addToDoItemButton.addEventListener('click', addToDoItemAndClearForm);

        function createNewToDo() {
            // alert('test');
            const createdNewToDo = document.createElement("div");
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

            createdNewToDo.classList.add(titleOfToDoItem);
            createdNewToDo.classList.add("to-do-item-container");

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

        for (let a = 0; a < _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems.length; a++) {

            const toDoItemContainer = document.createElement("div");
            toDoItemContainer.classList.add(_app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].title);
            toDoItemContainer.classList.add("to-do-item-container");
            div.appendChild(toDoItemContainer);

            const titleDiv = document.createElement("div");
            toDoItemContainer.appendChild(titleDiv);
            titleDiv.classList.add("title");
            titleDiv.textContent = "Title: " + _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].title;

            const descriptionDiv = document.createElement("div");
            toDoItemContainer.appendChild(descriptionDiv);
            descriptionDiv.classList.add("description");
            descriptionDiv.textContent = "Description: " + _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].description;

            const dueDateDiv = document.createElement("div");
            toDoItemContainer.appendChild(dueDateDiv);
            dueDateDiv.classList.add("due-date");
            dueDateDiv.textContent = "Due Date: " + _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].dueDate;

            const priorityDiv = document.createElement("div");
            toDoItemContainer.appendChild(priorityDiv);
            priorityDiv.classList.add("priority");
            priorityDiv.textContent = "Priority: " + _app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].priority;

            const deleteToDoItemButton = document.createElement('button');
            deleteToDoItemButton.classList.add("delete-to-do-item-button");
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
                div.removeChild(toDoItemContainer);                          // this does not delete the object.
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

newProjectButtonQuerySelector.addEventListener('click', addNewProjectAndClearNewProjectForm);

function addNewProject() {

    const projectsQuerySelector = document.querySelector('.projects');

    const newProjectDiv = document.createElement('div');

    const titleOfNewProject = document.querySelector('#project-title');

    newProjectDiv.classList.add(titleOfNewProject.value);

    newProjectDiv.textContent = "Project: " + titleOfNewProject.value;

    projectsQuerySelector.appendChild(newProjectDiv);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    newProjectDiv.append(buttonContainer);

    const addToDoItemButton = document.createElement('button');
    addToDoItemButton.classList.add("add-to-do-item-button");
    addToDoItemButton.textContent = 'Add to-do item';

    buttonContainer.append(addToDoItemButton);

    // addToDoItemButton.addEventListener('click', createNewToDo);
    addToDoItemButton.addEventListener('click', addToDoItemAndClearForm);

    function createNewToDo() {
        const createdNewToDo = document.createElement("div");

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
        deleteToDoItemButton.textContent = 'Delete to-do item';

        createdNewToDo.appendChild(deleteToDoItemButton);

        createdNewToDo.classList.add(titleOfToDoItem);
        createdNewToDo.classList.add("to-do-item-container");

        newProjectDiv.appendChild(createdNewToDo);

        deleteToDoItemButton.addEventListener('click', deleteToDoItemFunction);

        function deleteToDoItemFunction() {
            newProjectDiv.removeChild(createdNewToDo);                          // this does not delete the object.
        }

    }

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.add("delete-project-button");
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

// function clearAddToDoItemForm() {
//     const toDoItemTitle = document.querySelector('#title');
//     const toDoItemDescription = document.querySelector('#description');
//     const toDoItemDueDate = document.querySelector('#duedate');
//     const toDoItemPriority = document.querySelector('#priority');
//     toDoItemTitle.value = '';
//     toDoItemDescription.value = '';
//     toDoItemDueDate.value = '';
//     toDoItemPriority.value = '';
// }

// function addToDoItemAndClearForm() {
//     createNewToDo();
//     clearAddToDoItemForm();
// }

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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");

// import { home } from "./home"; // Example of how an import statement should look.
// import { ToDoItem } from "./app";
// import { Project } from "./app";

// import { someVariable } from "./app";
// import { test } from "./dom";


console.log(_app__WEBPACK_IMPORTED_MODULE_1__.ToDoItem);
console.log(_app__WEBPACK_IMPORTED_MODULE_1__.Project);

console.log(_app__WEBPACK_IMPORTED_MODULE_1__.exampleToDoItem);
console.log(_app__WEBPACK_IMPORTED_MODULE_1__.exampleToDoItem2);
console.log(_app__WEBPACK_IMPORTED_MODULE_1__.exampleToDoItem3);
console.log(_app__WEBPACK_IMPORTED_MODULE_1__.exampleToDoItem4);

console.log(_app__WEBPACK_IMPORTED_MODULE_1__.workProject);
console.log(_app__WEBPACK_IMPORTED_MODULE_1__.hobbyProject);

console.log(_app__WEBPACK_IMPORTED_MODULE_1__.projects);
// test();
// addProject();
(0,_dom__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLElBQUksMENBQVEsc0JBQXNCOztBQUUxRDtBQUNBLDRDQUE0QywwQ0FBUTtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywwQ0FBUTs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDBDQUFROztBQUVuRTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsMENBQVE7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCwwQ0FBUTs7QUFFN0Q7QUFDQTtBQUNBLCtDQUErQywwQ0FBUTtBQUN2RDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxnRkFBZ0Y7QUFDaEY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixZQUFZO0FBQzhCOzs7Ozs7OztVQ3ZVMUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3JCLFlBQVksT0FBTyxlQUFlO0FBQ2xDLFlBQVksV0FBVztBQUN2QixZQUFZLFVBQVU7QUFDZ0k7QUFDdEosWUFBWSxlQUFlO0FBQzNCLFlBQVksT0FBTztBQUNvQzs7QUFFdkQsWUFBWSwwQ0FBUTtBQUNwQixZQUFZLHlDQUFPOztBQUVuQixZQUFZLGlEQUFlO0FBQzNCLFlBQVksa0RBQWdCO0FBQzVCLFlBQVksa0RBQWdCO0FBQzVCLFlBQVksa0RBQWdCOztBQUU1QixZQUFZLDZDQUFXO0FBQ3ZCLFlBQVksOENBQVk7O0FBRXhCLFlBQVksMENBQVE7QUFDcEI7QUFDQTtBQUNBLHFEQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IDJyZW07XG59XG5cbi50by1kby1pdGVtLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4vKiBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwcmVtO1xufSAqL1xuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvamVjdC1mb3JtIHtcbiAgICBtYXJnaW46IDFyZW07XG59XG5cbi5wcm9qZWN0cyA+IGRpdiB7XG4gICAgd2lkdGg6IDEycmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7Ozs7R0FJRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLnRvLWRvLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4vKiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbn0gKi9cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5wcm9qZWN0cyA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMnJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gXCIuL2RvbVwiO1xuXG4vLyBBcnJheSBmb3IgcHJvamVjdCBvYmplY3RzXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuY2xhc3MgVG9Eb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3RUaXRsZSkge1xuICAgICAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICB9XG5cbiAgICB0b0RvSXRlbXMgPSBbXTtcbn1cblxuLy8gbGV0IHNvbWVWYXJpYWJsZSA9IDU7XG5cbmxldCBleGFtcGxlVG9Eb0l0ZW0gPSBuZXcgVG9Eb0l0ZW0oXCJFbWFpbFwiLCBcIlJlYWQgZW1haWxzXCIsIFwiRGVjZW1iZXIgMSwgMjAyM1wiLCBcIk1lZGl1bVwiKTtcbmxldCBleGFtcGxlVG9Eb0l0ZW0yID0gbmV3IFRvRG9JdGVtKFwiUHJvZ3JhbVwiLCBcIkNvbXB1dGVyIHByb2dyYW1taW5nXCIsIFwiRGVjZW1iZXIgMSwgMjAyM1wiLCBcIkhpZ2hcIik7XG5cbmxldCBleGFtcGxlVG9Eb0l0ZW0zID0gbmV3IFRvRG9JdGVtKFwiR3VpdGFyXCIsIFwiUHJhY3RpY2UgZ3VpdGFyXCIsIFwiRGVjZW1iZXIgMSwgMjAyM1wiLCBcIkxvd1wiKTtcbmxldCBleGFtcGxlVG9Eb0l0ZW00ID0gbmV3IFRvRG9JdGVtKFwiRXhlcmNpc2VcIiwgXCJHbyB0byBneW1cIiwgXCJEZWNlbWJlciAxLCAyMDIzXCIsIFwiTG93XCIpO1xuXG5sZXQgd29ya1Byb2plY3QgPSBuZXcgUHJvamVjdChcIldvcmtcIik7XG5sZXQgaG9iYnlQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJIb2JiaWVzXCIpO1xuXG53b3JrUHJvamVjdC50b0RvSXRlbXMucHVzaChleGFtcGxlVG9Eb0l0ZW0pO1xud29ya1Byb2plY3QudG9Eb0l0ZW1zLnB1c2goZXhhbXBsZVRvRG9JdGVtMik7XG5cbmhvYmJ5UHJvamVjdC50b0RvSXRlbXMucHVzaChleGFtcGxlVG9Eb0l0ZW0zKTtcbmhvYmJ5UHJvamVjdC50b0RvSXRlbXMucHVzaChleGFtcGxlVG9Eb0l0ZW00KTtcblxucHJvamVjdHMucHVzaCh3b3JrUHJvamVjdCk7XG5wcm9qZWN0cy5wdXNoKGhvYmJ5UHJvamVjdCk7XG5cbi8vIGZ1bmN0aW9uIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24oKSB7XG5cbi8vICAgICAvLyB0b0RvSXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHByb2plY3RzWzBdLnRvRG9JdGVtc1swXS50aXRsZSk7XG5cbi8vICAgICAvLyBob2JieVByb2plY3QudG9Eb0l0ZW1zLnBvcCgpO1xuLy8gICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgaG9iYnlQcm9qZWN0LnRvRG9JdGVtcy5sZW5ndGg7IGkrKykge1xuXG4vLyAgICAgLy8gfVxuLy8gICAgIC8vIGNvbnN0IGJ1dHRvblF1ZXJ5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkZWxldGUtdG8tZG8taXRlbS1idXR0b24nKTtcbi8vICAgICAvLyBjb25zdCB0b0RvSXRlbVRpdGxlUXVlcnlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoVG9Eb0l0ZW0udGl0bGUpO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHMpO1xuLy8gICAgIC8vIGFsZXJ0KFwiaGlcIik7XG4vLyAgICAgLy8gY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKCk7XG4vLyAgICAgLy8gaWYgKGluZGV4ID4gLTEpIHsgLy8gb25seSBzcGxpY2UgYXJyYXkgd2hlbiBpdGVtIGlzIGZvdW5kXG4vLyAgICAgLy8gICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7IC8vIDJuZCBwYXJhbWV0ZXIgbWVhbnMgcmVtb3ZlIG9uZSBpdGVtIG9ubHlcbi8vICAgICAvLyB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZU5ld1RvRG8oKSB7XG4vLyAgICAgLy8gYWxlcnQoXCJoaVwiKTtcbi8vICAgICBsZXQgZXhhbXBsZVRvRG9JdGVtNSA9IG5ldyBUb0RvSXRlbShcIlRlc3RcIiwgXCJUZXN0aW5nIGVtYWlsc1wiLCBcIkRlY2VtYmVyIDEsIDIwMjNcIiwgXCJIaWdoXCIpO1xuLy8gICAgIHdvcmtQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbTUpO1xuLy8gICAgIC8vIHByb2plY3RzLnB1c2god29ya1Byb2plY3QpOyAvL3RoaXMgbWVzc2VzIGl0IHVwIGZvciBzb21lIHJlYXNvblxuLy8gICAgIGNvbnNvbGUubG9nKGV4YW1wbGVUb0RvSXRlbTUpO1xuLy8gICAgIC8vIGRpc3BsYXlQcm9qZWN0cygpOyAvL01heWJlIHNvbWV0aGluZyBzaW1pbGFyIHRvIHRoaXM/PyAvL1NvbWV0aGluZyB0aGF0IGNsZWFycyBET00gdG9vPz8/XG4vLyAgICAgLy8gY2xlYXIoKTtcbi8vICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbi8vICAgICBjbGVhcigpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBjbGVhcigpIHtcbi8vICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbi8vICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuLy8gICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQocHJvamVjdHMpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xuLy8gICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJvamVjdHMnKTtcbi8vICAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgbmV3UHJvamVjdERpdi50ZXh0Q29udGVudCA9ICd0ZXN0Jztcbi8vICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZGVsZXRlVG9Eb0l0ZW0oKSB7XG5cbi8vIH1cblxuLy8gZXhwb3J0IHsgVG9Eb0l0ZW0sIFByb2plY3QsIHNvbWVWYXJpYWJsZSB9O1xuLy8gZXhwb3J0IHsgVG9Eb0l0ZW0sIFByb2plY3QgfTtcblxuLy8gZXhwb3J0IHtcbi8vICAgICBUb0RvSXRlbSwgUHJvamVjdCwgZXhhbXBsZVRvRG9JdGVtLCBleGFtcGxlVG9Eb0l0ZW0yLCBleGFtcGxlVG9Eb0l0ZW0zLCBleGFtcGxlVG9Eb0l0ZW00LCB3b3JrUHJvamVjdCwgaG9iYnlQcm9qZWN0LCBwcm9qZWN0cyxcbi8vICAgICBkZWxldGVUb0RvSXRlbUZ1bmN0aW9uLCBjcmVhdGVOZXdUb0RvLCBjbGVhciwgY3JlYXRlTmV3UHJvamVjdFxuLy8gfTtcblxuLy8gZXhwb3J0IHtcbi8vICAgICBUb0RvSXRlbSwgUHJvamVjdCwgZXhhbXBsZVRvRG9JdGVtLCBleGFtcGxlVG9Eb0l0ZW0yLCBleGFtcGxlVG9Eb0l0ZW0zLCBleGFtcGxlVG9Eb0l0ZW00LCB3b3JrUHJvamVjdCwgaG9iYnlQcm9qZWN0LCBwcm9qZWN0cyxcbi8vICAgICBjcmVhdGVOZXdUb0RvLCBjbGVhciwgY3JlYXRlTmV3UHJvamVjdFxuLy8gfTtcblxuLy8gZXhwb3J0IHtcbi8vICAgICBUb0RvSXRlbSwgUHJvamVjdCwgZXhhbXBsZVRvRG9JdGVtLCBleGFtcGxlVG9Eb0l0ZW0yLCBleGFtcGxlVG9Eb0l0ZW0zLCBleGFtcGxlVG9Eb0l0ZW00LCB3b3JrUHJvamVjdCwgaG9iYnlQcm9qZWN0LCBwcm9qZWN0cyxcbi8vICAgICBjcmVhdGVOZXdUb0RvLCBjbGVhclxuLy8gfTtcblxuLy8gZXhwb3J0IHtcbi8vICAgICBUb0RvSXRlbSwgUHJvamVjdCwgZXhhbXBsZVRvRG9JdGVtLCBleGFtcGxlVG9Eb0l0ZW0yLCBleGFtcGxlVG9Eb0l0ZW0zLCBleGFtcGxlVG9Eb0l0ZW00LCB3b3JrUHJvamVjdCwgaG9iYnlQcm9qZWN0LCBwcm9qZWN0cywgY2xlYXJcbi8vIH07XG5cbmV4cG9ydCB7XG4gICAgVG9Eb0l0ZW0sIFByb2plY3QsIGV4YW1wbGVUb0RvSXRlbSwgZXhhbXBsZVRvRG9JdGVtMiwgZXhhbXBsZVRvRG9JdGVtMywgZXhhbXBsZVRvRG9JdGVtNCwgd29ya1Byb2plY3QsIGhvYmJ5UHJvamVjdCwgcHJvamVjdHNcbn07IiwiaW1wb3J0IHsgcHJvamVjdHMsIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24sIGNyZWF0ZU5ld1RvRG8gfSBmcm9tIFwiLi9hcHBcIjtcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6IFwiICsgcHJvamVjdHNbaV0ucHJvamVjdFRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGRpdi5hcHBlbmQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBhZGRUb0RvSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUb0RvSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvLWRvLWl0ZW0tYnV0dG9uXCIpO1xuICAgICAgICBhZGRUb0RvSXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgdG8tZG8gaXRlbSc7XG5cbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChhZGRUb0RvSXRlbUJ1dHRvbik7XG5cbiAgICAgICAgLy8gYWRkVG9Eb0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdUb0RvKTtcbiAgICAgICAgYWRkVG9Eb0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUb0RvSXRlbUFuZENsZWFyRm9ybSk7XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTmV3VG9EbygpIHtcbiAgICAgICAgICAgIC8vIGFsZXJ0KCd0ZXN0Jyk7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkTmV3VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAvLyBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlZE5ld1RvRG8pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGVkTmV3VG9Eby50ZXh0Q29udGVudCA9ICd0ZXN0JztcbiAgICAgICAgICAgIC8vIGNyZWF0ZWROZXdUb0RvID0gXG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgICAgIGxldCB0aXRsZU9mVG9Eb0l0ZW0gPSB0b0RvSXRlbVRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgdG9Eb0l0ZW1UaXRsZURpdi50ZXh0Q29udGVudCA9IHRpdGxlT2ZUb0RvSXRlbTtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW1EZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25PZlRvRG9JdGVtID0gdG9Eb0l0ZW1EZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIHRvRG9JdGVtRGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbk9mVG9Eb0l0ZW07XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtRHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGVPZlRvRG9JdGVtID0gdG9Eb0l0ZW1EdWVEYXRlLnZhbHVlO1xuICAgICAgICAgICAgdG9Eb0l0ZW1EdWVEYXRlRGl2LnRleHRDb250ZW50ID0gZHVlRGF0ZU9mVG9Eb0l0ZW07XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5T2ZUb0RvSXRlbSA9IHRvRG9JdGVtUHJpb3JpdHkudmFsdWU7XG4gICAgICAgICAgICB0b0RvSXRlbVByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gcHJpb3JpdHlPZlRvRG9JdGVtO1xuXG4gICAgICAgICAgICBjcmVhdGVkTmV3VG9Eby5hcHBlbmRDaGlsZCh0b0RvSXRlbVRpdGxlRGl2KTtcbiAgICAgICAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtRGVzY3JpcHRpb25EaXYpO1xuICAgICAgICAgICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQodG9Eb0l0ZW1EdWVEYXRlRGl2KTtcbiAgICAgICAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtUHJpb3JpdHlEaXYpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRvRG9JdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRvLWRvLWl0ZW0tYnV0dG9uXCIpO1xuICAgICAgICAgICAgLy8gZGVsZXRlVG9Eb0l0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpOyAgIC8vdGhpcyBwcm9iYWJseSBuZWVkcyB0byBiZSBtb2RpZmllZCB0byBzb21ldGhpbmcgc2ltaWxhciB0byBiZSB1c2VkICAgIFxuICAgICAgICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIHRvLWRvIGl0ZW0nO1xuXG4gICAgICAgICAgICBjcmVhdGVkTmV3VG9Eby5hcHBlbmRDaGlsZChkZWxldGVUb0RvSXRlbUJ1dHRvbik7XG5cbiAgICAgICAgICAgIGNyZWF0ZWROZXdUb0RvLmNsYXNzTGlzdC5hZGQodGl0bGVPZlRvRG9JdGVtKTtcbiAgICAgICAgICAgIGNyZWF0ZWROZXdUb0RvLmNsYXNzTGlzdC5hZGQoXCJ0by1kby1pdGVtLWNvbnRhaW5lclwiKTtcblxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZWROZXdUb0RvKTtcblxuXG5cbiAgICAgICAgICAgIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9Eb0l0ZW1GdW5jdGlvbik7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdHNbaV0ucHJvamVjdFRpdGxlLnJlbW92ZUNoaWxkKHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc29tZXRoaW5nMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzb21ldGhpbmcwKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzb21ldGhpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoc29tZXRoaW5nKTtcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZCh0b0RvSXRlbUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGNyZWF0ZWROZXdUb0RvKTsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgZG9lcyBub3QgZGVsZXRlIHRoZSBvYmplY3QuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBwcm9qZWN0JztcblxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0RnVuY3Rpb24pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGFsZXJ0KCd0ZXN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBwcm9qZWN0c1tpXS50b0RvSXRlbXMubGVuZ3RoOyBhKyspIHtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvLWRvLWl0ZW0tY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRvRG9JdGVtQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgICAgICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgICAgICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIiArIHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZTtcblxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIiArIHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS5kZXNjcmlwdGlvbjtcblxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b0RvSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcbiAgICAgICAgICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuICAgICAgICAgICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiICsgcHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLmR1ZURhdGU7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvRG9JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcbiAgICAgICAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICAgICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCIgKyBwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0ucHJpb3JpdHk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRvRG9JdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRvLWRvLWl0ZW0tYnV0dG9uXCIpO1xuICAgICAgICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIHRvLWRvIGl0ZW0nO1xuXG4gICAgICAgICAgICB0b0RvSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVUb0RvSXRlbUJ1dHRvbik7XG5cbiAgICAgICAgICAgIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9Eb0l0ZW1GdW5jdGlvbik7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdHNbaV0ucHJvamVjdFRpdGxlLnJlbW92ZUNoaWxkKHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc29tZXRoaW5nMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzb21ldGhpbmcwKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzb21ldGhpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoc29tZXRoaW5nKTtcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZCh0b0RvSXRlbUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZUNoaWxkKHRvRG9JdGVtQ29udGFpbmVyKTsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgZG9lcyBub3QgZGVsZXRlIHRoZSBvYmplY3QuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2xlYXJBZGRUb0RvSXRlbUZvcm0oKSB7XG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1UaXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdG9Eb0l0ZW1EZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdG9Eb0l0ZW1EdWVEYXRlLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0b0RvSXRlbVByaW9yaXR5LnZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhZGRUb0RvSXRlbUFuZENsZWFyRm9ybSgpIHtcbiAgICAgICAgICAgIGNyZWF0ZU5ld1RvRG8oKTtcbiAgICAgICAgICAgIGNsZWFyQWRkVG9Eb0l0ZW1Gb3JtKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5cblxuXG5cbmNvbnN0IG5ld1Byb2plY3RCdXR0b25RdWVyeVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuXG5uZXdQcm9qZWN0QnV0dG9uUXVlcnlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Byb2plY3RBbmRDbGVhck5ld1Byb2plY3RGb3JtKTtcblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdCgpIHtcblxuICAgIGNvbnN0IHByb2plY3RzUXVlcnlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGl0bGVPZk5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xuXG4gICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKHRpdGxlT2ZOZXdQcm9qZWN0LnZhbHVlKTtcblxuICAgIG5ld1Byb2plY3REaXYudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6IFwiICsgdGl0bGVPZk5ld1Byb2plY3QudmFsdWU7XG5cbiAgICBwcm9qZWN0c1F1ZXJ5U2VsZWN0b3IuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGFkZFRvRG9JdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVG9Eb0l0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC10by1kby1pdGVtLWJ1dHRvblwiKTtcbiAgICBhZGRUb0RvSXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgdG8tZG8gaXRlbSc7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGFkZFRvRG9JdGVtQnV0dG9uKTtcblxuICAgIC8vIGFkZFRvRG9JdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3VG9Ebyk7XG4gICAgYWRkVG9Eb0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUb0RvSXRlbUFuZENsZWFyRm9ybSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdUb0RvKCkge1xuICAgICAgICBjb25zdCBjcmVhdGVkTmV3VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRvRG9JdGVtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgbGV0IHRpdGxlT2ZUb0RvSXRlbSA9IHRvRG9JdGVtVGl0bGUudmFsdWU7XG4gICAgICAgIHRvRG9JdGVtVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aXRsZU9mVG9Eb0l0ZW07XG5cbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1EZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRvRG9JdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uT2ZUb0RvSXRlbSA9IHRvRG9JdGVtRGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIHRvRG9JdGVtRGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbk9mVG9Eb0l0ZW07XG5cbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1EdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUnKTtcbiAgICAgICAgbGV0IGR1ZURhdGVPZlRvRG9JdGVtID0gdG9Eb0l0ZW1EdWVEYXRlLnZhbHVlO1xuICAgICAgICB0b0RvSXRlbUR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSBkdWVEYXRlT2ZUb0RvSXRlbTtcblxuICAgICAgICBjb25zdCB0b0RvSXRlbVByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgICAgICBsZXQgcHJpb3JpdHlPZlRvRG9JdGVtID0gdG9Eb0l0ZW1Qcmlvcml0eS52YWx1ZTtcbiAgICAgICAgdG9Eb0l0ZW1Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHByaW9yaXR5T2ZUb0RvSXRlbTtcblxuICAgICAgICBjcmVhdGVkTmV3VG9Eby5hcHBlbmRDaGlsZCh0b0RvSXRlbVRpdGxlRGl2KTtcbiAgICAgICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQodG9Eb0l0ZW1EZXNjcmlwdGlvbkRpdik7XG4gICAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtRHVlRGF0ZURpdik7XG4gICAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtUHJpb3JpdHlEaXYpO1xuXG5cbiAgICAgICAgY29uc3QgZGVsZXRlVG9Eb0l0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10by1kby1pdGVtLWJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIHRvLWRvIGl0ZW0nO1xuXG4gICAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKGRlbGV0ZVRvRG9JdGVtQnV0dG9uKTtcblxuICAgICAgICBjcmVhdGVkTmV3VG9Eby5jbGFzc0xpc3QuYWRkKHRpdGxlT2ZUb0RvSXRlbSk7XG4gICAgICAgIGNyZWF0ZWROZXdUb0RvLmNsYXNzTGlzdC5hZGQoXCJ0by1kby1pdGVtLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZWROZXdUb0RvKTtcblxuICAgICAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0RGl2LnJlbW92ZUNoaWxkKGNyZWF0ZWROZXdUb0RvKTsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgZG9lcyBub3QgZGVsZXRlIHRoZSBvYmplY3QuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b25cIik7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgcHJvamVjdCc7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3RGdW5jdGlvbik7XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGFsZXJ0KCd0ZXN0Jyk7XG4gICAgICAgIC8vIG5ld1Byb2plY3REaXYucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgLy8gY29uc3QgbmV3UHJvamVjdEJ1dHRvblF1ZXJ5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKG5ld1Byb2plY3REaXYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyQWRkVG9Eb0l0ZW1Gb3JtKCkge1xuICAgICAgICBjb25zdCB0b0RvSXRlbVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRvRG9JdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUnKTtcbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgICAgICB0b0RvSXRlbVRpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgIHRvRG9JdGVtRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgdG9Eb0l0ZW1EdWVEYXRlLnZhbHVlID0gJyc7XG4gICAgICAgIHRvRG9JdGVtUHJpb3JpdHkudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0RvSXRlbUFuZENsZWFyRm9ybSgpIHtcbiAgICAgICAgY3JlYXRlTmV3VG9EbygpO1xuICAgICAgICBjbGVhckFkZFRvRG9JdGVtRm9ybSgpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBjbGVhck5ld1Byb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHRpdGxlT2ZOZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcbiAgICB0aXRsZU9mTmV3UHJvamVjdC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0QW5kQ2xlYXJOZXdQcm9qZWN0Rm9ybSgpIHtcbiAgICBhZGROZXdQcm9qZWN0KCk7XG4gICAgY2xlYXJOZXdQcm9qZWN0Rm9ybSgpO1xufVxuXG4vLyBmdW5jdGlvbiBjbGVhckFkZFRvRG9JdGVtRm9ybSgpIHtcbi8vICAgICBjb25zdCB0b0RvSXRlbVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4vLyAgICAgY29uc3QgdG9Eb0l0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuLy8gICAgIGNvbnN0IHRvRG9JdGVtRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJyk7XG4vLyAgICAgY29uc3QgdG9Eb0l0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuLy8gICAgIHRvRG9JdGVtVGl0bGUudmFsdWUgPSAnJztcbi8vICAgICB0b0RvSXRlbURlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4vLyAgICAgdG9Eb0l0ZW1EdWVEYXRlLnZhbHVlID0gJyc7XG4vLyAgICAgdG9Eb0l0ZW1Qcmlvcml0eS52YWx1ZSA9ICcnO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBhZGRUb0RvSXRlbUFuZENsZWFyRm9ybSgpIHtcbi8vICAgICBjcmVhdGVOZXdUb0RvKCk7XG4vLyAgICAgY2xlYXJBZGRUb0RvSXRlbUZvcm0oKTtcbi8vIH1cblxuLy8gZXhwb3J0IHsgZGlzcGxheVByb2plY3RzIH07XG4vLyBleHBvcnQgeyBkaXNwbGF5UHJvamVjdHMsIGFkZFByb2plY3QgfTtcbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0cywgYWRkTmV3UHJvamVjdCB9O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lXCI7IC8vIEV4YW1wbGUgb2YgaG93IGFuIGltcG9ydCBzdGF0ZW1lbnQgc2hvdWxkIGxvb2suXG4vLyBpbXBvcnQgeyBUb0RvSXRlbSB9IGZyb20gXCIuL2FwcFwiO1xuLy8gaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgVG9Eb0l0ZW0sIFByb2plY3QsIGV4YW1wbGVUb0RvSXRlbSwgZXhhbXBsZVRvRG9JdGVtMiwgZXhhbXBsZVRvRG9JdGVtMywgZXhhbXBsZVRvRG9JdGVtNCwgd29ya1Byb2plY3QsIGhvYmJ5UHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9hcHBcIjtcbi8vIGltcG9ydCB7IHNvbWVWYXJpYWJsZSB9IGZyb20gXCIuL2FwcFwiO1xuLy8gaW1wb3J0IHsgdGVzdCB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzLCBhZGROZXdQcm9qZWN0IH0gZnJvbSBcIi4vZG9tXCI7XG5cbmNvbnNvbGUubG9nKFRvRG9JdGVtKTtcbmNvbnNvbGUubG9nKFByb2plY3QpO1xuXG5jb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW0pO1xuY29uc29sZS5sb2coZXhhbXBsZVRvRG9JdGVtMik7XG5jb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW0zKTtcbmNvbnNvbGUubG9nKGV4YW1wbGVUb0RvSXRlbTQpO1xuXG5jb25zb2xlLmxvZyh3b3JrUHJvamVjdCk7XG5jb25zb2xlLmxvZyhob2JieVByb2plY3QpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4vLyB0ZXN0KCk7XG4vLyBhZGRQcm9qZWN0KCk7XG5kaXNwbGF5UHJvamVjdHMoKTtcbi8vIGFkZE5ld1Byb2plY3QoKTtcblxuLy8gY29uc3QgbmV3UHJvamVjdEJ1dHRvblF1ZXJ5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG5cbi8vIG5ld1Byb2plY3RCdXR0b25RdWVyeVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3UHJvamVjdCk7XG5cbi8vIGxldCBleGFtcGxlVG9Eb0l0ZW0gPSBuZXcgVG9Eb0l0ZW0oXCJTdHVkeVwiLCBcIlN0dWR5IGhhcmRcIiwgXCJEZWNlbWJlciAxLCAyMDIzXCIsIFwiSGlnaFwiKTtcblxuLy8gbGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0XCIpO1xuXG4vLyBkZWZhdWx0UHJvamVjdC50b0RvSXRlbXMucHVzaChleGFtcGxlVG9Eb0l0ZW0pO1xuXG4vLyBjb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW0pO1xuXG4vLyBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG4vLyBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC50b0RvSXRlbXNbMF0pO1xuXG4vLyBjb25zb2xlLmxvZyhzb21lVmFyaWFibGUpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==