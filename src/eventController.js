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

// Maximize and minimize the project-grid-item-todo-properties when clicked on a project-grid-item-todo
const collapseGridItemTodo = () => {
  const projectGridItemTodo = document.querySelectorAll(".project-grid-item-todo");
  projectGridItemTodo.forEach((gridItemTodo) => {
    gridItemTodo.addEventListener("click", function(e) {
      let propertiesNodes = gridItemTodo.childNodes[0].childNodes;
      propertiesNodes.forEach((property) => {
        // if minimized
        if (!property.classList.contains("maximized-grid-todo-item")) {
          property.classList += " maximized-grid-todo-item";
          property.setAttribute("style", "display: block");
        }
        // if maximized
        else {
          property.classList.remove("maximized-grid-todo-item");
          property.setAttribute("style", "display: none");
          propertiesNodes[0].setAttribute("style", "display: block");
          propertiesNodes[5].setAttribute("style", "display: block");
        }
      });
    });
  });
};

const clearInputsForm = (formClassToClear) => {
  let formToClear = document.querySelector(formClassToClear);
  formToClear.reset();
}

const addProjectToProjectListButton = (projectList) => {
  const addProjectAddTodoItemButton = document.querySelector(".add-project-input-button");
  addProjectAddTodoItemButton.addEventListener("click", function() {
    const addProjectFormInput = document.querySelector(".add-project-form-input");
    let addProjectFormInputValue = addProjectFormInput.value;
    if (addProjectFormInputValue == "") {
      alert("Please name your project");
      return;
    }
    for (let i = 0; i < projectList.length; i++ ) {
      if (projectList[i].projectTitle == addProjectFormInputValue) {
        alert("This project name already exists");
        clearInputsForm(".add-project-add-todo-item-form-form");
        return;
      }
    }
    addProjectToProjectList(projectList, createProject(addProjectFormInputValue));
    clearInputsForm(".add-project-add-todo-item-form-form");
    // populateStorage();
    renderProjectsTodos(projectList);
  });
}

const displayCreateTodoItemFormInputButton = (projectlist) => {
  const addTodoItemInputButton = document.querySelector(".add-todo-item-input-button");
  addTodoItemInputButton.addEventListener("click", function() {
    const addTodoItemInputButton = document.querySelector(".add-todo-item-form-input");
    let addTodoItemFormInputTitle = addTodoItemInputButton.value;
    if (addTodoItemFormInputTitle == "") {
      alert("Please name your todo item");
      return;
    } else {
      const bgModal = document.querySelector(".bg-modal");
      bgModal.setAttribute("style", "display: flex");
      // Show submit button
      let bgModalContentFormInputSubmitSubmit = document.querySelector(".bg-modal-content-form-input-submit-submit");
      let bgModalContentFormInputSubmitSaveChanges= document.querySelector(".bg-modal-content-form-input-submit-save-changes");
      bgModalContentFormInputSubmitSubmit.setAttribute("style", "display: flex");
      bgModalContentFormInputSubmitSaveChanges.setAttribute("style", "display: none");
      renderBgModalContentFormInputSelectProjectOptgroup(projectlist);
    }
  });
};

const displayCreateTodoItemFormAddTodoItemButton = (projectlist) => {
  const projectGridItemTodoAddTodoItem = document.querySelectorAll(".project-grid-item-todo-add-todo-item");
  projectGridItemTodoAddTodoItem.forEach((addTodoItemButton) => {
    addTodoItemButton.addEventListener("click", function() {
      const bgModal = document.querySelector(".bg-modal");
      bgModal.setAttribute("style", "display: flex");
      // Show submit button
      let bgModalContentFormInputSubmitSubmit = document.querySelector(".bg-modal-content-form-input-submit-submit");
      let bgModalContentFormInputSubmitSaveChanges= document.querySelector(".bg-modal-content-form-input-submit-save-changes");
      bgModalContentFormInputSubmitSubmit.setAttribute("style", "display: flex");
      bgModalContentFormInputSubmitSaveChanges.setAttribute("style", "display: none");
      renderBgModalContentFormInputSelectProjectOptgroup(projectlist);
      selectProjectOptgroupOptionOnFormAddTodoItemButton(addTodoItemButton);
    });
  });
};

