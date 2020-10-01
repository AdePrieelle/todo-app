import {createTodo} from "./createtodo.js";
import {createProject, addCreateTodoToProjectTodos, addProjectToProjectList} from "./createproject.js";
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



  /* 

  const projectGridItemTodoTitle = document.querySelectorAll(".project-grid-item-todo-title");

  const projectGridItemTodoDescription = document.querySelectorAll(".project-grid-item-todo-description");

  projectGridItemTodoTitle.forEach((gridItemTodoTitle) => {
    gridItemTodoTitle.addEventListener("click", function(e) {
      let propertiesNodes = e.target.parentNode.childNodes;
      propertiesNodes.forEach((property) => {


        // doesnt work below
        projectGridItemTodoDescription.forEach((description) => {

          if (description.style.display == "none") {
            description.parentNode.childNodes.forEach((property) => {
              property.setAttribute("style", "display: block");
            });
          };
          
          // else if (description.style.display !== "none") {
          //   description.parentNode.childNodes.forEach((property) => {
          //     property.setAttribute("style", "display: none");
          //   });
            
          // };

        });

        // doesnt work above

      });
      propertiesNodes[0].setAttribute("style", "display: block");
      propertiesNodes[5].setAttribute("style", "display: block");
      // propertiesNodes.forEach((childnode) => {
      //   childnode.setAttribute("style", "display: block");
      // });
    });
  });

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
};