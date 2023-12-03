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

.form {
    display: flex;
    flex-direction: column;
    width: 10rem;
}

.button-container {
    display: flex;
    flex-direction: column;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B","sourcesContent":[".content {\n    display: flex;\n}\n\n.projects {\n    display: flex;\n    padding: 1rem;\n    gap: 2rem;\n}\n\n.to-do-item-container {\n    margin: 1rem;\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    width: 10rem;\n}\n\n.button-container {\n    display: flex;\n    flex-direction: column;\n}"],"sourceRoot":""}]);
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

        addToDoItemButton.addEventListener('click', createNewToDo);

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
                console.log(_app__WEBPACK_IMPORTED_MODULE_0__.projects[i].toDoItems[a].title);
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

    const projectsQuerySelector = document.querySelector('.projects');

    const newProjectDiv = document.createElement('div');

    let titleOfNewProject = document.querySelector('#project-title');

    newProjectDiv.classList.add(titleOfNewProject.value);

    newProjectDiv.textContent = "Project: " + titleOfNewProject.value;

    projectsQuerySelector.appendChild(newProjectDiv);

    const div = document.createElement("div");
    newProjectDiv.appendChild(div);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    div.append(buttonContainer);

    const addToDoItemButton = document.createElement('button');
    addToDoItemButton.classList.add("add-to-do-item-button");
    addToDoItemButton.textContent = 'Add to-do item';

    buttonContainer.append(addToDoItemButton);

    addToDoItemButton.addEventListener('click', createNewToDo);

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

        div.appendChild(createdNewToDo);

        deleteToDoItemButton.addEventListener('click', deleteToDoItemFunction);

        function deleteToDoItemFunction() {
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
        // newProjectDiv.removeChild(div);
        // const newProjectButtonQuerySelector = document.querySelector('#submit');
        const projectsDiv = document.querySelector('.projects');
        projectsDiv.removeChild(newProjectDiv);
    }

}

