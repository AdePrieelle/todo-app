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

export { 
  maximizeTodoItem,
  minimizeTodoItem
};