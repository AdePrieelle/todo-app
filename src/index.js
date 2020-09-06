import {createTodo} from "./createtodo.js";
import {createProjectList, createProjectListAll} from "./createprojectlist";
import {multiply} from "./testmodule.js";
import {addToArray} from "./testmodule2.js";


let a = 5;
let storeit = multiply(a, 6);
console.log(storeit);
console.log(multiply(2, 3));

// let testarray = ["hi1"];


// create a todo item object
const testTodoItem = createTodo(
  'testTitle', 'testDescription', '10-12-2020', 'high', 'testNotes', 'checked'
);

const testTodoItem2 = createTodo(
  'testTitle2', 'testDescription2', '11-12-2020', 'urgent', 'testNotes2', 'unchecked'
);
  
console.log(testTodoItem);

// can only push to arrays
// let emptyProjectList = createProjectList(); // []
// let projectList = addToArray(emptyProjectList, multiply(a, 6));
// projectList = addToArray(projectList, testTodoItem);

let emptyProjectList = createProjectList(); // []
let projectList = addToArray(emptyProjectList, testTodoItem);
let projectList2 = addToArray([], testTodoItem2);


console.log(projectList);

let emptyProjectListAll = createProjectListAll();
let projectListAll = addToArray(emptyProjectListAll, projectList);
projectListAll = addToArray(projectListAll, projectList2);


console.log(projectListAll);




// used to check for variables in the console (put in global scope for testing)
// window.hitest = hitest;

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