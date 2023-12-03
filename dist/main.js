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

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    newProjectDiv.append(buttonContainer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7Ozs7OztVQzNjQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDckIsWUFBWSxPQUFPLGVBQWU7QUFDbEMsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksVUFBVTtBQUNnSTtBQUN0SixZQUFZLGVBQWU7QUFDM0IsWUFBWSxPQUFPO0FBQ29DOztBQUV2RCxZQUFZLDBDQUFRO0FBQ3BCLFlBQVkseUNBQU87O0FBRW5CLFlBQVksaURBQWU7QUFDM0IsWUFBWSxrREFBZ0I7QUFDNUIsWUFBWSxrREFBZ0I7QUFDNUIsWUFBWSxrREFBZ0I7O0FBRTVCLFlBQVksNkNBQVc7QUFDdkIsWUFBWSw4Q0FBWTs7QUFFeEIsWUFBWSwwQ0FBUTtBQUNwQjtBQUNBO0FBQ0EscURBQWU7QUFDZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGdhcDogMnJlbTtcbn1cblxuLnRvLWRvLWl0ZW0tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDFyZW07XG59XG5cbi8qIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTByZW07XG59ICovXG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9qZWN0LWZvcm0ge1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLnByb2plY3RzID4gZGl2IHtcbiAgICB3aWR0aDogMTJyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7OztHQUlHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4udG8tZG8taXRlbS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbi8qIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTByZW07XFxufSAqL1xcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnByb2plY3RzID4gZGl2IHtcXG4gICAgd2lkdGg6IDEycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSBcIi4vZG9tXCI7XG5cbi8vIEFycmF5IGZvciBwcm9qZWN0IG9iamVjdHNcbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5jbGFzcyBUb0RvSXRlbSB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgIH1cblxuICAgIHRvRG9JdGVtcyA9IFtdO1xufVxuXG4vLyBsZXQgc29tZVZhcmlhYmxlID0gNTtcblxubGV0IGV4YW1wbGVUb0RvSXRlbSA9IG5ldyBUb0RvSXRlbShcIkVtYWlsXCIsIFwiUmVhZCBlbWFpbHNcIiwgXCJEZWNlbWJlciAxLCAyMDIzXCIsIFwiTWVkaXVtXCIpO1xubGV0IGV4YW1wbGVUb0RvSXRlbTIgPSBuZXcgVG9Eb0l0ZW0oXCJQcm9ncmFtXCIsIFwiQ29tcHV0ZXIgcHJvZ3JhbW1pbmdcIiwgXCJEZWNlbWJlciAxLCAyMDIzXCIsIFwiSGlnaFwiKTtcblxubGV0IGV4YW1wbGVUb0RvSXRlbTMgPSBuZXcgVG9Eb0l0ZW0oXCJHdWl0YXJcIiwgXCJQcmFjdGljZSBndWl0YXJcIiwgXCJEZWNlbWJlciAxLCAyMDIzXCIsIFwiTG93XCIpO1xubGV0IGV4YW1wbGVUb0RvSXRlbTQgPSBuZXcgVG9Eb0l0ZW0oXCJFeGVyY2lzZVwiLCBcIkdvIHRvIGd5bVwiLCBcIkRlY2VtYmVyIDEsIDIwMjNcIiwgXCJMb3dcIik7XG5cbmxldCB3b3JrUHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiV29ya1wiKTtcbmxldCBob2JieVByb2plY3QgPSBuZXcgUHJvamVjdChcIkhvYmJpZXNcIik7XG5cbndvcmtQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbSk7XG53b3JrUHJvamVjdC50b0RvSXRlbXMucHVzaChleGFtcGxlVG9Eb0l0ZW0yKTtcblxuaG9iYnlQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbTMpO1xuaG9iYnlQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbTQpO1xuXG5wcm9qZWN0cy5wdXNoKHdvcmtQcm9qZWN0KTtcbnByb2plY3RzLnB1c2goaG9iYnlQcm9qZWN0KTtcblxuLy8gZnVuY3Rpb24gZGVsZXRlVG9Eb0l0ZW1GdW5jdGlvbigpIHtcblxuLy8gICAgIC8vIHRvRG9JdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQocHJvamVjdHNbMF0udG9Eb0l0ZW1zWzBdLnRpdGxlKTtcblxuLy8gICAgIC8vIGhvYmJ5UHJvamVjdC50b0RvSXRlbXMucG9wKCk7XG4vLyAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBob2JieVByb2plY3QudG9Eb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cbi8vICAgICAvLyB9XG4vLyAgICAgLy8gY29uc3QgYnV0dG9uUXVlcnlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RlbGV0ZS10by1kby1pdGVtLWJ1dHRvbicpO1xuLy8gICAgIC8vIGNvbnN0IHRvRG9JdGVtVGl0bGVRdWVyeVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihUb0RvSXRlbS50aXRsZSk7XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4vLyAgICAgLy8gYWxlcnQoXCJoaVwiKTtcbi8vICAgICAvLyBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoKTtcbi8vICAgICAvLyBpZiAoaW5kZXggPiAtMSkgeyAvLyBvbmx5IHNwbGljZSBhcnJheSB3aGVuIGl0ZW0gaXMgZm91bmRcbi8vICAgICAvLyAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTsgLy8gMm5kIHBhcmFtZXRlciBtZWFucyByZW1vdmUgb25lIGl0ZW0gb25seVxuLy8gICAgIC8vIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gY3JlYXRlTmV3VG9EbygpIHtcbi8vICAgICAvLyBhbGVydChcImhpXCIpO1xuLy8gICAgIGxldCBleGFtcGxlVG9Eb0l0ZW01ID0gbmV3IFRvRG9JdGVtKFwiVGVzdFwiLCBcIlRlc3RpbmcgZW1haWxzXCIsIFwiRGVjZW1iZXIgMSwgMjAyM1wiLCBcIkhpZ2hcIik7XG4vLyAgICAgd29ya1Byb2plY3QudG9Eb0l0ZW1zLnB1c2goZXhhbXBsZVRvRG9JdGVtNSk7XG4vLyAgICAgLy8gcHJvamVjdHMucHVzaCh3b3JrUHJvamVjdCk7IC8vdGhpcyBtZXNzZXMgaXQgdXAgZm9yIHNvbWUgcmVhc29uXG4vLyAgICAgY29uc29sZS5sb2coZXhhbXBsZVRvRG9JdGVtNSk7XG4vLyAgICAgLy8gZGlzcGxheVByb2plY3RzKCk7IC8vTWF5YmUgc29tZXRoaW5nIHNpbWlsYXIgdG8gdGhpcz8/IC8vU29tZXRoaW5nIHRoYXQgY2xlYXJzIERPTSB0b28/Pz9cbi8vICAgICAvLyBjbGVhcigpO1xuLy8gICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuLy8gICAgIGNsZWFyKCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNsZWFyKCkge1xuLy8gICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuLy8gICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4vLyAgICAgY29udGVudC5yZW1vdmVDaGlsZChwcm9qZWN0cyk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4vLyAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm9qZWN0cycpO1xuLy8gICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBuZXdQcm9qZWN0RGl2LnRleHRDb250ZW50ID0gJ3Rlc3QnO1xuLy8gICAgIHByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBkZWxldGVUb0RvSXRlbSgpIHtcblxuLy8gfVxuXG4vLyBleHBvcnQgeyBUb0RvSXRlbSwgUHJvamVjdCwgc29tZVZhcmlhYmxlIH07XG4vLyBleHBvcnQgeyBUb0RvSXRlbSwgUHJvamVjdCB9O1xuXG4vLyBleHBvcnQge1xuLy8gICAgIFRvRG9JdGVtLCBQcm9qZWN0LCBleGFtcGxlVG9Eb0l0ZW0sIGV4YW1wbGVUb0RvSXRlbTIsIGV4YW1wbGVUb0RvSXRlbTMsIGV4YW1wbGVUb0RvSXRlbTQsIHdvcmtQcm9qZWN0LCBob2JieVByb2plY3QsIHByb2plY3RzLFxuLy8gICAgIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24sIGNyZWF0ZU5ld1RvRG8sIGNsZWFyLCBjcmVhdGVOZXdQcm9qZWN0XG4vLyB9O1xuXG4vLyBleHBvcnQge1xuLy8gICAgIFRvRG9JdGVtLCBQcm9qZWN0LCBleGFtcGxlVG9Eb0l0ZW0sIGV4YW1wbGVUb0RvSXRlbTIsIGV4YW1wbGVUb0RvSXRlbTMsIGV4YW1wbGVUb0RvSXRlbTQsIHdvcmtQcm9qZWN0LCBob2JieVByb2plY3QsIHByb2plY3RzLFxuLy8gICAgIGNyZWF0ZU5ld1RvRG8sIGNsZWFyLCBjcmVhdGVOZXdQcm9qZWN0XG4vLyB9O1xuXG4vLyBleHBvcnQge1xuLy8gICAgIFRvRG9JdGVtLCBQcm9qZWN0LCBleGFtcGxlVG9Eb0l0ZW0sIGV4YW1wbGVUb0RvSXRlbTIsIGV4YW1wbGVUb0RvSXRlbTMsIGV4YW1wbGVUb0RvSXRlbTQsIHdvcmtQcm9qZWN0LCBob2JieVByb2plY3QsIHByb2plY3RzLFxuLy8gICAgIGNyZWF0ZU5ld1RvRG8sIGNsZWFyXG4vLyB9O1xuXG4vLyBleHBvcnQge1xuLy8gICAgIFRvRG9JdGVtLCBQcm9qZWN0LCBleGFtcGxlVG9Eb0l0ZW0sIGV4YW1wbGVUb0RvSXRlbTIsIGV4YW1wbGVUb0RvSXRlbTMsIGV4YW1wbGVUb0RvSXRlbTQsIHdvcmtQcm9qZWN0LCBob2JieVByb2plY3QsIHByb2plY3RzLCBjbGVhclxuLy8gfTtcblxuZXhwb3J0IHtcbiAgICBUb0RvSXRlbSwgUHJvamVjdCwgZXhhbXBsZVRvRG9JdGVtLCBleGFtcGxlVG9Eb0l0ZW0yLCBleGFtcGxlVG9Eb0l0ZW0zLCBleGFtcGxlVG9Eb0l0ZW00LCB3b3JrUHJvamVjdCwgaG9iYnlQcm9qZWN0LCBwcm9qZWN0c1xufTsiLCJpbXBvcnQgeyBwcm9qZWN0cywgZGVsZXRlVG9Eb0l0ZW1GdW5jdGlvbiwgY3JlYXRlTmV3VG9EbyB9IGZyb20gXCIuL2FwcFwiO1xuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IFwiUHJvamVjdDogXCIgKyBwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGU7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgZGl2LmFwcGVuZChidXR0b25Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGFkZFRvRG9JdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFRvRG9JdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG8tZG8taXRlbS1idXR0b25cIik7XG4gICAgICAgIGFkZFRvRG9JdGVtQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCB0by1kbyBpdGVtJztcblxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGFkZFRvRG9JdGVtQnV0dG9uKTtcblxuICAgICAgICBhZGRUb0RvSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld1RvRG8pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1RvRG8oKSB7XG4gICAgICAgICAgICAvLyBhbGVydCgndGVzdCcpO1xuICAgICAgICAgICAgY29uc3QgY3JlYXRlZE5ld1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgLy8gZGl2LmFwcGVuZENoaWxkKGNyZWF0ZWROZXdUb0RvKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlZE5ld1RvRG8udGV4dENvbnRlbnQgPSAndGVzdCc7XG4gICAgICAgICAgICAvLyBjcmVhdGVkTmV3VG9EbyA9IFxuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW1UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgICAgICBsZXQgdGl0bGVPZlRvRG9JdGVtID0gdG9Eb0l0ZW1UaXRsZS52YWx1ZTtcbiAgICAgICAgICAgIHRvRG9JdGVtVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aXRsZU9mVG9Eb0l0ZW07XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uT2ZUb0RvSXRlbSA9IHRvRG9JdGVtRGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgICAgICB0b0RvSXRlbURlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25PZlRvRG9JdGVtO1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbUR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW1EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUnKTtcbiAgICAgICAgICAgIGxldCBkdWVEYXRlT2ZUb0RvSXRlbSA9IHRvRG9JdGVtRHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHRvRG9JdGVtRHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IGR1ZURhdGVPZlRvRG9JdGVtO1xuXG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbVByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eU9mVG9Eb0l0ZW0gPSB0b0RvSXRlbVByaW9yaXR5LnZhbHVlO1xuICAgICAgICAgICAgdG9Eb0l0ZW1Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHByaW9yaXR5T2ZUb0RvSXRlbTtcblxuICAgICAgICAgICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQodG9Eb0l0ZW1UaXRsZURpdik7XG4gICAgICAgICAgICBjcmVhdGVkTmV3VG9Eby5hcHBlbmRDaGlsZCh0b0RvSXRlbURlc2NyaXB0aW9uRGl2KTtcbiAgICAgICAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtRHVlRGF0ZURpdik7XG4gICAgICAgICAgICBjcmVhdGVkTmV3VG9Eby5hcHBlbmRDaGlsZCh0b0RvSXRlbVByaW9yaXR5RGl2KTtcblxuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVUb0RvSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10by1kby1pdGVtLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIC8vIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTsgICAvL3RoaXMgcHJvYmFibHkgbmVlZHMgdG8gYmUgbW9kaWZpZWQgdG8gc29tZXRoaW5nIHNpbWlsYXIgdG8gYmUgdXNlZCAgICBcbiAgICAgICAgICAgIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSB0by1kbyBpdGVtJztcblxuICAgICAgICAgICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQoZGVsZXRlVG9Eb0l0ZW1CdXR0b24pO1xuXG4gICAgICAgICAgICBjcmVhdGVkTmV3VG9Eby5jbGFzc0xpc3QuYWRkKHRpdGxlT2ZUb0RvSXRlbSk7XG4gICAgICAgICAgICBjcmVhdGVkTmV3VG9Eby5jbGFzc0xpc3QuYWRkKFwidG8tZG8taXRlbS1jb250YWluZXJcIik7XG5cbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVkTmV3VG9Ebyk7XG5cblxuXG4gICAgICAgICAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVUb0RvSXRlbUZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIHByb2plY3RzW2ldLnByb2plY3RUaXRsZS5yZW1vdmVDaGlsZChwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHNvbWV0aGluZzAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc29tZXRoaW5nMCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc29tZXRoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHNvbWV0aGluZyk7XG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQodG9Eb0l0ZW1Db250YWluZXIpO1xuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZChjcmVhdGVkTmV3VG9Ebyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGRvZXMgbm90IGRlbGV0ZSB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgcHJvamVjdCc7XG5cbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvamVjdEZ1bmN0aW9uKTtcblxuICAgICAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBhbGVydCgndGVzdCcpO1xuICAgICAgICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgcHJvamVjdHNbaV0udG9Eb0l0ZW1zLmxlbmd0aDsgYSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvRG9JdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbiAgICAgICAgICAgIHRvRG9JdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0by1kby1pdGVtLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0b0RvSXRlbUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvRG9JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICAgICAgICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gXCJUaXRsZTogXCIgKyBwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGU7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvRG9JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCIgKyBwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gICAgICAgICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgICAgICAgICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIiArIHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS5kdWVEYXRlO1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b0RvSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG4gICAgICAgICAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gICAgICAgICAgICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiICsgcHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnByaW9yaXR5O1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVUb0RvSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10by1kby1pdGVtLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbiAgICAgICAgICAgIGRlbGV0ZVRvRG9JdGVtQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSB0by1kbyBpdGVtJztcblxuICAgICAgICAgICAgdG9Eb0l0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVG9Eb0l0ZW1CdXR0b24pO1xuXG4gICAgICAgICAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVUb0RvSXRlbUZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIHByb2plY3RzW2ldLnByb2plY3RUaXRsZS5yZW1vdmVDaGlsZChwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHNvbWV0aGluZzAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc29tZXRoaW5nMCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc29tZXRoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHNvbWV0aGluZyk7XG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQodG9Eb0l0ZW1Db250YWluZXIpO1xuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZCh0b0RvSXRlbUNvbnRhaW5lcik7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGRvZXMgbm90IGRlbGV0ZSB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbn1cblxuXG5cblxuXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uUXVlcnlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcblxubmV3UHJvamVjdEJ1dHRvblF1ZXJ5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTtcblxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuXG4gICAgY29uc3QgcHJvamVjdHNRdWVyeVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgdGl0bGVPZk5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xuXG4gICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKHRpdGxlT2ZOZXdQcm9qZWN0LnZhbHVlKTtcblxuICAgIG5ld1Byb2plY3REaXYudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6IFwiICsgdGl0bGVPZk5ld1Byb2plY3QudmFsdWU7XG5cbiAgICBwcm9qZWN0c1F1ZXJ5U2VsZWN0b3IuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGFkZFRvRG9JdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVG9Eb0l0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC10by1kby1pdGVtLWJ1dHRvblwiKTtcbiAgICBhZGRUb0RvSXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgdG8tZG8gaXRlbSc7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGFkZFRvRG9JdGVtQnV0dG9uKTtcblxuICAgIGFkZFRvRG9JdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3VG9Ebyk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdUb0RvKCkge1xuICAgICAgICBjb25zdCBjcmVhdGVkTmV3VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRvRG9JdGVtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgbGV0IHRpdGxlT2ZUb0RvSXRlbSA9IHRvRG9JdGVtVGl0bGUudmFsdWU7XG4gICAgICAgIHRvRG9JdGVtVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aXRsZU9mVG9Eb0l0ZW07XG5cbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1EZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRvRG9JdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uT2ZUb0RvSXRlbSA9IHRvRG9JdGVtRGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIHRvRG9JdGVtRGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbk9mVG9Eb0l0ZW07XG5cbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1EdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUnKTtcbiAgICAgICAgbGV0IGR1ZURhdGVPZlRvRG9JdGVtID0gdG9Eb0l0ZW1EdWVEYXRlLnZhbHVlO1xuICAgICAgICB0b0RvSXRlbUR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSBkdWVEYXRlT2ZUb0RvSXRlbTtcblxuICAgICAgICBjb25zdCB0b0RvSXRlbVByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdG9Eb0l0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgICAgICBsZXQgcHJpb3JpdHlPZlRvRG9JdGVtID0gdG9Eb0l0ZW1Qcmlvcml0eS52YWx1ZTtcbiAgICAgICAgdG9Eb0l0ZW1Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHByaW9yaXR5T2ZUb0RvSXRlbTtcblxuICAgICAgICBjcmVhdGVkTmV3VG9Eby5hcHBlbmRDaGlsZCh0b0RvSXRlbVRpdGxlRGl2KTtcbiAgICAgICAgY3JlYXRlZE5ld1RvRG8uYXBwZW5kQ2hpbGQodG9Eb0l0ZW1EZXNjcmlwdGlvbkRpdik7XG4gICAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtRHVlRGF0ZURpdik7XG4gICAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKHRvRG9JdGVtUHJpb3JpdHlEaXYpO1xuXG5cbiAgICAgICAgY29uc3QgZGVsZXRlVG9Eb0l0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10by1kby1pdGVtLWJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIHRvLWRvIGl0ZW0nO1xuXG4gICAgICAgIGNyZWF0ZWROZXdUb0RvLmFwcGVuZENoaWxkKGRlbGV0ZVRvRG9JdGVtQnV0dG9uKTtcblxuICAgICAgICBjcmVhdGVkTmV3VG9Eby5jbGFzc0xpc3QuYWRkKHRpdGxlT2ZUb0RvSXRlbSk7XG4gICAgICAgIGNyZWF0ZWROZXdUb0RvLmNsYXNzTGlzdC5hZGQoXCJ0by1kby1pdGVtLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZWROZXdUb0RvKTtcblxuICAgICAgICBkZWxldGVUb0RvSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVRvRG9JdGVtRnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0RGl2LnJlbW92ZUNoaWxkKGNyZWF0ZWROZXdUb0RvKTsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgZG9lcyBub3QgZGVsZXRlIHRoZSBvYmplY3QuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b25cIik7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgcHJvamVjdCc7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3RGdW5jdGlvbik7XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGFsZXJ0KCd0ZXN0Jyk7XG4gICAgICAgIC8vIG5ld1Byb2plY3REaXYucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgLy8gY29uc3QgbmV3UHJvamVjdEJ1dHRvblF1ZXJ5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKG5ld1Byb2plY3REaXYpO1xuICAgIH1cblxufVxuXG4vLyBleHBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfTtcbi8vIGV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0cywgYWRkUHJvamVjdCB9O1xuZXhwb3J0IHsgZGlzcGxheVByb2plY3RzLCBhZGROZXdQcm9qZWN0IH07XG5cblxuXG5cblxuXG5cbi8vIFNvbWV0aGlzIGxpa2UgdGhpcyBJIGJlbGlldmUgaXMgY29ycmVjdDpcbi8vIGZvciAobGV0IHkgPSAwOyB5IDwgcHJvamVjdHMubGVuZ3RoOyB5KyspIHtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XS50b0RvSXRlbXNbeV0udGl0bGUpO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW3ldKTtcbi8vICAgICAvLyBwcm9qZWN0c1t5XVxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW3ldLnRvRG9JdGVtcyk7XG5cbi8vICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHByb2plY3RzW3ldLnRvRG9JdGVtcy5sZW5ndGg7IGErKykge1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhhKTtcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbeV0udG9Eb0l0ZW1zW2FdLnRpdGxlKTtcbi8vICAgICB9XG4vLyB9XG5cblxuXG5cblxuXG4vL0p1c3Qgc2F2aW5nIHRoaXMgaGVyZSBpbmNhc2UgSSBuZWVkIHRvIGdvIGJhY2s6XG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbi8vICAgICBkaXYuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUpO1xuLy8gICAgIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnByb2plY3RUaXRsZTtcblxuLy8gICAgIC8vIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIC8vIGRpdi5hcHBlbmRDaGlsZChkaXYyKTtcbi8vICAgICAvLyBkaXYyLmNsYXNzTGlzdC5hZGQocHJvamVjdHNbMF0udG9Eb0l0ZW1zWzBdLnRpdGxlKTtcbi8vICAgICAvLyBkaXYyLnRleHRDb250ZW50ID0gcHJvamVjdHNbMF0udG9Eb0l0ZW1zWzBdLnRpdGxlOyBcbi8vIH1cblxuXG5cblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcblxuLy8gICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbi8vICAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbi8vICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbi8vICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQocHJvamVjdHNbaV0ucHJvamVjdFRpdGxlKTtcbi8vICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0ucHJvamVjdFRpdGxlO1xuLy8gICAgIH1cblxuLy8gfVxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG5cbi8vICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4vLyAgICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIHByb2plY3RzRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcblxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRlc3RcIik7XG4vLyAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4vLyAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4vLyAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnByb2plY3RUaXRsZTtcblxuLy8gICAgICAgICAvLyBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICAgICAgLy8gZGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuLy8gICAgICAgICAvLyBkaXYyLmNsYXNzTGlzdC5hZGQocHJvamVjdHNbMF0udG9Eb0l0ZW1zWzBdLnRpdGxlKTtcbi8vICAgICAgICAgLy8gZGl2Mi50ZXh0Q29udGVudCA9IHByb2plY3RzWzBdLnRvRG9JdGVtc1swXS50aXRsZTtcblxuLy8gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkaXYyKTtcbi8vICAgICAgICAgICAgIC8vIGRpdjIuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXSlcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGopO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RzWzBdLnRvRG9JdGVtcy5sZW5ndGgpO1xuXG4vLyBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzWzBdLnRvRG9JdGVtcy5sZW5ndGg7IGorKykge1xuLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3RzWzBdLnRvRG9JdGVtc1tqXS50aXRsZSk7XG4vLyB9XG5cbi8vIGZvciAobGV0IGsgPSAwOyBrIDwgcHJvamVjdHNbMV0udG9Eb0l0ZW1zLmxlbmd0aDsgaysrKSB7XG4vLyAgICAgY29uc29sZS5sb2cocHJvamVjdHNbMV0udG9Eb0l0ZW1zW2tdLnRpdGxlKTtcbi8vIH1cblxuLy8gaW1wb3J0YW50OlxuLy8gZm9yIChsZXQgeSA9IDA7IHkgPCBwcm9qZWN0cy5sZW5ndGg7IHkrKykge1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW3ldLnRvRG9JdGVtc1t5XS50aXRsZSk7XG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNbeV0pO1xuLy8gICAgIC8vIHByb2plY3RzW3ldXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNbeV0udG9Eb0l0ZW1zKTtcblxuLy8gICAgIGZvciAobGV0IGEgPSAwOyBhIDwgcHJvamVjdHNbeV0udG9Eb0l0ZW1zLmxlbmd0aDsgYSsrKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGEpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XS50b0RvSXRlbXNbYV0udGl0bGUpO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gZm9yIChsZXQgeSA9IDA7IHkgPCBwcm9qZWN0cy5sZW5ndGg7IHkrKykge1xuLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3RzW3ldLnRvRG9JdGVtc1t5XS50aXRsZSk7XG4vLyB9XG5cblxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuXG4vLyAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuLy8gICAgIGNvbnN0IGRpYWxvZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGRpYWxvZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiZGlhbG9nXCIpO1xuXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaWFsb2dEaXYpO1xuXG4vLyAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4vLyAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4vLyAgICAgZGlhbG9nRGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuLy8gICAgIGxldCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dFByb2plY3ROYW1lLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXRQcm9qZWN0TmFtZS5uYW1lID0gJ3Byb2plY3QtbmFtZSc7XG4vLyAgICAgLy8gaW5wdXRQcm9qZWN0TmFtZS52YWx1ZSA9ICd0ZXN0JztcblxuLy8gICAgIGxldCBpbnB1dFByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXRQcm9qZWN0RGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dFByb2plY3REZXNjcmlwdGlvbi5uYW1lID0gJ3Byb2plY3QtZGVzY3JpcHRpb24nO1xuXG4vLyAgICAgbGV0IGlucHV0UHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0UHJvamVjdER1ZURhdGUudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dFByb2plY3REdWVEYXRlLm5hbWUgPSAnZHVlLWRhdGUnO1xuXG4vLyAgICAgbGV0IGlucHV0UHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dFByb2plY3RQcmlvcml0eS50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0UHJvamVjdFByaW9yaXR5Lm5hbWUgPSAnZHVlLWRhdGUnO1xuXG4vLyAgICAgbGV0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIHByb2plY3RTdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuLy8gICAgIHByb2plY3RTdWJtaXRCdXR0b24udmFsdWUgPSAnc3VibWl0JztcblxuLy8gICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdE5hbWUpO1xuLy8gICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdERlc2NyaXB0aW9uKTtcbi8vICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dFByb2plY3REdWVEYXRlKTtcbi8vICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dFByb2plY3RQcmlvcml0eSk7XG4vLyAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFN1Ym1pdEJ1dHRvbik7XG4vLyAgICAgLy8gY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuLy8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjsgLy8gRXhhbXBsZSBvZiBob3cgYW4gaW1wb3J0IHN0YXRlbWVudCBzaG91bGQgbG9vay5cbi8vIGltcG9ydCB7IFRvRG9JdGVtIH0gZnJvbSBcIi4vYXBwXCI7XG4vLyBpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBUb0RvSXRlbSwgUHJvamVjdCwgZXhhbXBsZVRvRG9JdGVtLCBleGFtcGxlVG9Eb0l0ZW0yLCBleGFtcGxlVG9Eb0l0ZW0zLCBleGFtcGxlVG9Eb0l0ZW00LCB3b3JrUHJvamVjdCwgaG9iYnlQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL2FwcFwiO1xuLy8gaW1wb3J0IHsgc29tZVZhcmlhYmxlIH0gZnJvbSBcIi4vYXBwXCI7XG4vLyBpbXBvcnQgeyB0ZXN0IH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMsIGFkZE5ld1Byb2plY3QgfSBmcm9tIFwiLi9kb21cIjtcblxuY29uc29sZS5sb2coVG9Eb0l0ZW0pO1xuY29uc29sZS5sb2coUHJvamVjdCk7XG5cbmNvbnNvbGUubG9nKGV4YW1wbGVUb0RvSXRlbSk7XG5jb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW0yKTtcbmNvbnNvbGUubG9nKGV4YW1wbGVUb0RvSXRlbTMpO1xuY29uc29sZS5sb2coZXhhbXBsZVRvRG9JdGVtNCk7XG5cbmNvbnNvbGUubG9nKHdvcmtQcm9qZWN0KTtcbmNvbnNvbGUubG9nKGhvYmJ5UHJvamVjdCk7XG5cbmNvbnNvbGUubG9nKHByb2plY3RzKTtcbi8vIHRlc3QoKTtcbi8vIGFkZFByb2plY3QoKTtcbmRpc3BsYXlQcm9qZWN0cygpO1xuLy8gYWRkTmV3UHJvamVjdCgpO1xuXG4vLyBjb25zdCBuZXdQcm9qZWN0QnV0dG9uUXVlcnlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcblxuLy8gbmV3UHJvamVjdEJ1dHRvblF1ZXJ5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTtcblxuLy8gbGV0IGV4YW1wbGVUb0RvSXRlbSA9IG5ldyBUb0RvSXRlbShcIlN0dWR5XCIsIFwiU3R1ZHkgaGFyZFwiLCBcIkRlY2VtYmVyIDEsIDIwMjNcIiwgXCJIaWdoXCIpO1xuXG4vLyBsZXQgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIik7XG5cbi8vIGRlZmF1bHRQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbSk7XG5cbi8vIGNvbnNvbGUubG9nKGV4YW1wbGVUb0RvSXRlbSk7XG5cbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LnRvRG9JdGVtc1swXSk7XG5cbi8vIGNvbnNvbGUubG9nKHNvbWVWYXJpYWJsZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9