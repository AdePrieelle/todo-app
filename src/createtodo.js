// import {createProject} from 'createproject.js';

// contains all functionality (Create, Read, Update, Remove) for To-Do list items

// Create Todo item
const createTodo = (title, description, priority, projectName, notes, checklist, dueDate) => {
  
  return { 
    title, 
    description, 
    priority,

    // test
    projectName, 
    
    notes, 
    checklist, 
    dueDate,
  };
};

export {createTodo};