const displayCreateTodoItemFormProjectGridItemAddTodoItem = (projectlist) => {
  const projectGridItemAddTodoItem = document.querySelectorAll(".project-grid-item-add-todo-item");
  projectGridItemAddTodoItem.forEach((projectGridItemAddTodoItemButton) => {
    projectGridItemAddTodoItemButton.addEventListener("click", function() {
      const bgModal = document.querySelector(".bg-modal");
      bgModal.setAttribute("style", "display: flex");
      // Show submit button
      let bgModalContentFormInputSubmitSubmit = document.querySelector(".bg-modal-content-form-input-submit-submit");
      let bgModalContentFormInputSubmitSaveChanges= document.querySelector(".bg-modal-content-form-input-submit-save-changes");
      bgModalContentFormInputSubmitSubmit.setAttribute("style", "display: flex");
      bgModalContentFormInputSubmitSaveChanges.setAttribute("style", "display: none");
      renderBgModalContentFormInputSelectProjectOptgroup(projectlist);
      selectProjectOptgroupOptionOnFormProjectGridItemAddTodoItem(projectGridItemAddTodoItemButton);
    });
  });
};

const selectProjectOptgroupOptionOnFormDefault = (dataProjectIndexValue) => {
  let bgModalContentFormInputSelectProjectOptgroup = document.querySelector(".bg-modal-content-form-input-select-project-optgroup");
  let bgModalContentFormInputSelectProjectOptgroupChildNodes = bgModalContentFormInputSelectProjectOptgroup.childNodes;
  for (let project of bgModalContentFormInputSelectProjectOptgroupChildNodes) {
    if (dataProjectIndexValue == project.value) {
      project.selected = "selected";
    }
  }
}

const selectProjectOptgroupOptionOnFormAddTodoItemButton = (addTodoItemButton) => {
  let dataProjectIndexValue = addTodoItemButton.parentNode.parentNode.getAttribute("data-project-index");
  selectProjectOptgroupOptionOnFormDefault(dataProjectIndexValue);
}

const selectProjectOptgroupOptionOnFormProjectGridItemAddTodoItem = (projectGridItemAddTodoItemButton) => {
  let dataProjectIndexValue = projectGridItemAddTodoItemButton.parentNode.parentNode.parentNode.getAttribute("data-project-index");
  selectProjectOptgroupOptionOnFormDefault(dataProjectIndexValue);
}

const selectProjectOptgroupOptionOnFormProjectGridItemAddTodoItemEdit = (projectGridItemTodoButtonsUpdateBtn) => {
  let dataProjectIndexValue = projectGridItemTodoButtonsUpdateBtn.parentNode.parentNode.parentNode.parentNode.getAttribute("data-project-index");
  selectProjectOptgroupOptionOnFormDefault(dataProjectIndexValue);
}

const closeCreateTodoItemForm = () => {
  const bgModalContentClose = document.querySelector(".bg-modal-content-close");
  bgModalContentClose.addEventListener("click", function() {
    closeCreateTodoItemFormDefault();
  });
};

const closeCreateTodoItemFormDefault = () => {
    const bgModal = document.querySelector(".bg-modal");
    bgModal.setAttribute("style", "display: none");
    clearInputsForm(".bg-modal-content-form");
}

const copyTodoItemNameToBgModalFormTitle = () => {
  const addTodoItemFormInput = document.querySelector(".add-todo-item-form-input");
  const addTodoItemInputButton = document.querySelector(".add-todo-item-input-button");
  addTodoItemInputButton.addEventListener("click", function() {
    let addTodoItemFormInputTitle = addTodoItemFormInput.value;
    const bgModalContentFormInputText = document.querySelector(".bg-modal-content-form-input-text");
    bgModalContentFormInputText.value = addTodoItemFormInputTitle;
    clearInputsForm(".add-project-add-todo-item-form-form");
  });
};

