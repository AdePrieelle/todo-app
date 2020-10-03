import {createTodo} from "./createtodo.js";
import {
  createProject, 
  addCreateTodoToProjectTodos, 
  deleteCreateTodoFromProjectTodos, 
  editCreateTodoFromProjectTodos, 
  addProjectToProjectList, 
  deleteProjectFromProjectList, 
  editProjectFromProjectList, 
} from "./createproject.js";
import {renderProjectsTodos} from "./renderprojectstodos.js";
import {
  maximizeTodoItem, 
  minimizeTodoItem, 
  collapseGridItemTodoTitle, 
  collapseGridItemTodo, 
  maximizeGridItemTodo, 
  minimizeGridItemTodo,
  addProjectToProjectListButton,
  clearInputsForm,
  displayCreateTodoItemFormInputButton,
  displayCreateTodoItemFormAddTodoItemButton,
  displayCreateTodoItemFormProjectGridItemAddTodoItem,
  closeCreateTodoItemForm,
  copyTodoItemNameToBgModalFormTitle,
  renderBgModalContentFormInputSelectProjectOptgroup,
  addTodoItemToProject, 
  updateChecklistStatusButton, 
} from "./eventController.js";

// create a todo item object
const testTodoItem = createTodo(
  'testTitle', 'testDescription', 'low', 'project1', 'testNotes', 'yes', '10-12-2020'
);

const testTodoItem2 = createTodo(
  'testTitle2', 'testDescription2', 'urgent', 'project2', 'testNotes2', 'unchecked', '11-12-2020'
);

// old
console.log(testTodoItem);

// Implement this setup from pseudocode below to store all projects
let allprojects = [ 
  {projectTitle: "project1", todos: [{title: "testTitle1", description: "testDescription1"}, {title: "testTitle2", description: "testDescription2"}]},
  {projectTitle: "project2", todos: [{title: "testTitle3", description: "testDescription3"}, {title: "testTitle4", description: "testDescription4"}]},
];

console.log("allprojects below");
console.log(allprojects);
console.log("allprojects above");

allprojects[0].todos.push({title: "testTitlepushed", description: "testdescriptionpushed"});
console.log(allprojects);


console.log("allprojects changed above");

let allprojectsNew = [];
let testProjectNew = createProject("testProjectName");
allprojectsNew.push(testProjectNew);
console.log(testProjectNew);
console.log("testcreateproject above");
console.log(allprojectsNew);
console.log("allprojetsNew above");
allprojectsNew[0].todos.push(testTodoItem);
console.log(allprojectsNew);
console.log("addedtodos allprojectsNew above");
addCreateTodoToProjectTodos(allprojectsNew, 0, createTodo(
  'testTitle3', 'testDescription3', 'normal', 'project1', 'testNotes3', 'yes', '12-12-2020'
));
console.log(allprojectsNew);
console.log("addCreateTodoToProjectTodos above")
addCreateTodoToProjectTodos(allprojectsNew, 0, createTodo(
  'testTitle3ToDeleteAbove', 'testDescription3ToDelete', 'high', 'project1', 'testNotes3', 'no', '12-12-2020'
));
addCreateTodoToProjectTodos(allprojectsNew, 0, createTodo(
  'testTitle3ToDeleteItem', 'testDescription3', 'urgent', 'project1', 'testNotes3', 'no', '12-12-2020'
));
addCreateTodoToProjectTodos(allprojectsNew, 0, createTodo(
  'testTitle3ToDeleteBelow', 'testDescription3', 'urgent', 'project1', 'testNotes3', 'yes', '12-12-2020'
));
console.log(allprojectsNew);
console.log("Add 3 more addCreateTodoToProjectTodos above to allprojectsNew");
deleteCreateTodoFromProjectTodos(allprojectsNew, 0, 3);
console.log(allprojectsNew);
console.log("deleteCreateTodoFromProjectTodos above");
editCreateTodoFromProjectTodos(allprojectsNew, 0, 1, "title", "testTitleEdited");
console.log(allprojectsNew);
console.log("editCreateTodoFromProjectTodos above");
addProjectToProjectList(allprojectsNew, createProject("test1 addProjectToProjectList"));
addProjectToProjectList(allprojectsNew, createProject("test2 addProjectToProjectList"));
addProjectToProjectList(allprojectsNew, createProject("test3 addProjectToProjectList"));
console.log(allprojectsNew);
console.log("addProjectToProjectList above");
deleteProjectFromProjectList(allprojectsNew, 2);
console.log(allprojectsNew);
console.log("deleteProjectFromProjectList above");
editProjectFromProjectList(allprojectsNew, 1, "projectTitle", "test1 addProjectToProjectListtttttttttttttttttttttttt edited");
console.log(allprojectsNew);
console.log("editProjectFromProjectList above");
editCreateTodoFromProjectTodos(allprojectsNew, 0, 1, "checklist", "no");
console.log(allprojectsNew);
console.log("change checklist finished status above with editCreateTodoFromProjectTodos")


