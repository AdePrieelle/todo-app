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

const clearInputs = (formClassToClear) => {
  let formToClear = document.querySelector(formClassToClear);
  formToClear.reset();
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
  clearInputs, 
};