const renderBgModalContentFormInputSelectProjectOptgroup = (projectlist) => {
  const bgModalContentFormInputSelectProjectOptgroup = document.querySelector(".bg-modal-content-form-input-select-project-optgroup");
  bgModalContentFormInputSelectProjectOptgroup.innerHTML = "";
  for (let i = 0; i < projectlist.length; i++) {
    let bgModalContentFormInputSelectProjectOptgroupOption = document.createElement("option");
    bgModalContentFormInputSelectProjectOptgroupOption.classList += ".bg-modal-content-form-input-select-project-optgroup-option"
    bgModalContentFormInputSelectProjectOptgroupOption.value = i;
    bgModalContentFormInputSelectProjectOptgroup.appendChild(bgModalContentFormInputSelectProjectOptgroupOption);
    let bgModalContentFormInputSelectProjectOptgroupText = document.createTextNode(`${projectlist[i].projectTitle}`);
    bgModalContentFormInputSelectProjectOptgroupOption.appendChild(bgModalContentFormInputSelectProjectOptgroupText);
  }
};

const addTodoItemToProject = (projectlist) => {
  const bgModalContentFormInputSubmit = document.querySelector(".bg-modal-content-form-input-submit");
  bgModalContentFormInputSubmit.addEventListener("click", function() {
    const bgModalContentFormInputTextTitle = document.querySelector(".bg-modal-content-form-input-text-title");
    let addTodoItemCreateTitle = bgModalContentFormInputTextTitle.value;
    if (addTodoItemCreateTitle == "") {
      alert("Please enter a title");
      return;
    }
    const bgModalContentFormInputTextareaDescription = document.querySelector(".bg-modal-content-form-input-textarea-description");
    let addTodoItemCreateDescription = bgModalContentFormInputTextareaDescription.value;
    const bgModalContentFormPriority = document.querySelector(`input[name = "bg-modal-content-form-priority"]:checked`);
    let addTodoItemCreatePriority = bgModalContentFormPriority.value;
    const bgModalContentFormSelectProject = document.querySelector(".bg-modal-content-form-select-project");
    let addTodoItemCreateProjectname = +bgModalContentFormSelectProject.value;
    const bgModalContentFormInputTextareaNotes = document.querySelector(".bg-modal-content-form-input-textarea-notes");
    let addTodoItemCreateNotes = bgModalContentFormInputTextareaNotes.value;
    const bgModalContentFormInputCheckboxFinished = document.querySelector(".bg-modal-content-form-input-checkbox-finished");
    let addTodoItemCreateFinished = "";
    if (bgModalContentFormInputCheckboxFinished.checked) {
      addTodoItemCreateFinished = "yes";
    } else {
      addTodoItemCreateFinished = "no";
    }
    const bgModalContentFormInputDate = document.querySelector(".bg-modal-content-form-input-date");
    let addTodoItemCreateDuedateToConvert = bgModalContentFormInputDate.value;
    let addTodoItemCreateDuedate = addTodoItemCreateDuedateToConvert.split("-").reverse().join("-");
    if (addTodoItemCreateDuedate == "") {
      addTodoItemCreateDuedate = "No due date";
    }

    // add todo to project
    addCreateTodoToProjectTodos(
      projectlist, 
      addTodoItemCreateProjectname, 
      createTodo(
        addTodoItemCreateTitle,
        addTodoItemCreateDescription,
        addTodoItemCreatePriority,
        addTodoItemCreateProjectname,
        addTodoItemCreateNotes,
        addTodoItemCreateFinished,
        addTodoItemCreateDuedate,        
      )
    );
    closeCreateTodoItemFormDefault();
    // populateStorage();
    renderProjectsTodos(projectlist);
  });
}

const updateChecklistStatusButton = (projectlist) => {
  const projectGridItemTodoButtonsChecklist = document.querySelectorAll(".project-grid-item-todo-buttons-checklist");
  projectGridItemTodoButtonsChecklist.forEach((checklistButton) => {
    checklistButton.addEventListener("click", function() {
      let indexOfProject = +checklistButton.parentNode.parentNode.parentNode.parentNode.getAttribute("data-project-index");
      let indexOfProjectTodoItem = +checklistButton.parentNode.parentNode.getAttribute("data-project-todo-item-index");
      let newChecklistvalue;
      if (projectlist[indexOfProject].todos[indexOfProjectTodoItem]["checklist"] == "yes") {
        newChecklistvalue = "no";
      } else {
        newChecklistvalue = "yes";
      }
      editCreateTodoFromProjectTodos(projectlist, indexOfProject, indexOfProjectTodoItem, "checklist", newChecklistvalue);
      // populateStorage();
      renderProjectsTodos(projectlist);
    });
  });
}

