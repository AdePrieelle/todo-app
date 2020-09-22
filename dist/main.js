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
/*! exports provided: createProject, addCreateTodoToProjectTodos, deleteCreateTodoFromProjectTodos, editCreateTodoFromProjectTodos, addProjectToProjectList, deleteProjectFromProjectList, editProjectFromProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCreateTodoToProjectTodos\", function() { return addCreateTodoToProjectTodos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteCreateTodoFromProjectTodos\", function() { return deleteCreateTodoFromProjectTodos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editCreateTodoFromProjectTodos\", function() { return editCreateTodoFromProjectTodos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectToProjectList\", function() { return addProjectToProjectList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProjectFromProjectList\", function() { return deleteProjectFromProjectList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editProjectFromProjectList\", function() { return editProjectFromProjectList; });\n// contains all functionality (Create, Read, Update, Remove) for Project list items\n\n// Create \n\n// Create Project\n// new\nconst createProject = (projectTitle) => {\n  \n  // test\n  // let projectTodoList = [];\n  // projectTodoList.push(todos);\n\n  return { \n    projectTitle,\n    todos: [],\n    // todos,\n\n\n    // test\n    // projectTodoList,\n  };\n};\n\nconst addCreateTodoToProjectTodos = (allprojects, indexOfProject, todoItem) => {\n  allprojects[indexOfProject].todos.push(todoItem);\n}\n\nconst deleteCreateTodoFromProjectTodos = (allprojects, indexOfProject, indexOfTodoItem) => {\n  allprojects[indexOfProject].todos.splice(indexOfTodoItem, 1);\n}\n\nconst editCreateTodoFromProjectTodos = (allprojects, indexOfProject, indexOfTodoItem, todoItemKey, todoItemNewValue) => {\n  allprojects[indexOfProject].todos[indexOfTodoItem][todoItemKey] = todoItemNewValue;\n};\n\nconst addProjectToProjectList = (projectList, project) => {\n  projectList.push(project);\n}\n\nconst deleteProjectFromProjectList = (projectList, indexOfProject) => {\n  projectList.splice(indexOfProject, 1);\n}\n\nconst editProjectFromProjectList = (projectList, indexOfProject, projectItemKey, projectItemNewValue) => {\n  projectList[indexOfProject][projectItemKey] = projectItemNewValue;\n}\n\n\n\n// allprojects = [ \n//   {projectTitle: project1, todos: [{testTitle1, testDescription1}, {testTitle2, testDescription2}]},\n//   {projectTitle: project2, todos: [{testTitle3, testDescription3}, {testTitle4, testDescription4}]},\n// ];\n\n\n\n\n// old\n// const createProject = (projectTitle, todos) => {\n  \n//   // test\n//   let projectTodoList = [];\n//   projectTodoList.push(todos);\n\n//   return { \n//     projectTitle,\n//     todos,\n\n//     // test\n//     projectTodoList,\n//   };\n// };\n\n// export {createProject};\n\n\n\n\n\n// const createProjectList = (() => {\n//   let projectList = [];\n\n//   return projectList;\n// });\n\n// const createProjectListAll = (() => {\n//   let projectListAll = [];\n\n//   return projectListAll;\n// });\n\n// export {\n//   createProjectList,\n//   createProjectListAll,\n// };\n\n/*\n\n// new\na project should contain all todos and be able to add a new todo to a project.todos property\n\n// old\nthe projects = [[{project1todo1}, {project1tod2}], [{project2todo1}, {project2todo2}]]\n\nwhen adding a new project: push to projects array.\nwhen adding a new todo in a project: push to project[indexOfProject]\n\nwhen adding a new todo to a project\n\n*/\n\n\n// contains all functionality (Create, Read, Update, Remove) for Project lists\n\n// Create project\n// const createProject = (name) => {\n//   return { \n//     name,\n//   };\n// };\n\n// export {createProject};\n\n//# sourceURL=webpack:///./src/createproject.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createtodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtodo.js */ \"./src/createtodo.js\");\n/* harmony import */ var _createproject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createproject.js */ \"./src/createproject.js\");\n\n\n\n// create a todo item object\nconst testTodoItem = Object(_createtodo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(\n  'testTitle', 'testDescription', 'high', 'project1', 'testNotes', 'checked', '10-12-2020'\n);\n\nconst testTodoItem2 = Object(_createtodo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(\n  'testTitle2', 'testDescription2', 'urgent', 'project2', 'testNotes2', 'unchecked', '11-12-2020'\n);\n\n// old\nconsole.log(testTodoItem);\n\n// Implement this setup from pseudocode below to store all projects\nlet allprojects = [ \n  {projectTitle: \"project1\", todos: [{title: \"testTitle1\", description: \"testDescription1\"}, {title: \"testTitle2\", description: \"testDescription2\"}]},\n  {projectTitle: \"project2\", todos: [{title: \"testTitle3\", description: \"testDescription3\"}, {title: \"testTitle4\", description: \"testDescription4\"}]},\n];\n\nconsole.log(\"allprojects below\");\nconsole.log(allprojects);\nconsole.log(\"allprojects above\");\n\nallprojects[0].todos.push({title: \"testTitlepushed\", description: \"testdescriptionpushed\"});\nconsole.log(allprojects);\n\n\nconsole.log(\"allprojects changed above\");\n\nlet allprojectsNew = [];\nlet testProjectNew = Object(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"createProject\"])(\"testProjectName\");\nallprojectsNew.push(testProjectNew);\nconsole.log(testProjectNew);\nconsole.log(\"testcreateproject above\");\nconsole.log(allprojectsNew);\nconsole.log(\"allprojetsNew above\");\nallprojectsNew[0].todos.push(testTodoItem);\nconsole.log(allprojectsNew);\nconsole.log(\"addedtodos allprojectsNew above\");\nObject(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"addCreateTodoToProjectTodos\"])(allprojectsNew, 0, Object(_createtodo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(\n  'testTitle3', 'testDescription3', 'urgent', 'project1', 'testNotes3', 'unchecked', '12-12-2020'\n));\nconsole.log(allprojectsNew);\nconsole.log(\"addCreateTodoToProjectTodos above\")\nObject(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"addCreateTodoToProjectTodos\"])(allprojectsNew, 0, Object(_createtodo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(\n  'testTitle3ToDeleteAbove', 'testDescription3ToDelete', 'urgent', 'project1', 'testNotes3', 'unchecked', '12-12-2020'\n));\nObject(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"addCreateTodoToProjectTodos\"])(allprojectsNew, 0, Object(_createtodo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(\n  'testTitle3ToDeleteItem', 'testDescription3', 'urgent', 'project1', 'testNotes3', 'unchecked', '12-12-2020'\n));\nObject(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"addCreateTodoToProjectTodos\"])(allprojectsNew, 0, Object(_createtodo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(\n  'testTitle3ToDeleteBelow', 'testDescription3', 'urgent', 'project1', 'testNotes3', 'unchecked', '12-12-2020'\n));\nconsole.log(allprojectsNew);\nconsole.log(\"Add 3 more addCreateTodoToProjectTodos above to allprojectsNew\");\nObject(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"deleteCreateTodoFromProjectTodos\"])(allprojectsNew, 0, 3);\nconsole.log(allprojectsNew);\nconsole.log(\"deleteCreateTodoFromProjectTodos above\");\nObject(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"editCreateTodoFromProjectTodos\"])(allprojectsNew, 0, 1, \"title\", \"testTitleEdited\");\nconsole.log(allprojectsNew);\nconsole.log(\"editCreateTodoFromProjectTodos above\");\nObject(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"addProjectToProjectList\"])(allprojectsNew, Object(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"createProject\"])(\"test1 addProjectToProjectList\"));\nObject(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"addProjectToProjectList\"])(allprojectsNew, Object(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"createProject\"])(\"test2 addProjectToProjectList\"));\nObject(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"addProjectToProjectList\"])(allprojectsNew, Object(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"createProject\"])(\"test3 addProjectToProjectList\"));\nconsole.log(allprojectsNew);\nconsole.log(\"addProjectToProjectList above\");\nObject(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"deleteProjectFromProjectList\"])(allprojectsNew, 2);\nconsole.log(allprojectsNew);\nconsole.log(\"deleteProjectFromProjectList above\");\nObject(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"editProjectFromProjectList\"])(allprojectsNew, 1, \"projectTitle\", \"test1 addProjectToProjectList edited\");\nconsole.log(allprojectsNew);\nconsole.log(\"editProjectFromProjectList above\");\nObject(_createproject_js__WEBPACK_IMPORTED_MODULE_1__[\"editCreateTodoFromProjectTodos\"])(allprojectsNew, 0, 1, \"checklist\", \"uncheck edited\");\nconsole.log(allprojectsNew);\nconsole.log(\"change cheklist finished status above with editCreateTodoFromProjectTodos\")\n\n\n\n\n/*\nfunctionality to add:\n\n- add function to add createtodo to createproject (based on index? or projecttitle?)\n  done\n- add function to delete createtodo from createproject (based on index? or projecttitle?)\n  done\n- add function to edit createtodo from createproject (based on index? or projecttitle?)\n  done\n\n- add function to add project to allprojectslist\n  done\n- add function to delete project and todos from allprojectslist\n  done\n- add function to edit project (projectTitle) from allprojectslist\n  done\n\n- add function to set createtodo status to finished or unfinished\n  done with editCreateTodoFromProjectTodos already\n\n- add function to render projects and todo items\n\n*/\n\n// pseudo code\n/*\ncreatetodo with or without projectname?\ncreateproject?\n\n\n- createproject with projectname and projecttodos as properties\n\n- when createTodo add the todolist to the projects projecttodos property\n\n- store all projects in an array\n\nallprojects = [ \n  {projectTitle: project1, todos: [{testTitle1, testDescription1}, {testTitle2, testDescription2}]},\n  {projectTitle: project2, todos: [{testTitle3, testDescription3}, {testTitle4, testDescription4}]},\n];\n\nor \n\nthe projects = [[{project1todo1}, {project1tod2}], [{project2todo1}, {project2todo2}]]\n\nhow to change project???\n\n\n\nold:\n\na project should contain all todos and be able to add a new todo to a project.todos property\n\n// old\nthe projects = [[{project1todo1}, {project1tod2}], [{project2todo1}, {project2todo2}]]\n\nwhen adding a new project: push to projects array.\nwhen adding a new todo in a project: push to project[indexOfProject]\n\nwhen adding a new todo to a project\n\nend pseudocode\n\n*/\n\n// used to check for variables in the console (put in global scope for testing)\n// window.hitest = hitest;\n\n/* \nnpx webpack --watch\nTo run webpack each time a change will be made\n*/\n\n/*\nStart watching for compiling scss to css\nsass --watch main.scss:main.css\n*/\n\n/*\n1.  Your ‘todos’ are going to be objects that you’ll want to dynamically create, \n    which means either using factories or constructors/classes to generate them.\n\n    1.1  Create object for \"Todo item\" by factory function or constructors/classes\n\n2.  Brainstorm what kind of properties your todo-items are going to have. \n    At a minimum they should have a title, description, dueDate and priority. \n    You might also want to include notes or even a checklist.\n\n    2.1   Add properties to todo-items object:\n          title, description, dueDate and priority\n    2.2   (Optional) add properties:\n          notes and cheklist\n\n3.  Your todo list should have projects or separate lists of todos. \n    When a user first opens the app, \n    there should be some sort of ‘default’ project to which all of their todos are put. \n    Users should be able to create new projects \n    and choose which project their todos go into.\n\n    3.1   Create an array for a project to all todos from the project\n    3.2   Create an array for all projects.\n    3.3   Add functionality for to create new projects\n    3.4   Add functionality to assign a \"todo item\" to a project\n\n4.  You should separate your application logic \n    (i.e. creating new todos, setting todos as complete, changing todo priority etc.) \n    from the DOM-related stuff, so keep all of those things in separate modules.\n\n    4.1   Create seperate modules for new todos, setting todos as complete, \n          changing priority and more functionalities.\n    4.2   Create DOM-related functionality seperated from the application logic.\n\n5.  The look of the User Interface is up to you, \n    but it should be able to do the following:\n\n    1.    view all projects\n    2.    view all todos in each project \n          ( probably just the title and duedate.. \n            perhaps changing color for different priorities)\n    3.    expand a single todo to see/edit its details\n    4.    delete a todo\n\n    5.1   Create function to display all projects\n    5.2   5.2.1 Create function to display all todos:\n                display their title, duedate and perhaps change color for priorities?\n          5.2.2 (display it when a project is clicked on?)\n    5.3   Create a function that expands a single ToDo item and see all info\n    5.4   Create functions that edit the details (properties)\n    5.5   Create a delete \"todo item\" function\n\n6.  For inspiration, check out the following great todo apps. \n    (look at screenshots, watch their introduction videos etc.)\n\n    1.    Todoist\n    2.    Things\n    3.    any.do\n\n7.  Use localStorage to save user's projects and todos between sessions\n\n    7.1   Add localstorage functionality\n\n8.  Since you are probably already using webpack, \n    adding external libraries from npm is a cinch! \n    You might want to consider using the following useful library in your code:\n\n    date-fns gives you a bunch of handy functions for formatting \n    and manipulating dates and times.\n\n    8.1   Add date-fns format to dueDate property.\n\n*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });