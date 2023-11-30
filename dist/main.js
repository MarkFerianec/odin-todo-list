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

            const deleteToDoItem = document.createElement('button');
            deleteToDoItem.classList.add("delete-to-do-item-button");
            deleteToDoItem.textContent = 'Delete to-do item';

            toDoItemContainer.appendChild(deleteToDoItem);

        }

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        div.append(buttonContainer);

        const addToDoItemButton = document.createElement('button');
        addToDoItemButton.classList.add("add-to-do-item-button");
        addToDoItemButton.textContent = 'Add to-do item';

        buttonContainer.append(addToDoItemButton);

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add("delete-project-button");
        deleteProjectButton.textContent = 'Delete project';

        buttonContainer.append(deleteProjectButton);

    }

}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3JCLFlBQVksT0FBTyxlQUFlO0FBQ2xDLFlBQVksV0FBVztBQUN2QixZQUFZLFVBQVU7QUFDZ0k7QUFDdEosWUFBWSxlQUFlO0FBQzNCLFlBQVksT0FBTztBQUNpQzs7QUFFcEQsWUFBWSwwQ0FBUTtBQUNwQixZQUFZLHlDQUFPOztBQUVuQixZQUFZLGlEQUFlO0FBQzNCLFlBQVksa0RBQWdCO0FBQzVCLFlBQVksa0RBQWdCO0FBQzVCLFlBQVksa0RBQWdCOztBQUU1QixZQUFZLDZDQUFXO0FBQ3ZCLFlBQVksOENBQVk7O0FBRXhCLFlBQVksMENBQVE7QUFDcEI7QUFDQTtBQUNBLHFEQUFlOzs7O0FBSWY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IDJyZW07XG59XG5cbi50by1kby1pdGVtLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4uZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMHJlbTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLnRvLWRvLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gQXJyYXkgZm9yIHByb2plY3Qgb2JqZWN0c1xubGV0IHByb2plY3RzID0gW107XG5cbmNsYXNzIFRvRG9JdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gICAgfVxuXG4gICAgdG9Eb0l0ZW1zID0gW107XG59XG5cbi8vIGxldCBzb21lVmFyaWFibGUgPSA1O1xuXG5sZXQgZXhhbXBsZVRvRG9JdGVtID0gbmV3IFRvRG9JdGVtKFwiRW1haWxcIiwgXCJSZWFkIGVtYWlsc1wiLCBcIkRlY2VtYmVyIDEsIDIwMjNcIiwgXCJNZWRpdW1cIik7XG5sZXQgZXhhbXBsZVRvRG9JdGVtMiA9IG5ldyBUb0RvSXRlbShcIlByb2dyYW1cIiwgXCJDb21wdXRlciBwcm9ncmFtbWluZ1wiLCBcIkRlY2VtYmVyIDEsIDIwMjNcIiwgXCJIaWdoXCIpO1xuXG5sZXQgZXhhbXBsZVRvRG9JdGVtMyA9IG5ldyBUb0RvSXRlbShcIkd1aXRhclwiLCBcIlByYWN0aWNlIGd1aXRhclwiLCBcIkRlY2VtYmVyIDEsIDIwMjNcIiwgXCJMb3dcIik7XG5sZXQgZXhhbXBsZVRvRG9JdGVtNCA9IG5ldyBUb0RvSXRlbShcIkV4ZXJjaXNlXCIsIFwiR28gdG8gZ3ltXCIsIFwiRGVjZW1iZXIgMSwgMjAyM1wiLCBcIkxvd1wiKTtcblxubGV0IHdvcmtQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJXb3JrXCIpO1xubGV0IGhvYmJ5UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiSG9iYmllc1wiKTtcblxud29ya1Byb2plY3QudG9Eb0l0ZW1zLnB1c2goZXhhbXBsZVRvRG9JdGVtKTtcbndvcmtQcm9qZWN0LnRvRG9JdGVtcy5wdXNoKGV4YW1wbGVUb0RvSXRlbTIpO1xuXG5ob2JieVByb2plY3QudG9Eb0l0ZW1zLnB1c2goZXhhbXBsZVRvRG9JdGVtMyk7XG5ob2JieVByb2plY3QudG9Eb0l0ZW1zLnB1c2goZXhhbXBsZVRvRG9JdGVtNCk7XG5cbnByb2plY3RzLnB1c2god29ya1Byb2plY3QpO1xucHJvamVjdHMucHVzaChob2JieVByb2plY3QpO1xuXG4vLyBleHBvcnQgeyBUb0RvSXRlbSwgUHJvamVjdCwgc29tZVZhcmlhYmxlIH07XG4vLyBleHBvcnQgeyBUb0RvSXRlbSwgUHJvamVjdCB9O1xuZXhwb3J0IHsgVG9Eb0l0ZW0sIFByb2plY3QsIGV4YW1wbGVUb0RvSXRlbSwgZXhhbXBsZVRvRG9JdGVtMiwgZXhhbXBsZVRvRG9JdGVtMywgZXhhbXBsZVRvRG9JdGVtNCwgd29ya1Byb2plY3QsIGhvYmJ5UHJvamVjdCwgcHJvamVjdHMgfTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2FwcFwiO1xuXG4vLyBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuXG4vLyAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuLy8gICAgIGNvbnN0IGRpYWxvZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGRpYWxvZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiZGlhbG9nXCIpO1xuXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaWFsb2dEaXYpO1xuXG4vLyAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4vLyAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4vLyAgICAgZGlhbG9nRGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuLy8gICAgIGxldCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dFByb2plY3ROYW1lLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXRQcm9qZWN0TmFtZS5uYW1lID0gJ3Byb2plY3QtbmFtZSc7XG4vLyAgICAgLy8gaW5wdXRQcm9qZWN0TmFtZS52YWx1ZSA9ICd0ZXN0JztcblxuLy8gICAgIGxldCBpbnB1dFByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXRQcm9qZWN0RGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dFByb2plY3REZXNjcmlwdGlvbi5uYW1lID0gJ3Byb2plY3QtZGVzY3JpcHRpb24nO1xuXG4vLyAgICAgbGV0IGlucHV0UHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0UHJvamVjdER1ZURhdGUudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dFByb2plY3REdWVEYXRlLm5hbWUgPSAnZHVlLWRhdGUnO1xuXG4vLyAgICAgbGV0IGlucHV0UHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dFByb2plY3RQcmlvcml0eS50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0UHJvamVjdFByaW9yaXR5Lm5hbWUgPSAnZHVlLWRhdGUnO1xuXG4vLyAgICAgbGV0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIHByb2plY3RTdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuLy8gICAgIHByb2plY3RTdWJtaXRCdXR0b24udmFsdWUgPSAnc3VibWl0JztcblxuLy8gICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdE5hbWUpO1xuLy8gICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdERlc2NyaXB0aW9uKTtcbi8vICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dFByb2plY3REdWVEYXRlKTtcbi8vICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dFByb2plY3RQcmlvcml0eSk7XG4vLyAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFN1Ym1pdEJ1dHRvbik7XG4vLyAgICAgLy8gY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuLy8gfVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IFwiUHJvamVjdDogXCIgKyBwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGU7XG5cbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBwcm9qZWN0c1tpXS50b0RvSXRlbXMubGVuZ3RoOyBhKyspIHtcblxuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0udGl0bGUpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvLWRvLWl0ZW0tY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRvRG9JdGVtQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgICAgICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgICAgICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIiArIHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS50aXRsZTtcblxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIiArIHByb2plY3RzW2ldLnRvRG9JdGVtc1thXS5kZXNjcmlwdGlvbjtcblxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b0RvSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcbiAgICAgICAgICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuICAgICAgICAgICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiICsgcHJvamVjdHNbaV0udG9Eb0l0ZW1zW2FdLmR1ZURhdGU7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvRG9JdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcbiAgICAgICAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICAgICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCIgKyBwcm9qZWN0c1tpXS50b0RvSXRlbXNbYV0ucHJpb3JpdHk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVUb0RvSXRlbS5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRvLWRvLWl0ZW0tYnV0dG9uXCIpO1xuICAgICAgICAgICAgZGVsZXRlVG9Eb0l0ZW0udGV4dENvbnRlbnQgPSAnRGVsZXRlIHRvLWRvIGl0ZW0nO1xuXG4gICAgICAgICAgICB0b0RvSXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVUb0RvSXRlbSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGRpdi5hcHBlbmQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBhZGRUb0RvSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUb0RvSXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvLWRvLWl0ZW0tYnV0dG9uXCIpO1xuICAgICAgICBhZGRUb0RvSXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgdG8tZG8gaXRlbSc7XG5cbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChhZGRUb0RvSXRlbUJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIHByb2plY3QnO1xuXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3RzIH07XG4vLyBleHBvcnQgeyBkaXNwbGF5UHJvamVjdHMsIGFkZFByb2plY3QgfTtcblxuXG5cblxuXG5cblxuLy8gU29tZXRoaXMgbGlrZSB0aGlzIEkgYmVsaWV2ZSBpcyBjb3JyZWN0OlxuLy8gZm9yIChsZXQgeSA9IDA7IHkgPCBwcm9qZWN0cy5sZW5ndGg7IHkrKykge1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzW3ldLnRvRG9JdGVtc1t5XS50aXRsZSk7XG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNbeV0pO1xuLy8gICAgIC8vIHByb2plY3RzW3ldXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNbeV0udG9Eb0l0ZW1zKTtcblxuLy8gICAgIGZvciAobGV0IGEgPSAwOyBhIDwgcHJvamVjdHNbeV0udG9Eb0l0ZW1zLmxlbmd0aDsgYSsrKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGEpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XS50b0RvSXRlbXNbYV0udGl0bGUpO1xuLy8gICAgIH1cbi8vIH1cblxuXG5cblxuXG5cbi8vSnVzdCBzYXZpbmcgdGhpcyBoZXJlIGluY2FzZSBJIG5lZWQgdG8gZ28gYmFjazpcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcInRlc3RcIik7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChkaXYpO1xuLy8gICAgIGRpdi5jbGFzc0xpc3QuYWRkKHByb2plY3RzW2ldLnByb2plY3RUaXRsZSk7XG4vLyAgICAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0ucHJvamVjdFRpdGxlO1xuXG4vLyAgICAgLy8gY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgLy8gZGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuLy8gICAgIC8vIGRpdjIuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1swXS50b0RvSXRlbXNbMF0udGl0bGUpO1xuLy8gICAgIC8vIGRpdjIudGV4dENvbnRlbnQgPSBwcm9qZWN0c1swXS50b0RvSXRlbXNbMF0udGl0bGU7IFxuLy8gfVxuXG5cblxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuXG4vLyAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuLy8gICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG5cbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcblxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuLy8gICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChkaXYpO1xuLy8gICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUpO1xuLy8gICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGU7XG4vLyAgICAgfVxuXG4vLyB9XG5cblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcblxuLy8gICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbi8vICAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbi8vICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbi8vICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQocHJvamVjdHNbaV0ucHJvamVjdFRpdGxlKTtcbi8vICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0ucHJvamVjdFRpdGxlO1xuXG4vLyAgICAgICAgIC8vIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgICAgICAvLyBkaXYuYXBwZW5kQ2hpbGQoZGl2Mik7XG4vLyAgICAgICAgIC8vIGRpdjIuY2xhc3NMaXN0LmFkZChwcm9qZWN0c1swXS50b0RvSXRlbXNbMF0udGl0bGUpO1xuLy8gICAgICAgICAvLyBkaXYyLnRleHRDb250ZW50ID0gcHJvamVjdHNbMF0udG9Eb0l0ZW1zWzBdLnRpdGxlO1xuXG4vLyAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdHMubGVuZ3RoOyBqKyspIHtcbi8vICAgICAgICAgICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuLy8gICAgICAgICAgICAgLy8gZGl2Mi5jbGFzc0xpc3QuYWRkKHByb2plY3RzW2ldKVxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coaik7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY29uc29sZS5sb2cocHJvamVjdHNbMF0udG9Eb0l0ZW1zLmxlbmd0aCk7XG5cbi8vIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdHNbMF0udG9Eb0l0ZW1zLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgY29uc29sZS5sb2cocHJvamVjdHNbMF0udG9Eb0l0ZW1zW2pdLnRpdGxlKTtcbi8vIH1cblxuLy8gZm9yIChsZXQgayA9IDA7IGsgPCBwcm9qZWN0c1sxXS50b0RvSXRlbXMubGVuZ3RoOyBrKyspIHtcbi8vICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1sxXS50b0RvSXRlbXNba10udGl0bGUpO1xuLy8gfVxuXG4vLyBpbXBvcnRhbnQ6XG4vLyBmb3IgKGxldCB5ID0gMDsgeSA8IHByb2plY3RzLmxlbmd0aDsgeSsrKSB7XG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdHNbeV0udG9Eb0l0ZW1zW3ldLnRpdGxlKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XSk7XG4vLyAgICAgLy8gcHJvamVjdHNbeV1cbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1t5XS50b0RvSXRlbXMpO1xuXG4vLyAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBwcm9qZWN0c1t5XS50b0RvSXRlbXMubGVuZ3RoOyBhKyspIHtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coYSk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW3ldLnRvRG9JdGVtc1thXS50aXRsZSk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBmb3IgKGxldCB5ID0gMDsgeSA8IHByb2plY3RzLmxlbmd0aDsgeSsrKSB7XG4vLyAgICAgY29uc29sZS5sb2cocHJvamVjdHNbeV0udG9Eb0l0ZW1zW3ldLnRpdGxlKTtcbi8vIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lXCI7IC8vIEV4YW1wbGUgb2YgaG93IGFuIGltcG9ydCBzdGF0ZW1lbnQgc2hvdWxkIGxvb2suXG4vLyBpbXBvcnQgeyBUb0RvSXRlbSB9IGZyb20gXCIuL2FwcFwiO1xuLy8gaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgVG9Eb0l0ZW0sIFByb2plY3QsIGV4YW1wbGVUb0RvSXRlbSwgZXhhbXBsZVRvRG9JdGVtMiwgZXhhbXBsZVRvRG9JdGVtMywgZXhhbXBsZVRvRG9JdGVtNCwgd29ya1Byb2plY3QsIGhvYmJ5UHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9hcHBcIjtcbi8vIGltcG9ydCB7IHNvbWVWYXJpYWJsZSB9IGZyb20gXCIuL2FwcFwiO1xuLy8gaW1wb3J0IHsgdGVzdCB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzLCBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vZG9tXCI7XG5cbmNvbnNvbGUubG9nKFRvRG9JdGVtKTtcbmNvbnNvbGUubG9nKFByb2plY3QpO1xuXG5jb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW0pO1xuY29uc29sZS5sb2coZXhhbXBsZVRvRG9JdGVtMik7XG5jb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW0zKTtcbmNvbnNvbGUubG9nKGV4YW1wbGVUb0RvSXRlbTQpO1xuXG5jb25zb2xlLmxvZyh3b3JrUHJvamVjdCk7XG5jb25zb2xlLmxvZyhob2JieVByb2plY3QpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4vLyB0ZXN0KCk7XG4vLyBhZGRQcm9qZWN0KCk7XG5kaXNwbGF5UHJvamVjdHMoKTtcblxuXG5cbi8vIGxldCBleGFtcGxlVG9Eb0l0ZW0gPSBuZXcgVG9Eb0l0ZW0oXCJTdHVkeVwiLCBcIlN0dWR5IGhhcmRcIiwgXCJEZWNlbWJlciAxLCAyMDIzXCIsIFwiSGlnaFwiKTtcblxuLy8gbGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0XCIpO1xuXG4vLyBkZWZhdWx0UHJvamVjdC50b0RvSXRlbXMucHVzaChleGFtcGxlVG9Eb0l0ZW0pO1xuXG4vLyBjb25zb2xlLmxvZyhleGFtcGxlVG9Eb0l0ZW0pO1xuXG4vLyBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG4vLyBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC50b0RvSXRlbXNbMF0pO1xuXG4vLyBjb25zb2xlLmxvZyhzb21lVmFyaWFibGUpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==