const addChecklistFinishedLineThrough = (projectlist) => {
  for (let i = 0; i < projectlist.length; i++) {
    for (let j = 0; j < projectlist[i].todos.length; j++) {
      const projectGridItemTodoPropertiesWrapper = document.querySelectorAll(".project-grid-item-todo-properties-wrapper");
      projectGridItemTodoPropertiesWrapper.forEach((todoproperties) => {
        if (
          todoproperties.parentNode.getAttribute("data-project-todo-item-index") == j 
          && todoproperties.parentNode.parentNode.parentNode.getAttribute("data-project-index") == i
          && projectlist[i].todos[j]["checklist"] == "yes"
        ) {
          todoproperties.style.textDecoration = "line-through";
          todoproperties.style.color = "rgba(140, 140, 140)";
          todoproperties.parentNode.style.opacity = ".6";
        };
      });
    };
  };
};

const addProjectGridItemTodoPriorityBgColor = (projectlist) => {
  for (let i = 0; i < projectlist.length; i++) {
    for (let j = 0; j < projectlist[i].todos.length; j++) {
      const projectGridItemTodo = document.querySelectorAll(".project-grid-item-todo");
      projectGridItemTodo.forEach((todoItem) => {
        if (
          todoItem.getAttribute("data-project-todo-item-index") == j 
          && todoItem.parentNode.parentNode.getAttribute("data-project-index") == i
        ) {
          if (projectlist[i].todos[j]["priority"] == "low") {
            todoItem.style.backgroundColor = "#b1ffa3";
          } else if (projectlist[i].todos[j]["priority"] == "medium") {
            todoItem.style.backgroundColor = "#fffca3";
          } else if (projectlist[i].todos[j]["priority"] == "high") {
            todoItem.style.backgroundColor = "#ffd6a3";
          } else if (projectlist[i].todos[j]["priority"] == "urgent") {
            todoItem.style.backgroundColor = "#ffa3a3";
          }
        };
      });
    };
  };
};

const deleteProjectButton = (projectlist) => {
  const projectGridItemDeleteProject = document.querySelectorAll(".project-grid-item-delete-project");
  projectGridItemDeleteProject.forEach((deleteTheProjectButton) => {
    deleteTheProjectButton.addEventListener("click", function() {
      let confirmToDeleteProject = confirm("Are you sure you want to delete this project and it's todo items?");
      if (confirmToDeleteProject) {
        let indexOfProject = +deleteTheProjectButton.parentNode.parentNode.parentNode.getAttribute("data-project-index");
        deleteProjectFromProjectList(projectlist, indexOfProject);
        // populateStorage();
        renderProjectsTodos(projectlist);
      };
    });
  });
};

const deleteTodoItemFromProjectButton = (projectlist) => {
  const projectGridItemTodoButtonsDelete = document.querySelectorAll(".project-grid-item-todo-buttons-delete");
  projectGridItemTodoButtonsDelete.forEach((deleteTheTodoItem) => {
    deleteTheTodoItem.addEventListener("click", function() {
      let confirmToDeleteTodoItemFromProject = confirm("Are you sure that you want to delete this todo item?");
      if (confirmToDeleteTodoItemFromProject) {
        let indexOfProject = +deleteTheTodoItem.parentNode.parentNode.parentNode.parentNode.getAttribute("data-project-index");
        let indexOfTodoItem = +deleteTheTodoItem.parentNode.parentNode.getAttribute("data-project-todo-item-index");
        deleteCreateTodoFromProjectTodos(projectlist, indexOfProject, indexOfTodoItem);
        // populateStorage();
        renderProjectsTodos(projectlist);
      };
    });
  });
};

