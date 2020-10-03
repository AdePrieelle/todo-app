import {createTodo} from "./createtodo.js";
import {
  createProject, 
  addCreateTodoToProjectTodos, 
  deleteCreateTodoFromProjectTodos, 
  editCreateTodoFromProjectTodos, 
  addProjectToProjectList, 
  deleteProjectFromProjectList
} from "./createproject.js";
import {renderProjectsTodos} from "./renderprojectstodos.js";

// Written for expand buttons

const maximizeTodoItem = () => {
  const projectGridItemTodoExpandDown = document.querySelectorAll(".project-grid-item-todo-expand-down");
  const projectGridItemTodoExpandUp = document.querySelector(".project-grid-item-todo-expand-up");

  /*
  options.forEach((option) => {

      option.addEventListener("click", function() {

        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];        

        compareHands(this.textContent, computerChoice);

      });
    }); 
  */

  projectGridItemTodoExpandDown.forEach((expandDownButton) => {
    expandDownButton.addEventListener("click", function(e) {
    expandDownButton.setAttribute("style", "display: none");

    // show expandUpButton
    e.target.nextSibling.setAttribute("style", "display: block");

    // show todoItem details
    let propertiesNodes = e.target.parentNode.parentNode.parentNode.childNodes;
    propertiesNodes.forEach((childnode) => {
      childnode.setAttribute("style", "display: block");
    })
    propertiesNodes[5].setAttribute("style", "display: flex");
    // console.log(propertiesNodes);

    // let propertiesNodes = e.target.parentNode.parentNode.parentNode.childNodes[].setAttribute("style", "display: block");

    // projectGridItemTodoExpandUp.setAttribute("style", "display: block");
   });
  });

  // projectGridItemTodoExpandDown.addEventListener("click", function() {
  //   projectGridItemTodoExpandDown.setAttribute("style", "display: none");
  //   projectGridItemTodoExpandUp.setAttribute("style", "display: block");

  // });


  
};

const minimizeTodoItem = () => {
  const projectGridItemTodoExpandDown = document.querySelectorAll(".project-grid-item-todo-expand-down");
  const projectGridItemTodoExpandUp = document.querySelectorAll(".project-grid-item-todo-expand-up");

  projectGridItemTodoExpandUp.forEach((expandUpButton) => {
    expandUpButton.addEventListener("click", function(e) {
      expandUpButton.setAttribute("style", "display: none");

      // show expand down button
      e.target.previousSibling.setAttribute("style", "display: block");

      // hide todoItem details
      let propertiesNodes = e.target.parentNode.parentNode.parentNode.childNodes;
      propertiesNodes.forEach((childnode) => {
        childnode.setAttribute("style", "display: none");
      })
      propertiesNodes[0].setAttribute("style", "display: block");
      propertiesNodes[5].setAttribute("style", "display: flex");

    });
  });
  // projectGridItemTodoExpandUp.addEventListener("click", function() {
  //   projectGridItemTodoExpandUp.setAttribute("style", "display: none");
  //   projectGridItemTodoExpandDown.setAttribute("style", "display: block");

  // });

};

const collapseGridItemTodoTitle = () => {

  const projectGridItemTodoTitle = document.querySelectorAll(".project-grid-item-todo-title");
  projectGridItemTodoTitle.forEach((gridItemTodoTitle) => {
    gridItemTodoTitle.addEventListener("click", function() {
      let propertiesNodes = gridItemTodoTitle.parentNode.childNodes;
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

const closeCreateTodoItemForm = () => {
  const bgModalContentClose = document.querySelector(".bg-modal-content-close");
  bgModalContentClose.addEventListener("click", function() {
    closeCreateTodoItemFormDefault();
  });
};

const closeCreateTodoItemFormDefault = () => {
    const bgModal = document.querySelector(".bg-modal");
    bgModal.setAttribute("style", "display: none");
    // clear inputs from the todo item form
    clearInputsForm(".bg-modal-content-form");
}

const copyTodoItemNameToBgModalFormTitle = () => {
  const addTodoItemFormInput = document.querySelector(".add-todo-item-form-input");
  const addTodoItemInputButton = document.querySelector(".add-todo-item-input-button");
  addTodoItemInputButton.addEventListener("click", function() {
    let addTodoItemFormInputTitle = addTodoItemFormInput.value;
    const bgModalContentFormInputText = document.querySelector(".bg-modal-content-form-input-text");
    bgModalContentFormInputText.value = addTodoItemFormInputTitle;
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
    const bgModalContentFormInputRadioLow = document.querySelector(`input[name = "bg-modal-content-form-priority"]:checked`);
    let addTodoItemCreatePriority = bgModalContentFormInputRadioLow.value;
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
    let addTodoItemCreateDuedate = bgModalContentFormInputDate.value;
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
          // todoproperties.nextSibling.childNodes[0].style.backgroundColor = "#49de7b";
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
        renderProjectsTodos(projectlist);
      };
    });
  });
};


/*

  let allprojects = [ 
    {projectTitle: "project1", todos: [{title: "testTitle1", description: "testDescription1", priority: "normal", projectName: "project1", notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}, {title: "testTitle2", description: "testDescription2", priority: "normal", projectName: "project1", notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}]},
    {projectTitle: "project2", todos: [{title: "testTitle3", description: "testDescription3", priority: "normal", projectName: "project1", notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}, {title: "testTitle4", description: "testDescription4", priority: "normal", projectName: "project1", notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}]},
  ];

*/

export { 
  maximizeTodoItem,
  minimizeTodoItem,
  collapseGridItemTodoTitle,
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
};