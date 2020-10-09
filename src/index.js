import {createTodo} from "./createtodo.js";
import {
  createProject, 
  addCreateTodoToProjectTodos, 
  addProjectToProjectList, 
} from "./createproject.js";
import {renderProjectsTodos} from "./renderprojectstodos.js";
import {
  addProjectToProjectListButton,
  displayCreateTodoItemFormInputButton,
  closeCreateTodoItemForm,
  copyTodoItemNameToBgModalFormTitle,
  addTodoItemToProject, 
} from "./eventController.js";

// fix bug for mobile scrolling white bar at the bottom of 60px
function resizeBackground() {
  document.body.scrollHeight = document.body.scrollHeight + 60 + 'px';
}
resizeBackground();

// use localStorage.clear() to reset the library
// localStorage.clear();
// projectlist that stores all projects, default projectlist if localStorage is not set
let projectlist = [];
addProjectToProjectList(projectlist, createProject("Groceries"));
addCreateTodoToProjectTodos(projectlist, 0, createTodo(
  'Buy milk', 'Buy 2 bottles of milk', 'medium', 0, 'Get 1.5L bottles', 'no', '16-12-2020'
));
addCreateTodoToProjectTodos(projectlist, 0, createTodo(
  'Buy bread', 'Buy a full bread', 'high', 0, 'Get brown bread', 'no', '15-12-2020'
));

// Add localStorage to save projects and todo items locally
// Testing whether storage has been populated
if(!localStorage.getItem('projectlist')) {
  console.log("no local storage");
  populateStorage();
} else {
  setStyles();
}

// Setting values in storage
function populateStorage() {
  localStorage.setItem('projectlist', JSON.stringify(projectlist));
  setStyles();
}

// Getting values from storage
function setStyles() {
  projectlist = JSON.parse(localStorage.getItem('projectlist'));
}

// renderProjectsTodos(allprojectsNew);
renderProjectsTodos(projectlist);

// Project Name button to add project to projectList
addProjectToProjectListButton(projectlist);
// collapseGridItemTodo();

// display bg-modal form on input button click
displayCreateTodoItemFormInputButton(projectlist);

// close bg-modal form on close button click
closeCreateTodoItemForm();

// copy todoItemInputValue to bgModal title
copyTodoItemNameToBgModalFormTitle();

// add todoItem to Project
addTodoItemToProject(projectlist);

/*
Array to store all projects and their todo's in

  let projectlist = [ 
    {projectTitle: "project1", todos: [{title: "testTitle1", description: "testDescription1", priority: "low", projectName: 0, notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}, {title: "testTitle2", description: "testDescription2", priority: "medium", projectName: 0, notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}]},
    {projectTitle: "project2", todos: [{title: "testTitle3", description: "testDescription3", priority: "high", projectName: 1, notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}, {title: "testTitle4", description: "testDescription4", priority: "low", projectName: 1, notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}]},
  ];
*/

/* 
npx webpack --watch
To run webpack each time a change will be made
*/

/*
Start watching for compiling scss to css
sass --watch main.scss:main.css
*/

/*
1.  Your ‘todos’ are going to be objects that you’ll want to dynamically create, 
    which means either using factories or constructors/classes to generate them.

    1.1  Create object for "Todo item" by factory function or constructors/classes

2.  Brainstorm what kind of properties your todo-items are going to have. 
    At a minimum they should have a title, description, dueDate and priority. 
    You might also want to include notes or even a checklist.

    2.1   Add properties to todo-items object:
          title, description, dueDate and priority
    2.2   (Optional) add properties:
          notes and cheklist

3.  Your todo list should have projects or separate lists of todos. 
    When a user first opens the app, 
    there should be some sort of ‘default’ project to which all of their todos are put. 
    Users should be able to create new projects 
    and choose which project their todos go into.

    3.1   Create an array for a project to all todos from the project
    3.2   Create an array for all projects.
    3.3   Add functionality for to create new projects
    3.4   Add functionality to assign a "todo item" to a project

4.  You should separate your application logic 
    (i.e. creating new todos, setting todos as complete, changing todo priority etc.) 
    from the DOM-related stuff, so keep all of those things in separate modules.

    4.1   Create seperate modules for new todos, setting todos as complete, 
          changing priority and more functionalities.
    4.2   Create DOM-related functionality seperated from the application logic.

5.  The look of the User Interface is up to you, 
    but it should be able to do the following:

    1.    view all projects
    2.    view all todos in each project 
          ( probably just the title and duedate.. 
            perhaps changing color for different priorities)
    3.    expand a single todo to see/edit its details
    4.    delete a todo

    5.1   Create function to display all projects
    5.2   5.2.1 Create function to display all todos:
                display their title, duedate and perhaps change color for priorities?
          5.2.2 (display it when a project is clicked on?)
    5.3   Create a function that expands a single ToDo item and see all info
    5.4   Create functions that edit the details (properties)
    5.5   Create a delete "todo item" function

6.  For inspiration, check out the following great todo apps. 
    (look at screenshots, watch their introduction videos etc.)

    1.    Todoist
    2.    Things
    3.    any.do

7.  Use localStorage to save user's projects and todos between sessions

    7.1   Add localstorage functionality

8.  Since you are probably already using webpack, 
    adding external libraries from npm is a cinch! 
    You might want to consider using the following useful library in your code:

    date-fns gives you a bunch of handy functions for formatting 
    and manipulating dates and times.

    8.1   Add date-fns format to dueDate property.
*/