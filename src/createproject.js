// contains all functionality (Create, Read, Update, Remove) for Project list items

// Create 

// Create Project
// new
const createProject = (projectTitle) => {
  
  // test
  // let projectTodoList = [];
  // projectTodoList.push(todos);

  return { 
    projectTitle,
    todos: [],
    // todos,


    // test
    // projectTodoList,
  };
};

const addCreateTodoToProjectTodos = (allprojects, indexOfProject, todoItem) => {
  allprojects[indexOfProject].todos.push(todoItem);
}

const deleteCreateTodoFromProjectTodos = (allprojects, indexOfProject, indexOfTodoItem) => {
  allprojects[indexOfProject].todos.splice(indexOfTodoItem, 1);
}

const editCreateTodoFromProjectTodos = (allprojects, indexOfProject, indexOfTodoItem, todoItemKey, todoItemNewValue) => {
  allprojects[indexOfProject].todos[indexOfTodoItem][todoItemKey] = todoItemNewValue;
};

export {
  createProject, 
  addCreateTodoToProjectTodos,
  deleteCreateTodoFromProjectTodos,
  editCreateTodoFromProjectTodos, 
};

// allprojects = [ 
//   {projectTitle: project1, todos: [{testTitle1, testDescription1}, {testTitle2, testDescription2}]},
//   {projectTitle: project2, todos: [{testTitle3, testDescription3}, {testTitle4, testDescription4}]},
// ];




// old
// const createProject = (projectTitle, todos) => {
  
//   // test
//   let projectTodoList = [];
//   projectTodoList.push(todos);

//   return { 
//     projectTitle,
//     todos,

//     // test
//     projectTodoList,
//   };
// };

// export {createProject};





// const createProjectList = (() => {
//   let projectList = [];

//   return projectList;
// });

// const createProjectListAll = (() => {
//   let projectListAll = [];

//   return projectListAll;
// });

// export {
//   createProjectList,
//   createProjectListAll,
// };

/*

// new
a project should contain all todos and be able to add a new todo to a project.todos property

// old
the projects = [[{project1todo1}, {project1tod2}], [{project2todo1}, {project2todo2}]]

when adding a new project: push to projects array.
when adding a new todo in a project: push to project[indexOfProject]

when adding a new todo to a project

*/


// contains all functionality (Create, Read, Update, Remove) for Project lists

// Create project
// const createProject = (name) => {
//   return { 
//     name,
//   };
// };

// export {createProject};