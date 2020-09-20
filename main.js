/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/createproject.js":
/*!******************************!*\
  !*** ./src/createproject.js ***!
  \******************************/
/*! exports provided: createProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n// contains all functionality (Create, Read, Update, Remove) for Project list items\n\n// Create \n\n// Create Project\nconst createProject = (projectTitle, todos) => {\n  \n  // test\n  let projectTodoList = [];\n  projectTodoList.push(todos);\n\n  return { \n    projectTitle,\n    todos,\n\n    // test\n    projectTodoList,\n  };\n};\n\n\n\n\n\n\n\n// const createProjectList = (() => {\n//   let projectList = [];\n\n//   return projectList;\n// });\n\n// const createProjectListAll = (() => {\n//   let projectListAll = [];\n\n//   return projectListAll;\n// });\n\n// export {\n//   createProjectList,\n//   createProjectListAll,\n// };\n\n/*\n\n// new\na project should contain all todos and be able to add a new todo to a project.todos property\n\n// old\nthe projects = [[{project1todo1}, {project1tod2}], [{project2todo1}, {project2todo2}]]\n\nwhen adding a new project: push to projects array.\nwhen adding a new todo in a project: push to project[indexOfProject]\n\nwhen adding a new todo to a project\n\n*/\n\n\n// contains all functionality (Create, Read, Update, Remove) for Project lists\n\n// Create project\n// const createProject = (name) => {\n//   return { \n//     name,\n//   };\n// };\n\n// export {createProject};\n\n//# sourceURL=webpack:///./src/createproject.js?");

/***/ }),

/***/ "./src/createprojectlist.js":
/*!**********************************!*\
  !*** ./src/createprojectlist.js ***!
  \**********************************/
/*! exports provided: createProjectList, createProjectListAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProjectList\", function() { return createProjectList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProjectListAll\", function() { return createProjectListAll; });\nconst createProjectList = (() => {\n  let projectList = [];\n\n  return projectList;\n});\n\nconst createProjectListAll = (() => {\n  let projectListAll = [];\n\n  return projectListAll;\n});\n\n\n\n/*\n\nthe projects = [[{project1todo1}, {project1tod2}], [{project2todo1}, {project2todo2}]]\n\nwhen adding a new project: push to projects array.\nwhen adding a new todo in a project: push to project[indexOfProject]\n\nwhen adding a new todo to a project\n\n*/\n\n\n// contains all functionality (Create, Read, Update, Remove) for Project lists\n\n// Create project\n// const createProject = (name) => {\n//   return { \n//     name,\n//   };\n// };\n\n// export {createProject};\n\n//# sourceURL=webpack:///./src/createprojectlist.js?");

/***/ }),

/***/ "./src/createtodo.js":
/*!***************************!*\
  !*** ./src/createtodo.js ***!
  \***************************/