// export { displayProjects };
// export { displayProjects, addProject };








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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNyQixZQUFZLE9BQU8sZUFBZTtBQUNsQyxZQUFZLFdBQVc7QUFDdkIsWUFBWSxVQUFVO0FBQ2dJO0FBQ3RKLFlBQVksZUFBZTtBQUMzQixZQUFZLE9BQU87QUFDb0M7O0FBRXZELFlBQVksMENBQVE7QUFDcEIsWUFBWSx5Q0FBTzs7QUFFbkIsWUFBWSxpREFBZTtBQUMzQixZQUFZLGtEQUFnQjtBQUM1QixZQUFZLGtEQUFnQjtBQUM1QixZQUFZLGtEQUFnQjs7QUFFNUIsWUFBWSw2Q0FBVztBQUN2QixZQUFZLDhDQUFZOztBQUV4QixZQUFZLDBDQUFRO0FBQ3BCO0FBQ0E7QUFDQSxxREFBZTtBQUNmOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZ2FwOiAycmVtO1xufVxuXG4udG8tZG8taXRlbS1jb250YWluZXIge1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTByZW07XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi50by1kby1pdGVtLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTByZW07XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gXCIuL2RvbVwiO1xuXG4vLyBBcnJheSBmb3IgcHJvamVjdCBvYmplY3RzXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuY2xhc3MgVG9Eb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3RUaXRsZSkge1xuICAgICAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICB9XG5cbiAgICB0b0RvSXRlbXMgPSBbXTtcbn1cblxuLy8gbGV0IHNvbWVWYXJpYWJsZSA9IDU7XG5cbmxldCBleGFtcGxlVG9Eb0l0ZW0gPSBuZXcgVG9Eb0l0ZW0oXCJFbWFpbFwiLCBcIlJlYWQgZW1haWxzXCIsIFwiRGVjZW1iZXIgMSwgMjAyM1wiLCBcIk1lZGl1bVwiKTtcbmxldCBleGFtcGxlVG9Eb0l0ZW0yID0gbmV3IFRvRG9JdGVtKFwiUHJvZ3JhbVwiLCBcIkNvbXB1dGVyIHByb2dyYW1taW5nXCIsIFwiRGVjZW1iZXIgMSwgMjAyM1wiLCBcIkhpZ2hcIik7XG5cbmxldCBleGFtcGxlVG9Eb0l0ZW0zID0gbmV3IFRvRG9JdGVtKFwiR3VpdGFyXCIsIFwiUHJhY3RpY2UgZ3VpdGFyXCIsIFwiRGVjZW1iZXIgMSwgMjAyM1wiLCBcIkxvd1wiKTtcbmxldCBleGFtcGxlVG9Eb0l0ZW00ID0gbmV3IFRvRG9JdGVtKFwiRXhlcmNpc2VcIiwgXCJHbyB0byBneW1cIiwgXCJEZWNlbWJlciAxLCAyMDIzXCIsIFwiTG93XCIpO1xuXG5sZXQgd29ya1Byb2plY3QgPSBuZXcgUHJvamVjdChcIldvcmtcIik7XG5sZXQgaG9iYnlQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJIb2JiaWVzXCIpO1xuXG53b3JrUHJvamVjdC50b0RvSXRlbXMucHVzaChleGFtcGxlVG9Eb0l0ZW0pO1xud29ya1Byb2plY3QudG9Eb0l0ZW1zLnB1c2goZXhhbXBsZVRvRG9JdGVtMik7XG5cbmhvYmJ5UHJvamVjdC50b0RvSXRlbXMucHVzaChleGFtcGxlVG9Eb0l0ZW0zKTtcbmhvYmJ5UHJvamVjdC50b0RvSXRlbXMucHVzaChleGFtcGxlVG9Eb0l0ZW00KTtcblxucHJvamVjdHMucHVzaCh3b3JrUHJvamVjdCk7XG5wcm9qZWN0cy5wdXNoKGhvYmJ5UHJvamVjdCk7XG5cbi8vIGZ1bmN0aW9uIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24oKSB7XG5cbi8vICAgICAvLyB0b0RvSXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHByb2plY3RzWzBdLnRvRG9JdGVtc1swXS50aXRsZSk7XG5cbi8vICAgICAvLyBob2JieVByb2plY3QudG9Eb0l0ZW1zLnBvcCgpO1xuLy8gICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgaG9iYnlQcm9qZWN0LnRvRG9JdGVtcy5sZW5ndGg7IGkrKykge1xuXG4vLyAgICAgLy8gfVxuLy8gICAgIC8vIGNvbnN0IGJ1dHRvblF1ZXJ5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkZWxldGUtdG8tZG8taXRlbS1idXR0b24nKTtcbi8vICAgICAvLyBjb25zdCB0b0RvSXRlbVRpdGxlUXVlcnlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoVG9Eb0l0ZW0udGl0bGUpO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHMpO1xuLy8gICAgIC8vIGFsZXJ0KFwiaGlcIik7XG4vLyAgICAgLy8gY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKCk7XG4vLyAgICAgLy8gaWYgKGluZGV4ID4gLTEpIHsgLy8gb25seSBzcGxpY2UgYXJyYXkgd2hlbiBpdGVtIGlzIGZvdW5kXG4vLyAgICAgLy8gICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7IC8vIDJuZCBwYXJhbWV0ZXIgbWVhbnMgcmVtb3ZlIG9uZSBpdGVtIG9ubHlcbi8vICAgICAvLyB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZU5ld1RvRG8oKSB7XG4vLyAgICAgLy8gYWxlcnQoXCJoaVwiKTtcbi8vICAgICBsZXQgZXhhbXBsZVRvRG9JdGVtNSA9IG5ldyBUb0RvSXRlbShcIlRlc3RcIiwgXCJUZXN0aW5nIGVtYWlsc1wiLCBcIkRlY2VtYmVyIDEsIDIwMjNcIiwgXCJIaWdoXCIpO1xuLy8gICAgIHdvcmtQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbTUpO1xuLy8gICAgIC8vIHByb2plY3RzLnB1c2god29ya1Byb2plY3QpOyAvL3RoaXMgbWVzc2VzIGl0IHVwIGZvciBzb21lIHJlYXNvblxuLy8gICAgIGNvbnNvbGUubG9nKGV4YW1wbGVUb0RvSXRlbTUpO1xuLy8gICAgIC8vIGRpc3BsYXlQcm9qZWN0cygpOyAvL01heWJlIHNvbWV0aGluZyBzaW1pbGFyIHRvIHRoaXM/PyAvL1NvbWV0aGluZyB0aGF0IGNsZWFycyBET00gdG9vPz8/XG4vLyAgICAgLy8gY2xlYXIoKTtcbi8vICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbi8vICAgICBjbGVhcigpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBjbGVhcigpIHtcbi8vICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbi8vICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuLy8gICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQocHJvamVjdHMpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xuLy8gICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJvamVjdHMnKTtcbi8vICAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgbmV3UHJvamVjdERpdi50ZXh0Q29udGVudCA9ICd0ZXN0Jztcbi8vICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZGVsZXRlVG9Eb0l0ZW0oKSB7XG5cbi8vIH1cblxuLy8gZXhwb3J0IHsgVG9Eb0l0ZW0sIFByb2plY3QsIHNvbWVWYXJpYWJsZSB9O1xuLy8gZXhwb3J0IHsgVG9Eb0l0ZW0sIFByb2plY3QgfTtcblxuLy8gZXhwb3J0IHtcbi8vICAgICBUb0RvSXRlbSwgUHJvamVjdCwgZXhhbXBsZVRvRG9JdGVtLCBleGFtcGxlVG9Eb0l0ZW0yLCBleGFtcGxlVG9Eb0l0ZW0zLCBleGFtcGxlVG9Eb0l0ZW00LCB3b3JrUHJvamVjdCwgaG9iYnlQcm9qZWN0LCBwcm9qZWN0cyxcbi8vICAgICBkZWxldGVUb0RvSXRlbUZ1bmN0aW9uLCBjcmVhdGVOZXdUb0RvLCBjbGVhciwgY3JlYXRlTmV3UHJvamVjdFxuLy8gfTtcblxuLy8gZXhwb3J0IHtcbi8vICAgICBUb0RvSXRlbSwgUHJvamVjdCwgZXhhbXBsZVRvRG9JdGVtLCBleGFtcGxlVG9Eb0l0ZW0yLCBleGFtcGxlVG9Eb0l0ZW0zLCBleGFtcGxlVG9Eb0l0ZW00LCB3b3JrUHJvamVjdCwgaG9iYnlQcm9qZWN0LCBwcm9qZWN0cyxcbi8vICAgICBjcmVhdGVOZXdUb0RvLCBjbGVhciwgY3JlYXRlTmV3UHJvamVjdFxuLy8gfTtcblxuLy8gZXhwb3J0IHtcbi8vICAgICBUb0RvSXRlbSwgUHJvamVjdCwgZXhhbXBsZVRvRG9JdGVtLCBleGFtcGxlVG9Eb0l0ZW0yLCBleGFtcGxlVG9Eb0l0ZW0zLCBleGFtcGxlVG9Eb0l0ZW00LCB3b3JrUHJvamVjdCwgaG9iYnlQcm9qZWN0LCBwcm9qZWN0cyxcbi8vICAgICBjcmVhdGVOZXdUb0RvLCBjbGVhclxuLy8gfTtcblxuLy8gZXhwb3J0IHtcbi8vICAgICBUb0RvSXRlbSwgUHJvamVjdCwgZXhhbXBsZVRvRG9JdGVtLCBleGFtcGxlVG9Eb0l0ZW0yLCBleGFtcGxlVG9Eb0l0ZW0zLCBleGFtcGxlVG9Eb0l0ZW00LCB3b3JrUHJvamVjdCwgaG9iYnlQcm9qZWN0LCBwcm9qZWN0cywgY2xlYXJcbi8vIH07XG5cbmV4cG9ydCB7XG4gICAgVG9Eb0l0ZW0sIFByb2plY3QsIGV4YW1wbGVUb0RvSXRlbSwgZXhhbXBsZVRvRG9JdGVtMiwgZXhhbXBsZVRvRG9JdGVtMywgZXhhbXBsZVRvRG9JdGVtNCwgd29ya1Byb2plY3QsIGhvYmJ5UHJvamVjdCwgcHJvamVjdHNcbn07IiwiaW1wb3J0IHsgcHJvamVjdHMsIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24sIGNyZWF0ZU5ld1RvRG8gfSBmcm9tIFwiLi9hcHBcIjtcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6IFwiICsgcHJvamVjdHNbaV0ucHJvamVjdFRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGRpdi5hcHBlbmQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBhZGRUb0RvSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUb0RvSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvLWRvLWl0ZW0tYnV0dG9uXCIpO1xuICAgICAgICBhZGRUb0RvSXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgdG8tZG8gaXRlbSc7XG5cbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChhZGRUb0RvSXRlbUJ1dHRvbik7XG5cbiAgICAgICAgYWRkVG9Eb0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdUb0RvKTtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVOZXdUb0RvKCkge1xuICAgICAgICAgICAgLy8gYWxlcnQoJ3Rlc3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWROZXdUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIC8vIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVkTmV3VG9Ebyk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZWROZXdUb0RvLnRleHRDb250ZW50ID0gJ3Rlc3QnO1xuICAgICAgICAgICAgLy8gY3JlYXRlZE5ld1RvRG8gPSBcbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICAgICAgbGV0IHRpdGxlT2ZUb0RvSXRlbSA9IHRvRG9JdGVtVGl0bGUudmFsdWU7XG4gICAgICAgICAgICB0b0RvSXRlbVRpdGxlRGl2LnRleHRDb250ZW50ID0gdGl0bGVPZlRvRG9JdGVtO1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbURlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbk9mVG9Eb0l0ZW0gPSB0b0RvSXRlbURlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdG9Eb0l0ZW1EZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uT2ZUb0RvSXRlbTtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW1EdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJyk7XG4gICAgICAgICAgICBsZXQgZHVlRGF0ZU9mVG9Eb0l0ZW0gPSB0b0RvSXRlbUR1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICB0b0RvSXRlbUR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSBkdWVEYXRlT2ZUb0RvSXRlbTtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW1Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlPZlRvRG9JdGVtID0gdG9Eb0l0ZW1Qcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgIHRvRG9JdGVtUHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSBwcmlvcml0eU9mVG9Eb0l0ZW07XG5cbiAgICAgICAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtVGl0bGVEaXYpO1xuICAgICAgICAgICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQodG9Eb0l0ZW1EZXNjcmlwdGlvbkRpdik7XG4gICAgICAgICAgICBjcmVhdGVkTmV3VG9Eby5hcHBlbmRDaGlsZCh0b0RvSXRlbUR1ZURhdGVEaXYpO1xuICAgICAgICAgICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQodG9Eb0l0ZW1Qcmlvcml0eURpdik7XG5cblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlVG9Eb0l0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdG8tZG8taXRlbS1idXR0b25cIik7XG4gICAgICAgICAgICAvLyBkZWxldGVUb0RvSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7ICAgLy90aGlzIHByb2JhYmx5IG5lZWRzIHRvIGJlIG1vZGlmaWVkIHRvIHNvbWV0aGluZyBzaW1pbGFyIHRvIGJlIHVzZWQgICAgXG4gICAgICAgICAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgdG8tZG8gaXRlbSc7XG5cbiAgICAgICAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKGRlbGV0ZVRvRG9JdGVtQnV0dG9uKTtcblxuICAgICAgICAgICAgY3JlYXRlZE5ld1RvRG8uY2xhc3NMaXN0LmFkZCh0aXRsZU9mVG9Eb0l0ZW0pO1xuICAgICAgICAgICAgY3JlYXRlZE5ld1RvRG8uY2xhc3NMaXN0LmFkZChcInRvLWRvLWl0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlZE5ld1RvRG8pO1xuXG5cblxuICAgICAgICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb0RvSXRlbUZ1bmN0aW9uKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlVG9Eb0l0ZW1GdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocHJvamVjdHNbaV0ucHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUucmVtb3ZlQ2hpbGQocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzb21ldGhpbmcwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNvbWV0aGluZzApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHNvbWV0aGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvamVjdHNbaV0ucHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChzb21ldGhpbmcpO1xuICAgICAgICAgICAgICAgIC8vIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHRvRG9JdGVtQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoY3JlYXRlZE5ld1RvRG8pOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBkb2VzIG5vdCBkZWxldGUgdGhlIG9iamVjdC5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIHByb2plY3QnO1xuXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG5cbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3RGdW5jdGlvbik7XG5cbiAgICAgICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gYWxlcnQoJ3Rlc3QnKTtcbiAgICAgICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKGRpdik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHByb2plY3RzW2ldLnRvRG9JdGVtcy5sZW5ndGg7IGErKykge1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b0RvSXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgICAgICB0b0RvSXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG8tZG8taXRlbS1jb250YWluZXJcIik7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodG9Eb0l0ZW1Db250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b0RvSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgICAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiICsgcHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlO1xuXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b0RvSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiICsgcHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvRG9JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuICAgICAgICAgICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gICAgICAgICAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCIgKyBwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0uZHVlRGF0ZTtcblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICAgICAgICAgICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuICAgICAgICAgICAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIiArIHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS5wcmlvcml0eTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlVG9Eb0l0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdG8tZG8taXRlbS1idXR0b25cIik7XG4gICAgICAgICAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgICAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgdG8tZG8gaXRlbSc7XG5cbiAgICAgICAgICAgIHRvRG9JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVRvRG9JdGVtQnV0dG9uKTtcblxuICAgICAgICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb0RvSXRlbUZ1bmN0aW9uKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlVG9Eb0l0ZW1GdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocHJvamVjdHNbaV0ucHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUucmVtb3ZlQ2hpbGQocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzb21ldGhpbmcwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNvbWV0aGluZzApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHNvbWV0aGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvamVjdHNbaV0ucHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChzb21ldGhpbmcpO1xuICAgICAgICAgICAgICAgIC8vIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHRvRG9JdGVtQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlQ2hpbGQodG9Eb0l0ZW1Db250YWluZXIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBkb2VzIG5vdCBkZWxldGUgdGhlIG9iamVjdC5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG59XG5cblxuXG5cblxuY29uc3QgbmV3UHJvamVjdEJ1dHRvblF1ZXJ5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG5cbm5ld1Byb2plY3RCdXR0b25RdWVyeVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3UHJvamVjdCk7XG5cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdCgpIHtcblxuICAgIGNvbnN0IHByb2plY3RzUXVlcnlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IHRpdGxlT2ZOZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcblxuICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCh0aXRsZU9mTmV3UHJvamVjdC52YWx1ZSk7XG5cbiAgICBuZXdQcm9qZWN0RGl2LnRleHRDb250ZW50ID0gXCJQcm9qZWN0OiBcIiArIHRpdGxlT2ZOZXdQcm9qZWN0LnZhbHVlO1xuXG4gICAgcHJvamVjdHNRdWVyeVNlbGVjdG9yLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgZGl2LmFwcGVuZChidXR0b25Db250YWluZXIpO1xuXG4gICAgY29uc3QgYWRkVG9Eb0l0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUb0RvSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvLWRvLWl0ZW0tYnV0dG9uXCIpO1xuICAgIGFkZFRvRG9JdGVtQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCB0by1kbyBpdGVtJztcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoYWRkVG9Eb0l0ZW1CdXR0b24pO1xuXG4gICAgYWRkVG9Eb0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdUb0RvKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1RvRG8oKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWROZXdUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCB0b0RvSXRlbVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICBsZXQgdGl0bGVPZlRvRG9JdGVtID0gdG9Eb0l0ZW1UaXRsZS52YWx1ZTtcbiAgICAgICAgdG9Eb0l0ZW1UaXRsZURpdi50ZXh0Q29udGVudCA9IHRpdGxlT2ZUb0RvSXRlbTtcblxuICAgICAgICBjb25zdCB0b0RvSXRlbURlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25PZlRvRG9JdGVtID0gdG9Eb0l0ZW1EZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgdG9Eb0l0ZW1EZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uT2ZUb0RvSXRlbTtcblxuICAgICAgICBjb25zdCB0b0RvSXRlbUR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0b0RvSXRlbUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpO1xuICAgICAgICBsZXQgZHVlRGF0ZU9mVG9Eb0l0ZW0gPSB0b0RvSXRlbUR1ZURhdGUudmFsdWU7XG4gICAgICAgIHRvRG9JdGVtRHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IGR1ZURhdGVPZlRvRG9JdGVtO1xuXG4gICAgICAgIGNvbnN0IHRvRG9JdGVtUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0b0RvSXRlbVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgICAgIGxldCBwcmlvcml0eU9mVG9Eb0l0ZW0gPSB0b0RvSXRlbVByaW9yaXR5LnZhbHVlO1xuICAgICAgICB0b0RvSXRlbVByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gcHJpb3JpdHlPZlRvRG9JdGVtO1xuXG4gICAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtVGl0bGVEaXYpO1xuICAgICAgICBjcmVhdGVkTmV3VG9Eby5hcHBlbmRDaGlsZCh0b0RvSXRlbURlc2NyaXB0aW9uRGl2KTtcbiAgICAgICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQodG9Eb0l0ZW1EdWVEYXRlRGl2KTtcbiAgICAgICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQodG9Eb0l0ZW1Qcmlvcml0eURpdik7XG5cblxuICAgICAgICBjb25zdCBkZWxldGVUb0RvSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRvLWRvLWl0ZW0tYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgdG8tZG8gaXRlbSc7XG5cbiAgICAgICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQoZGVsZXRlVG9Eb0l0ZW1CdXR0b24pO1xuXG4gICAgICAgIGNyZWF0ZWROZXdUb0RvLmNsYXNzTGlzdC5hZGQodGl0bGVPZlRvRG9JdGVtKTtcbiAgICAgICAgY3JlYXRlZE5ld1RvRG8uY2xhc3NMaXN0LmFkZChcInRvLWRvLWl0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVkTmV3VG9Ebyk7XG5cbiAgICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb0RvSXRlbUZ1bmN0aW9uKTtcblxuICAgICAgICBmdW5jdGlvbiBkZWxldGVUb0RvSXRlbUZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGNyZWF0ZWROZXdUb0RvKTsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgZG9lcyBub3QgZGVsZXRlIHRoZSBvYmplY3QuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b25cIik7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgcHJvamVjdCc7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3RGdW5jdGlvbik7XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGFsZXJ0KCd0ZXN0Jyk7XG4gICAgICAgIC8vIG5ld1Byb2plY3REaXYucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgLy8gY29uc3QgbmV3UHJvamVjdEJ1dHRvblF1ZXJ5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKG5ld1Byb2plY3REaXYpO1xuICAgIH1cblxufVxuXG4vLyBleHBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfTtcbi8vIGV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0cywgYWRkUHJvamVjdCB9O1xuZXhwb3J0IHsgZGlzcGxheVByb2plY3RzLCBhZGROZXdQcm9qZWN0IH07XG5cblxuXG5cblxuXG5cbi8vIFNvbWV0aGlzIGxpa2UgdGhpcyBJIGJlbGlldmUgaXMgY29ycmVjdDpcbi8vIGZvciAobGV0IHkgPSAwOyB5IDwgcHJvamVjdHMubGVuZ3RoOyB5KyspIHtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XS50b0RvSXRlbXNbeV0udGl0bGUpO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW3ldKTtcbi8vICAgICAvLyBwcm9qZWN0c1t5XVxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW3ldLnRvRG9JdGVtcyk7XG5cbi8vICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHByb2plY3RzW3ldLnRvRG9JdGVtcy5sZW5ndGg7IGErKykge1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhhKTtcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbeV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbi8vICAgICB9XG4vLyB9XG5cblxuXG5cblxuXG4vL0p1c3Qgc2F2aW5nIHRoaXMgaGVyZSBpbmNhc2UgSSBuZWVkIHRvIGdvIGJhY2s6XG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbi8vICAgICBkaXYuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUpO1xuLy8gICAgIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnByb2plY3RUaXRsZTtcblxuLy8gICAgIC8vIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIC8vIGRpdi5hcHBlbmRDaGlsZChkaXYyKTtcbi8vICAgICAvLyBkaXYyLmNsYXNzTGlzdC5hZGQocHJvamVjdHNbMF0udG9Eb0l0ZW1zWzBdLnRpdGxlKTtcbi8vICAgICAvLyBkaXYyLnRleHRDb250ZW50ID0gcHJvamVjdHNbMF0udG9Eb0l0ZW1zWzBdLnRpdGxlOyBcbi8vIH1cblxuXG5cblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcblxuLy8gICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbi8vICAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbi8vICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbi8vICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQocHJvamVjdHNbaV0ucHJvamVjdFRpdGxlKTtcbi8vICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0ucHJvamVjdFRpdGxlO1xuLy8gICAgIH1cblxuLy8gfVxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG5cbi8vICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4vLyAgICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIHByb2plY3RzRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcblxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRlc3RcIik7XG4vLyAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4vLyAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4vLyAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnByb2plY3RUaXRsZTtcblxuLy8gICAgICAgICAvLyBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICAgICAgLy8gZGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuLy8gICAgICAgICAvLyBkaXYyLmNsYXNzTGlzdC5hZGQocHJvamVjdHNbMF0udG9Eb0l0ZW1zWzBdLnRpdGxlKTtcbi8vICAgICAgICAgLy8gZGl2Mi50ZXh0Q29udGVudCA9IHByb2plY3RzWzBdLnRvRG9JdGVtc1swXS50aXRsZTtcblxuLy8gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkaXYyKTtcbi8vICAgICAgICAgICAgIC8vIGRpdjIuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXSlcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGopO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RzWzBdLnRvRG9JdGVtcy5sZW5ndGgpO1xuXG4vLyBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzWzBdLnRvRG9JdGVtcy5sZW5ndGg7IGorKykge1xuLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3RzWzBdLnRvRG9JdGVtc1tqXS50aXRsZSk7XG4vLyB9XG5cbi8vIGZvciAobGV0IGsgPSAwOyBrIDwgcHJvamVjdHNbMV0udG9Eb0l0ZW1zLmxlbmd0aDsgaysrKSB7XG4vLyAgICAgY29uc29sZS5sb2cocHJvamVjdHNbMV0udG9Eb0l0ZW1zW2tdLnRpdGxlKTtcbi8vIH1cblxuLy8gaW1wb3J0YW50OlxuLy8gZm9yIChsZXQgeSA9IDA7IHkgPCBwcm9qZWN0cy5sZW5ndGg7IHkrKykge1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW3ldLnRvRG9JdGVtc1t5XS50aXRsZSk7XG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNbeV0pO1xuLy8gICAgIC8vIHByb2plY3RzW3ldXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNbeV0udG9Eb0l0ZW1zKTtcblxuLy8gICAgIGZvciAobGV0IGEgPSAwOyBhIDwgcHJvamVjdHNbeV0udG9Eb0l0ZW1zLmxlbmd0aDsgYSsrKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGEpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XS50b0RvSXRlbXNbYV0udGl0bGUpO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gZm9yIChsZXQgeSA9IDA7IHkgPCBwcm9qZWN0cy5sZW5ndGg7IHkrKykge1xuLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3RzW3ldLnRvRG9JdGVtc1t5XS50aXRsZSk7XG4vLyB9XG5cblxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuXG4vLyAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuLy8gICAgIGNvbnN0IGRpYWxvZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGRpYWxvZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiZGlhbG9nXCIpO1xuXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaWFsb2dEaXYpO1xuXG4vLyAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4vLyAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4vLyAgICAgZGlhbG9nRGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuLy8gICAgIGxldCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dFByb2plY3ROYW1lLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXRQcm9qZWN0TmFtZS5uYW1lID0gJ3Byb2plY3QtbmFtZSc7XG4vLyAgICAgLy8gaW5wdXRQcm9qZWN0TmFtZS52YWx1ZSA9ICd0ZXN0JztcblxuLy8gICAgIGxldCBpbnB1dFByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXRQcm9qZWN0RGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dFByb2plY3REZXNjcmlwdGlvbi5uYW1lID0gJ3Byb2plY3QtZGVzY3JpcHRpb24nO1xuXG4vLyAgICAgbGV0IGlucHV0UHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0UHJvamVjdER1ZURhdGUudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dFByb2plY3REdWVEYXRlLm5hbWUgPSAnZHVlLWRhdGUnO1xuXG4vLyAgICAgbGV0IGlucHV0UHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dFByb2plY3RQcmlvcml0eS50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0UHJvamVjdFByaW9yaXR5Lm5hbWUgPSAnZHVlLWRhdGUnO1xuXG4vLyAgICAgbGV0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIHByb2plY3RTdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuLy8gICAgIHByb2plY3RTdWJtaXRCdXR0b24udmFsdWUgPSAnc3VibWl0JztcblxuLy8gICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdE5hbWUpO1xuLy8gICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdERlc2NyaXB0aW9uKTtcbi8vICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dFByb2plY3REdWVEYXRlKTtcbi8vICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dFByb2plY3RQcmlvcml0eSk7XG4vLyAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFN1Ym1pdEJ1dHRvbik7XG4vLyAgICAgLy8gY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuLy8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjsgLy8gRXhhbXBsZSBvZiBob3cgYW4gaW1wb3J0IHN0YXRlbWVudCBzaG91bGQgbG9vay5cbi8vIGltcG9ydCB7IFRvRG9JdGVtIH0gZnJvbSBcIi4vYXBwXCI7XG4vLyBpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBUb0RvSXRlbSwgUHJvamVjdCwgZXhhbXBsZVRvRG9JdGVtLCBleGFtcGxlVG9Eb0l0ZW0yLCBleGFtcGxlVG9Eb0l0ZW0zLCBleGFtcGxlVG9Eb0l0ZW00LCB3b3JrUHJvamVjdCwgaG9iYnlQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL2FwcFwiO1xuLy8gaW1wb3J0IHsgc29tZVZhcmlhYmxlIH0gZnJvbSBcIi4vYXBwXCI7XG4vLyBpbXBvcnQgeyB0ZXN0IH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMsIGFkZE5ld1Byb2plY3QgfSBmcm9tIFwiLi9kb21cIjtcblxuY29uc29sZS5sb2coVG9Eb0l0ZW0pO1xuY29uc29sZS5sb2coUHJvamVjdCk7XG5cbmNvbnNvbGUubG9nKGV4YW1wbGVUb0RvSXRlbSk7XG5jb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW0yKTtcbmNvbnNvbGUubG9nKGV4YW1wbGVUb0RvSXRlbTMpO1xuY29uc29sZS5sb2coZXhhbXBsZVRvRG9JdGVtNCk7XG5cbmNvbnNvbGUubG9nKHdvcmtQcm9qZWN0KTtcbmNvbnNvbGUubG9nKGhvYmJ5UHJvamVjdCk7XG5cbmNvbnNvbGUubG9nKHByb2plY3RzKTtcbi8vIHRlc3QoKTtcbi8vIGFkZFByb2plY3QoKTtcbmRpc3BsYXlQcm9qZWN0cygpO1xuLy8gYWRkTmV3UHJvamVjdCgpO1xuXG4vLyBjb25zdCBuZXdQcm9qZWN0QnV0dG9uUXVlcnlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcblxuLy8gbmV3UHJvamVjdEJ1dHRvblF1ZXJ5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTtcblxuLy8gbGV0IGV4YW1wbGVUb0RvSXRlbSA9IG5ldyBUb0RvSXRlbShcIlN0dWR5XCIsIFwiU3R1ZHkgaGFyZFwiLCBcIkRlY2VtYmVyIDEsIDIwMjNcIiwgXCJIaWdoXCIpO1xuXG4vLyBsZXQgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIik7XG5cbi8vIGRlZmF1bHRQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbSk7XG5cbi8vIGNvbnNvbGUubG9nKGV4YW1wbGVUb0RvSXRlbSk7XG5cbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LnRvRG9JdGVtc1swXSk7XG5cbi8vIGNvbnNvbGUubG9nKHNvbWVWYXJpYWJsZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9