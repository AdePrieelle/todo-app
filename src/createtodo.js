// contains all functionality (Create, Read, Update, Remove) for To-Do list items

// Create Todo item
const createTodo = (title, description, dueDate, priority, notes, checklist) => {
  
  return { 
    title, 
    description, 
    dueDate, 
    priority, 
    notes, 
    checklist, 
  };
};

export {createTodo};