/*! exports provided: createTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodo\", function() { return createTodo; });\n// import {createProject} from 'createproject.js';\n\n// contains all functionality (Create, Read, Update, Remove) for To-Do list items\n\n// Create Todo item\nconst createTodo = (title, description, priority, projectName, notes, checklist, dueDate) => {\n  \n  return { \n    title, \n    description, \n    priority,\n\n    // test\n    projectName, \n    \n    notes, \n    checklist, \n    dueDate,\n  };\n};\n\n\n\n//# sourceURL=webpack:///./src/createtodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createtodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtodo.js */ \"./src/createtodo.js\");\n/* harmony import */ var _createproject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createproject.js */ \"./src/createproject.js\");\n/* harmony import */ var _createprojectlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createprojectlist */ \"./src/createprojectlist.js\");\n/* harmony import */ var _testmodule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testmodule.js */ \"./src/testmodule.js\");\n/* harmony import */ var _testmodule2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testmodule2.js */ \"./src/testmodule2.js\");\n\n\n\n\n\n\n\nlet a = 5;\nlet storeit = Object(_testmodule_js__WEBPACK_IMPORTED_MODULE_3__[\"multiply\"])(a, 6);\nconsole.log(storeit);\nconsole.log(Object(_testmodule_js__WEBPACK_IMPORTED_MODULE_3__[\"multiply\"])(2, 3));\n\n// let testarray = [\"hi1\"];\n\n\n// create a todo item object\nconst testTodoItem = Object(_createtodo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(\n  'testTitle', 'testDescription', 'high', 'project1', 'testNotes', 'checked', '10-12-2020'\n);\n\nconst testTodoItem2 = Object(_createtodo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(\n  'testTitle2', 'testDescription2', 'urgent', 'project2', 'testNotes2', 'unchecked', '11-12-2020'\n);\n\n// old\nconsole.log(testTodoItem);\n\n// new\nconst testProject1 = Object(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"createProject\"])(\n  'project1', testTodoItem\n);\n  \nconsole.log(testProject1);\nconsole.log(testProject1.todos.priority);\nconsole.log(testProject1.projectTodoList[0].priority);\n\n\n// Implement this setup from pseudocode below to store all projects\nlet allprojects = [ \n  {projectName: \"project1\", projecttodos: [{title: \"testTitle1\", description: \"testDescription1\"}, {title: \"testTitle2\", description: \"testDescription2\"}]},\n  {projectName: \"project2\", projecttodos: [{title: \"testTitle3\", description: \"testDescription3\"}, {title: \"testTitle4\", description: \"testDescription4\"}]},\n];\n\nconsole.log(\"allprojects below\");\nconsole.log(allprojects);\nconsole.log(\"allprojects above\");\n\nallprojects[0].projecttodos.push({title: \"testTitlepushed\", description: \"testdescriptionpushed\"});\nconsole.log(allprojects);\n\n\nconsole.log(\"allprojects changed above\");\n\n\n// pseudo code\n/*\ncreatetodo with or without projectname?\ncreateproject?\n\n\n- createproject with projectname and projecttodos as properties\n\n- when createTodo add the todolist to the projects projecttodos property\n\n- store all projects in an array\n\nallprojects = [ \n  {projectName: project1, projecttodos: [{testTitle1, testDescription1}, {testTitle2, testDescription2}]},\n  {projectName: project2, projecttodos: [{testTitle3, testDescription3}, {testTitle4, testDescription4}]},\n];\n\nor \n\nthe projects = [[{project1todo1}, {project1tod2}], [{project2todo1}, {project2todo2}]]\n\nhow to change project???\n\n\n\nold:\n\na project should contain all todos and be able to add a new todo to a project.todos property\n\n// old\nthe projects = [[{project1todo1}, {project1tod2}], [{project2todo1}, {project2todo2}]]\n\nwhen adding a new project: push to projects array.\nwhen adding a new todo in a project: push to project[indexOfProject]\n\nwhen adding a new todo to a project\n\nend pseudocode\n\n*/\n\n\n// can only push to arrays\n// let emptyProjectList = createProjectList(); // []\n// let projectList = addToArray(emptyProjectList, multiply(a, 6));\n// projectList = addToArray(projectList, testTodoItem);\n\nlet emptyProjectList = Object(_createprojectlist__WEBPACK_IMPORTED_MODULE_2__[\"createProjectList\"])(); // []\nlet projectList = Object(_testmodule2_js__WEBPACK_IMPORTED_MODULE_4__[\"addToArray\"])(emptyProjectList, testTodoItem);\nlet projectList2 = Object(_testmodule2_js__WEBPACK_IMPORTED_MODULE_4__[\"addToArray\"])([], testTodoItem2);\n\n\nconsole.log(projectList);\n\nlet emptyProjectListAll = Object(_createprojectlist__WEBPACK_IMPORTED_MODULE_2__[\"createProjectListAll\"])();\nlet projectListAll = Object(_testmodule2_js__WEBPACK_IMPORTED_MODULE_4__[\"addToArray\"])(emptyProjectListAll, projectList);\nprojectListAll = Object(_testmodule2_js__WEBPACK_IMPORTED_MODULE_4__[\"addToArray\"])(projectListAll, projectList2);\n\n\nconsole.log(projectListAll);\n\n\n\n\n// used to check for variables in the console (put in global scope for testing)\n// window.hitest = hitest;\n\n/* \nnpx webpack --watch\nTo run webpack each time a change will be made\n*/\n\n/*\nStart watching for compiling scss to css\nsass --watch main.scss:main.css\n*/\n\n/*\n1.  Your ‘todos’ are going to be objects that you’ll want to dynamically create, \n    which means either using factories or constructors/classes to generate them.\n\n    1.1  Create object for \"Todo item\" by factory function or constructors/classes\n\n2.  Brainstorm what kind of properties your todo-items are going to have. \n    At a minimum they should have a title, description, dueDate and priority. \n    You might also want to include notes or even a checklist.\n\n    2.1   Add properties to todo-items object:\n          title, description, dueDate and priority\n    2.2   (Optional) add properties:\n          notes and cheklist\n\n3.  Your todo list should have projects or separate lists of todos. \n    When a user first opens the app, \n    there should be some sort of ‘default’ project to which all of their todos are put. \n    Users should be able to create new projects \n    and choose which project their todos go into.\n\n    3.1   Create an array for a project to all todos from the project\n    3.2   Create an array for all projects.\n    3.3   Add functionality for to create new projects\n    3.4   Add functionality to assign a \"todo item\" to a project\n\n4.  You should separate your application logic \n    (i.e. creating new todos, setting todos as complete, changing todo priority etc.) \n    from the DOM-related stuff, so keep all of those things in separate modules.\n\n    4.1   Create seperate modules for new todos, setting todos as complete, \n          changing priority and more functionalities.\n    4.2   Create DOM-related functionality seperated from the application logic.\n\n5.  The look of the User Interface is up to you, \n    but it should be able to do the following:\n\n    1.    view all projects\n    2.    view all todos in each project \n          ( probably just the title and duedate.. \n            perhaps changing color for different priorities)\n    3.    expand a single todo to see/edit its details\n    4.    delete a todo\n\n    5.1   Create function to display all projects\n    5.2   5.2.1 Create function to display all todos:\n                display their title, duedate and perhaps change color for priorities?\n          5.2.2 (display it when a project is clicked on?)\n    5.3   Create a function that expands a single ToDo item and see all info\n    5.4   Create functions that edit the details (properties)\n    5.5   Create a delete \"todo item\" function\n\n6.  For inspiration, check out the following great todo apps. \n    (look at screenshots, watch their introduction videos etc.)\n\n    1.    Todoist\n    2.    Things\n    3.    any.do\n\n7.  Use localStorage to save user's projects and todos between sessions\n\n    7.1   Add localstorage functionality\n\n8.  Since you are probably already using webpack, \n    adding external libraries from npm is a cinch! \n    You might want to consider using the following useful library in your code:\n\n    date-fns gives you a bunch of handy functions for formatting \n    and manipulating dates and times.\n\n    8.1   Add date-fns format to dueDate property.\n\n*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/testmodule.js":
/*!***************************!*\
  !*** ./src/testmodule.js ***!
  \***************************/
/*! exports provided: multiply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return multiply; });\nconst multiply = (a, b) => {\n  return a*b;\n}\n\n\n\n//# sourceURL=webpack:///./src/testmodule.js?");

/***/ }),

/***/ "./src/testmodule2.js":
/*!****************************!*\
  !*** ./src/testmodule2.js ***!
  \****************************/
/*! exports provided: addToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToArray\", function() { return addToArray; });\nconst addToArray = (startArray, itemtoadd) => {\n  startArray.push(itemtoadd);\n  return startArray;\n}\n\n\n\n//# sourceURL=webpack:///./src/testmodule2.js?");

/***/ })

/******/ });