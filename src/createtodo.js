// Create Todo item
const createTodo = (title, description, priority, projectName, notes, checklist, dueDate) => {
  return { 
    title, 
    description, 
    priority,
    projectName, 
    notes, 
    checklist, 
    dueDate,
  };
};

export {createTodo};