// add projects to render
addCreateTodoToProjectTodos(allprojectsNew, 1, createTodo(
  'testTitle3ToDeleteBelowwwwwwwwwwwwwwwwwwwwwwww', 'testDescription3', 'normal', 'project1', 'testNotes3', 'yes', '12-12-2020'
));
addCreateTodoToProjectTodos(allprojectsNew, 1, createTodo(
  'testTitle3ToDeleteBelow', 'testDescription3', 'high', 'project1', 'testNotes3', 'no', '12-12-2020'
));

// renderProjectsTodos(allprojectsNew);
renderProjectsTodos(allprojectsNew);

// maximize TodoItem and minimize TodoItem (with arrow down and up buttons)
maximizeTodoItem();
minimizeTodoItem();

// new old
// maximizeGridItemTodo();
// minimizeGridItemTodo();

// new (with maximize and minimize on the title click);
// collapseGridItemTodoTitle();
// new (with maximize and minimize on the gridItemTodo area)
// collapseGridItemTodo();

// Project Name button to add project to projectList
addProjectToProjectListButton(allprojectsNew);
// collapseGridItemTodo();

// display bg-modal form on input button click
displayCreateTodoItemFormInputButton(allprojectsNew);

// display bg-modal form on add todo item button
// displayCreateTodoItemFormAddTodoItemButton(allprojectsNew);

// close bg-modal form on close button click
closeCreateTodoItemForm();

// copy todoItemInputValue to bgModal title
copyTodoItemNameToBgModalFormTitle();

// render projects to bgModalContentFormInputSelectProjectOptgroup
// renderBgModalContentFormInputSelectProjectOptgroup(allprojectsNew);

// add todoItem to Project
addTodoItemToProject(allprojectsNew);

// // add change checklist value on cheklist button click
// updateChecklistStatusButton(allprojectsNew);





/*
functionality to add:

- add function to add createtodo to createproject (based on index? or projecttitle?)
  done
- add function to delete createtodo from createproject (based on index? or projecttitle?)
  done
- add function to edit createtodo from createproject (based on index? or projecttitle?)
  done

- add function to add project to allprojectslist
  done
- add function to delete project and todos from allprojectslist
  done
- add function to edit project (projectTitle) from allprojectslist
  done

- add function to set createtodo status to finished or unfinished
  done with editCreateTodoFromProjectTodos already

- add function to render projects and todo items (add data-attribute = i from loop for updating or deleting projects or todos)
  done

- add minimize and expand functionality on button arrows up and down click to display none properties
  done (but deleted the double down and up buttons and added the event to the grid todo item title area);
  done (but deleted the double down and up buttons and added the event to the grid todo item area);

- add function to add project on button
  done

- add function to clear input fields homepage
  done

- add function to display modal form on button
  done

- add function to render the projects from the projectlist to the modal form select option tag
  done
  
- add css media queries for responsive mobile design
  done

- add function to decide which project the select option tag will use to add the projects inputs to 
  (use select option value as indexOfProject?)
  done

- add function to addCreateTodoToProjectTodos from inputs on submit button
  done

- add function to clear input fields modal form
  done

- add function to select project name in bg modal form when clicking on add todo item within a project item
  (add data-attribute? to project grid item and select the project in the form based on the data attribute when rendering)
  done

- add function to button to change checklist property value
  done

- add colour change of project-grid-item-todo background based on priority value
  done

- add function to delete projects

- add function to delete todo items

- add function to update projects

- add function to update todo items

aaand add functionality for updating and deleting projects and todos

*/

// pseudo code
/*
createtodo with or without projectname?
createproject?


- createproject with projectname and projecttodos as properties

- when createTodo add the todolist to the projects projecttodos property

- store all projects in an array

allprojects = [ 
  {projectTitle: project1, todos: [{testTitle1, testDescription1}, {testTitle2, testDescription2}]},
  {projectTitle: project2, todos: [{testTitle3, testDescription3}, {testTitle4, testDescription4}]},
];

or 

the projects = [[{project1todo1}, {project1tod2}], [{project2todo1}, {project2todo2}]]

how to change project???



old:

a project should contain all todos and be able to add a new todo to a project.todos property

// old
the projects = [[{project1todo1}, {project1tod2}], [{project2todo1}, {project2todo2}]]

when adding a new project: push to projects array.
when adding a new todo in a project: push to project[indexOfProject]

when adding a new todo to a project

end pseudocode

*/

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