const editProjectGridItemTitleButton = (projectlist) => {
  const projectGridItemUpdateProjectTitle = document.querySelectorAll(".project-grid-item-update-project-title");
  projectGridItemUpdateProjectTitle.forEach((editProjectTitleButton) => {
    editProjectTitleButton.addEventListener("click", function() {
      let projectTitleToEdit = editProjectTitleButton.parentNode.previousSibling;

      // Replace the project-grid-item-title with an input to edit the project-grid-item-title
      projectTitleToEdit.innerHTML = "";

      let projectGridItemTitleForm = document.createElement("form");
      projectGridItemTitleForm.classList += "project-grid-item-title-form"
      projectTitleToEdit.appendChild(projectGridItemTitleForm);

      let projectGridItemTitleFormInput = document.createElement("input");
      projectGridItemTitleFormInput.classList += "project-grid-item-title-form-input";
      projectGridItemTitleFormInput.type = "text";
      projectGridItemTitleFormInput.name = "project-grid-item-title-form-input-edit";

      let indexOfProject = +editProjectTitleButton.parentNode.parentNode.parentNode.getAttribute("data-project-index");
      projectGridItemTitleFormInput.value = projectlist[indexOfProject]["projectTitle"];

      projectGridItemTitleForm.appendChild(projectGridItemTitleFormInput);

      let projectGridItemTitleFormSaveEditedProjectTitleButton = document.createElement("div");
      projectGridItemTitleFormSaveEditedProjectTitleButton.classList = "project-grid-item-title-form-save-edited-project-title-button";
      projectGridItemTitleForm.appendChild(projectGridItemTitleFormSaveEditedProjectTitleButton);

      let projectGridItemTitleFormSaveEditedProjectTitleButtonText = document.createTextNode("SAVE");
      projectGridItemTitleFormSaveEditedProjectTitleButton.appendChild(projectGridItemTitleFormSaveEditedProjectTitleButtonText);

      // add eventlistener to save the project-grid-item-title from the input and edit the project-grid-item-title and render it
      projectGridItemTitleFormSaveEditedProjectTitleButton.addEventListener("click", function() {
        editProjectFromProjectList(projectlist, indexOfProject, "projectTitle", projectGridItemTitleFormInput.value);
        // populateStorage();
        renderProjectsTodos(projectlist);
      });
    });
  });
};

