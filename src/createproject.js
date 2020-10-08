// Contains all functionality (Create, Read, Update, Remove) for Project list items

// Create Project
const createProject = (projectTitle) => {
  return { 
    projectTitle,
    todos: [],
  };
};

const addCreateTodoToProjectTodos = (projectlist, indexOfProject, todoItem) => {
  projectlist[indexOfProject].todos.push(todoItem);
}

const deleteCreateTodoFromProjectTodos = (projectlist, indexOfProject, indexOfTodoItem) => {
  projectlist[indexOfProject].todos.splice(indexOfTodoItem, 1);
}

const editCreateTodoFromProjectTodos = (projectlist, indexOfProject, indexOfTodoItem, todoItemKey, todoItemNewValue) => {
  projectlist[indexOfProject].todos[indexOfTodoItem][todoItemKey] = todoItemNewValue;
};

const addProjectToProjectList = (projectlist, project) => {
  projectlist.push(project);
}

const deleteProjectFromProjectList = (projectlist, indexOfProject) => {
  projectlist.splice(indexOfProject, 1);
}

const editProjectFromProjectList = (projectlist, indexOfProject, projectItemKey, projectItemNewValue) => {
  projectlist[indexOfProject][projectItemKey] = projectItemNewValue;
}

export {
  createProject, 
  addCreateTodoToProjectTodos,
  deleteCreateTodoFromProjectTodos,
  editCreateTodoFromProjectTodos, 
  addProjectToProjectList, 
  deleteProjectFromProjectList, 
  editProjectFromProjectList, 
};

/*
Array to store all projects and their todo's in

  let projectlist = [ 
    {projectTitle: "project1", todos: [{title: "testTitle1", description: "testDescription1", priority: "low", projectName: 0, notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}, {title: "testTitle2", description: "testDescription2", priority: "medium", projectName: 0, notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}]},
    {projectTitle: "project2", todos: [{title: "testTitle3", description: "testDescription3", priority: "high", projectName: 1, notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}, {title: "testTitle4", description: "testDescription4", priority: "low", projectName: 1, notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}]},
  ];
*/