const editProjectGridItemTodoButton = (projectlist) => {
  const projectGridItemTodoButtonsUpdate = document.querySelectorAll(".project-grid-item-todo-buttons-update");
  projectGridItemTodoButtonsUpdate.forEach((editProjectItemTodoButton) => {
    editProjectItemTodoButton.addEventListener("click", function() {
      let indexOfProject = editProjectItemTodoButton.parentNode.parentNode.parentNode.parentNode.getAttribute("data-project-index");
      let indexOfTodoItem = editProjectItemTodoButton.parentNode.parentNode.getAttribute("data-project-todo-item-index");
      // render bg modal form
      const bgModal = document.querySelector(".bg-modal");
      bgModal.setAttribute("style", "display: flex");
      renderBgModalContentFormInputSelectProjectOptgroup(projectlist);
      selectProjectOptgroupOptionOnFormProjectGridItemAddTodoItemEdit(editProjectItemTodoButton);

      // copy current todo item properties value to input fields

      // display title value of todo item in form
      let bgModalContentFormInputTextTitle = document.querySelector(".bg-modal-content-form-input-text-title");
      bgModalContentFormInputTextTitle.value = projectlist[indexOfProject].todos[indexOfTodoItem]["title"];

      // display description value of todo item in form
      let bgModalContentFormInputTextareaDescription = document.querySelector(".bg-modal-content-form-input-textarea-description");
      bgModalContentFormInputTextareaDescription.value = projectlist[indexOfProject].todos[indexOfTodoItem]["description"];

      // display priority value of todo item in form
      let bgModalContentFormPriority = document.querySelector(`input[name = "bg-modal-content-form-priority"]:checked`);
      bgModalContentFormPriority.value = projectlist[indexOfProject].todos[indexOfTodoItem]["priority"];
      let bgModalContentFormInputRadioLow = document.querySelector(".bg-modal-content-form-input-radio-low");
      let bgModalContentFormInputRadioMedium = document.querySelector(".bg-modal-content-form-input-radio-medium");
      let bgModalContentFormInputRadioHigh = document.querySelector(".bg-modal-content-form-input-radio-high");
      let bgModalContentFormInputRadioUrgent = document.querySelector(".bg-modal-content-form-input-radio-urgent");
      if (bgModalContentFormPriority.value == "low") {
        bgModalContentFormInputRadioLow.checked = true;
        bgModalContentFormInputRadioMedium.checked = false;
        bgModalContentFormInputRadioHigh.checked = false;
        bgModalContentFormInputRadioUrgent.checked = false;
      }
      if (bgModalContentFormPriority.value == "medium") {
        bgModalContentFormInputRadioLow.checked = false;
        bgModalContentFormInputRadioMedium.checked = true;
        bgModalContentFormInputRadioHigh.checked = false;
        bgModalContentFormInputRadioUrgent.checked = false;
      }
      if (bgModalContentFormPriority.value == "high") {
        bgModalContentFormInputRadioLow.checked = false;
        bgModalContentFormInputRadioMedium.checked = false;
        bgModalContentFormInputRadioHigh.checked = true;
        bgModalContentFormInputRadioUrgent.checked = false;
      }
      if (bgModalContentFormPriority.value == "urgent") {
        bgModalContentFormInputRadioLow.checked = false;
        bgModalContentFormInputRadioMedium.checked = false;
        bgModalContentFormInputRadioHigh.checked = false;
        bgModalContentFormInputRadioUrgent.checked = true;
      }

      // Change priority value to radio button value
      let bgModalContentFormPriorityValueEditedLoad = bgModalContentFormPriority.value;
      bgModalContentFormInputRadioLow.addEventListener("click", function() {
        bgModalContentFormPriorityValueEditedLoad = "low";
      });
      bgModalContentFormInputRadioMedium.addEventListener("click", function() {
        bgModalContentFormPriorityValueEditedLoad = "medium";
      });
      bgModalContentFormInputRadioHigh.addEventListener("click", function() {
        bgModalContentFormPriorityValueEditedLoad = "high";
      });
      bgModalContentFormInputRadioUrgent.addEventListener("click", function() {
        bgModalContentFormPriorityValueEditedLoad = "urgent";
      });

      // display notes value of todo item in form
      let bgModalContentFormInputTextareaNotes = document.querySelector(".bg-modal-content-form-input-textarea-notes");
      bgModalContentFormInputTextareaNotes.value = projectlist[indexOfProject].todos[indexOfTodoItem]["notes"];

      // display checkbox checklist finished status in form
      let bgModalContentFormInputCheckboxFinished = document.querySelector(".bg-modal-content-form-input-checkbox-finished");
      bgModalContentFormInputCheckboxFinished.value = projectlist[indexOfProject].todos[indexOfTodoItem]["checklist"];
      if (bgModalContentFormInputCheckboxFinished.value == "yes") {
        bgModalContentFormInputCheckboxFinished.checked = true;
      } else {
        bgModalContentFormInputCheckboxFinished.checked = false;
      }

      // display dueDate value of todo item in form
      let bgModalContentFormInputDate = document.querySelector(".bg-modal-content-form-input-date");
      let dateToBeReversed = projectlist[indexOfProject].todos[indexOfTodoItem]["dueDate"];
      let dateReversed = dateToBeReversed.split("-").reverse().join("-");
      bgModalContentFormInputDate.value = dateReversed;

      // add save changes button for Todo Item form
      let bgModalContentFormInputSubmitSubmit = document.querySelector(".bg-modal-content-form-input-submit-submit");
      let bgModalContentFormInputSubmitSaveChanges= document.querySelector(".bg-modal-content-form-input-submit-save-changes");
      bgModalContentFormInputSubmitSubmit.setAttribute("style", "display: none");
      bgModalContentFormInputSubmitSaveChanges.setAttribute("style", "display: flex");

      // add event to save edited todo item from inputs
      bgModalContentFormInputSubmitSaveChanges.addEventListener("click", function editTheTodoItemChanges() {
        // get inputs values
        const bgModalContentFormInputTextTitle = document.querySelector(".bg-modal-content-form-input-text-title");
        let addTodoItemCreateTitle = bgModalContentFormInputTextTitle.value;
        if (addTodoItemCreateTitle == "") {
          alert("Please enter a title");
          return;
        }
        const bgModalContentFormInputTextareaDescription = document.querySelector(".bg-modal-content-form-input-textarea-description");
        let addTodoItemCreateDescription = bgModalContentFormInputTextareaDescription.value;
        let addTodoItemCreatePriority = bgModalContentFormPriorityValueEditedLoad;
        const bgModalContentFormSelectProject = document.querySelector(".bg-modal-content-form-select-project");
        let addTodoItemCreateProjectname = +bgModalContentFormSelectProject.value;
        const bgModalContentFormInputTextareaNotes = document.querySelector(".bg-modal-content-form-input-textarea-notes");
        let addTodoItemCreateNotes = bgModalContentFormInputTextareaNotes.value;
        const bgModalContentFormInputCheckboxFinished = document.querySelector(".bg-modal-content-form-input-checkbox-finished");
        let addTodoItemCreateFinished = "";
        if (bgModalContentFormInputCheckboxFinished.checked) {
          addTodoItemCreateFinished = "yes";
        } else {
          addTodoItemCreateFinished = "no";
        }
        const bgModalContentFormInputDate = document.querySelector(".bg-modal-content-form-input-date");
        let addTodoItemCreateDuedateReversed = bgModalContentFormInputDate.value;
        let addTodoItemCreateDuedate = addTodoItemCreateDuedateReversed.split("-").reverse().join("-");
        if (addTodoItemCreateDuedate == "") {
          addTodoItemCreateDuedate = "No due date";
        };

        // edit todo item and save it to the projectlist if the selected project stays the same else delete the project from the current project and add it to another project
        if (addTodoItemCreateProjectname == indexOfProject) {
          editCreateTodoFromProjectTodos(projectlist, indexOfProject, indexOfTodoItem, "title", addTodoItemCreateTitle);
          editCreateTodoFromProjectTodos(projectlist, indexOfProject, indexOfTodoItem, "description", addTodoItemCreateDescription);
          editCreateTodoFromProjectTodos(projectlist, indexOfProject, indexOfTodoItem, "priority", addTodoItemCreatePriority);
          editCreateTodoFromProjectTodos(projectlist, indexOfProject, indexOfTodoItem, "projectName", addTodoItemCreateProjectname);
          editCreateTodoFromProjectTodos(projectlist, indexOfProject, indexOfTodoItem, "notes", addTodoItemCreateNotes);
          editCreateTodoFromProjectTodos(projectlist, indexOfProject, indexOfTodoItem, "checklist", addTodoItemCreateFinished);
          editCreateTodoFromProjectTodos(projectlist, indexOfProject, indexOfTodoItem, "dueDate", addTodoItemCreateDuedate);
        } else {
          deleteCreateTodoFromProjectTodos (projectlist, indexOfProject, indexOfTodoItem);
          addCreateTodoToProjectTodos(
            projectlist, 
            addTodoItemCreateProjectname, 
            createTodo(
              addTodoItemCreateTitle,
              addTodoItemCreateDescription,
              addTodoItemCreatePriority,
              addTodoItemCreateProjectname,
              addTodoItemCreateNotes,
              addTodoItemCreateFinished,
              addTodoItemCreateDuedate,        
            )
          );
        }
        
        // display the submit button for the form again when closing
        bgModalContentFormInputSubmitSubmit.setAttribute("style", "display: flex");
        bgModalContentFormInputSubmitSaveChanges.setAttribute("style", "display: none");

        // close the bg modal form
        closeCreateTodoItemFormDefault();

        // render the projects with the new edited todo item
        // populateStorage();
        renderProjectsTodos(projectlist);

        // prevent that this event will be added multiple times to bgModalContentFormInputSubmitSaveChanges button
        bgModalContentFormInputSubmitSaveChanges.removeEventListener("click", editTheTodoItemChanges);
      }); 
    });
  });
};

export { 
  collapseGridItemTodo,
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
  addChecklistFinishedLineThrough, 
  addProjectGridItemTodoPriorityBgColor, 
  deleteProjectButton, 
  deleteTodoItemFromProjectButton, 
  editProjectGridItemTitleButton,
  editProjectGridItemTodoButton, 
};

/*
Array to store all projects and their todo's in

  let projectlist = [ 
    {projectTitle: "project1", todos: [{title: "testTitle1", description: "testDescription1", priority: "low", projectName: 0, notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}, {title: "testTitle2", description: "testDescription2", priority: "medium", projectName: 0, notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}]},
    {projectTitle: "project2", todos: [{title: "testTitle3", description: "testDescription3", priority: "high", projectName: 1, notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}, {title: "testTitle4", description: "testDescription4", priority: "low", projectName: 1, notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}]},
  ];
*/