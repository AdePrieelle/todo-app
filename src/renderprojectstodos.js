import {
  collapseGridItemTodo, 
  displayCreateTodoItemFormAddTodoItemButton,
  displayCreateTodoItemFormProjectGridItemAddTodoItem,
} from "./eventController";

const renderProjectsTodos = ((projectlist) => {

  // projects-grid
  let projectsGrid = document.querySelector(".projects-grid");
  projectsGrid.innerHTML = "";

  for (let i = 0; i < projectlist.length; i++) {
    // projects-grid-item
    let projectsGridItem = document.createElement("div");
    projectsGridItem.classList = "projects-grid-item";
    projectsGrid.appendChild(projectsGridItem);
  
    // project-grid-item-title-add-todo-item-wrapper
    let projectGridItemTitleAddTodoItemWrapper = document.createElement("div");
    projectGridItemTitleAddTodoItemWrapper.classList = "project-grid-item-title-add-todo-item-wrapper";
    projectsGridItem.appendChild(projectGridItemTitleAddTodoItemWrapper);

    // project-grid-item-title
    let projectGridItemTitle = document.createElement("h2");
    projectGridItemTitle.classList = "project-grid-item-title";
    projectGridItemTitleAddTodoItemWrapper.appendChild(projectGridItemTitle);

    let projectGridItemTitleText = document.createTextNode(`${projectlist[i].projectTitle}`);
    projectGridItemTitle.appendChild(projectGridItemTitleText);

    // project-grid-item-add-todo-item-delete-project-wrapper
    let projectGridItemAddTodoItemDeleteProjectWrapper = document.createElement("div");
    projectGridItemAddTodoItemDeleteProjectWrapper.classList = "project-grid-item-add-todo-item-delete-project-wrapper";
    projectGridItemTitleAddTodoItemWrapper.appendChild(projectGridItemAddTodoItemDeleteProjectWrapper);

    // project-grid-item-add-todo-item
    let projectGridItemAddTodoItem = document.createElement("div");
    projectGridItemAddTodoItem.classList = "project-grid-item-add-todo-item";
    projectGridItemAddTodoItemDeleteProjectWrapper.appendChild(projectGridItemAddTodoItem);

    // project-grid-item-add-todo-item fas fa-plus
    let projectGridItemAddTodoItemFasFaPlus = document.createElement("i");
    projectGridItemAddTodoItemFasFaPlus.classList = "fas fa-plus";
    projectGridItemAddTodoItem.appendChild(projectGridItemAddTodoItemFasFaPlus);

    // project-grid-item-update-project-title
    let projectGridItemUpdateProjectTitle = document.createElement("div");
    projectGridItemUpdateProjectTitle.classList = "project-grid-item-update-project-title";
    projectGridItemAddTodoItemDeleteProjectWrapper.appendChild(projectGridItemUpdateProjectTitle);

    // project-grid-item-update-project-title fas fa-edit
    let projectGridItemUpdateProjectTitleFasFaEdit = document.createElement("i");
    projectGridItemUpdateProjectTitleFasFaEdit.classList = "fas fa-edit";
    projectGridItemUpdateProjectTitle.appendChild(projectGridItemUpdateProjectTitleFasFaEdit);

    // project-grid-item-delete-project
    let projectGridItemDeleteProject = document.createElement("div");
    projectGridItemDeleteProject.classList = "project-grid-item-delete-project";
    projectGridItemAddTodoItemDeleteProjectWrapper.appendChild(projectGridItemDeleteProject);

    // project-grid-item-delete-project fas fa-trash-alt
    let projectGridItemDeleteProjectFasFaTrashAlt = document.createElement("i");
    projectGridItemDeleteProjectFasFaTrashAlt.classList = "fas fa-trash-alt";
    projectGridItemDeleteProject.appendChild(projectGridItemDeleteProjectFasFaTrashAlt);

    // project-grid-item-todos
    let projectGridItemTodos = document.createElement("div");
    projectGridItemTodos.classList = "project-grid-item-todos";
    projectsGridItem.appendChild(projectGridItemTodos);

    for (let j = 0; j < projectlist[i].todos.length; j++) {
      // project-grid-item-todo
      let projectGridItemTodo = document.createElement("div");
      projectGridItemTodo.classList = "project-grid-item-todo";
      projectGridItemTodos.appendChild(projectGridItemTodo);

      // project-grid-item-todo-properties-wrapper
      let projectGridItemTodoPropertiesWrapper = document.createElement("div");
      projectGridItemTodoPropertiesWrapper.classList = "project-grid-item-todo-properties-wrapper";
      projectGridItemTodo.appendChild(projectGridItemTodoPropertiesWrapper);

      // project-grid-item-todo-title
      let projectGridItemTodoTitle = document.createElement("div");
      projectGridItemTodoTitle.classList = "project-grid-item-todo-title";
      projectGridItemTodoPropertiesWrapper.appendChild(projectGridItemTodoTitle);

      let projectGridItemTodoTitleText = document.createTextNode(`${projectlist[i].todos[j].title}`);
      projectGridItemTodoTitle.appendChild(projectGridItemTodoTitleText);

      // project-grid-item-todo-description
      let projectGridItemTodoDescription = document.createElement("div");
      projectGridItemTodoDescription.classList = "project-grid-item-todo-description";
      projectGridItemTodoPropertiesWrapper.appendChild(projectGridItemTodoDescription);

      let projectGridItemTodoDescriptionText = document.createTextNode(`${projectlist[i].todos[j].description}`);
      projectGridItemTodoDescription.appendChild(projectGridItemTodoDescriptionText);

      // project-grid-item-todo-priority
      let projectGridItemTodoPriority = document.createElement("div");
      projectGridItemTodoPriority.classList = "project-grid-item-todo-priority";
      projectGridItemTodoPropertiesWrapper.appendChild(projectGridItemTodoPriority);

      let projectGridItemTodoPriorityText = document.createTextNode(`Priority: ${projectlist[i].todos[j].priority}`);
      projectGridItemTodoPriority.appendChild(projectGridItemTodoPriorityText);

      // project-grid-item-todo-notes
      let projectGridItemTodoNotes = document.createElement("div");
      projectGridItemTodoNotes.classList = "project-grid-item-todo-notes";
      projectGridItemTodoPropertiesWrapper.appendChild(projectGridItemTodoNotes);

      let projectGridItemTodoNotesText = document.createTextNode(`${projectlist[i].todos[j].notes}`);
      projectGridItemTodoNotes.appendChild(projectGridItemTodoNotesText);

      // project-grid-item-todo-finished
      let projectGridItemTodoFinished = document.createElement("div");
      projectGridItemTodoFinished.classList = "project-grid-item-todo-finished";
      projectGridItemTodoPropertiesWrapper.appendChild(projectGridItemTodoFinished);

      let projectGridItemTodoFinishedText = document.createTextNode(`Finished: ${projectlist[i].todos[j].checklist}`);
      projectGridItemTodoFinished.appendChild(projectGridItemTodoFinishedText);

      // project-grid-item-todo-duedate-expand-wrapper
      let projectGridItemTodoDuedateExpandWrapper = document.createElement("div");
      projectGridItemTodoDuedateExpandWrapper.classList = "project-grid-item-todo-duedate-expand-wrapper";
      projectGridItemTodoPropertiesWrapper.appendChild(projectGridItemTodoDuedateExpandWrapper);

      // project-grid-item-todo-duedate
      let projectGridItemTodoDuedate = document.createElement("div");
      projectGridItemTodoDuedate.classList = "project-grid-item-todo-duedate";
      projectGridItemTodoDuedateExpandWrapper.appendChild(projectGridItemTodoDuedate);

      let projectGridItemTodoDuedateText = document.createTextNode(`${projectlist[i].todos[j].dueDate}`)
      projectGridItemTodoDuedate.appendChild(projectGridItemTodoDuedateText);

      // project-grid-item-todo-expand
      let projectGridItemTodoExpand = document.createElement("div");
      projectGridItemTodoExpand.classList = "project-grid-item-todo-expand";
      projectGridItemTodoDuedateExpandWrapper.appendChild(projectGridItemTodoExpand);

      // project-grid-item-todo-expand-down fas fa-angle-double-down
      let projectGridItemTodoExpandDownFasFaAngleDoubleDown = document.createElement("i");
      projectGridItemTodoExpandDownFasFaAngleDoubleDown.classList = "project-grid-item-todo-expand-down fas fa-angle-double-down";
      projectGridItemTodoExpand.appendChild(projectGridItemTodoExpandDownFasFaAngleDoubleDown);

      // project-grid-item-todo-expand-up fas fa-angle-double-up
      let projectGridItemTodoExpandUpFasFaAngleDoubleUp = document.createElement("i");
      projectGridItemTodoExpandUpFasFaAngleDoubleUp.classList = "project-grid-item-todo-expand-up fas fa-angle-double-up";
      projectGridItemTodoExpand.appendChild(projectGridItemTodoExpandUpFasFaAngleDoubleUp);

      // project-grid-item-todo-buttons-wrapper
      let projectGridItemTodoButtonsWrapper = document.createElement("div");
      projectGridItemTodoButtonsWrapper.classList = "project-grid-item-todo-buttons-wrapper";
      projectGridItemTodo.appendChild(projectGridItemTodoButtonsWrapper);

      // project-grid-item-todo-buttons-checklist
      let projectGridItemTodoButtonsChecklist = document.createElement("div");
      projectGridItemTodoButtonsChecklist.classList = "project-grid-item-todo-buttons-checklist";
      projectGridItemTodoButtonsWrapper.appendChild(projectGridItemTodoButtonsChecklist);

      // project-grid-item-todo-buttons-checklist fas fa-check
      let projectGridItemTodoButtonsChecklistFasFaCheck = document.createElement("i");
      projectGridItemTodoButtonsChecklistFasFaCheck.classList = "fas fa-check";
      projectGridItemTodoButtonsChecklist.appendChild(projectGridItemTodoButtonsChecklistFasFaCheck);

      // project-grid-item-todo-buttons-update
      let projectGridItemTodoButtonsUpdate = document.createElement("div");
      projectGridItemTodoButtonsUpdate.classList = "project-grid-item-todo-buttons-update";
      projectGridItemTodoButtonsWrapper.appendChild(projectGridItemTodoButtonsUpdate);

      // project-grid-item-todo-buttons-update fas fa-edit
      let projectGridItemTodoButtonsUpdateFasFaEdit = document.createElement("i");
      projectGridItemTodoButtonsUpdateFasFaEdit.classList = "fas fa-edit";
      projectGridItemTodoButtonsUpdate.appendChild(projectGridItemTodoButtonsUpdateFasFaEdit);

      // project-grid-item-todo-buttons-delete
      let projectGridItemTodoButtonsDelete = document.createElement("div");
      projectGridItemTodoButtonsDelete.classList = "project-grid-item-todo-buttons-delete";
      projectGridItemTodoButtonsWrapper.appendChild(projectGridItemTodoButtonsDelete);

      // project-grid-item-todo-buttons-delete fas fa-trash-alt
      let projectGridItemTodoButtonsDeleteFasFaTrashAlt = document.createElement("div");
      projectGridItemTodoButtonsDeleteFasFaTrashAlt.classList = "fas fa-trash-alt";
      projectGridItemTodoButtonsDelete.appendChild(projectGridItemTodoButtonsDeleteFasFaTrashAlt);

    }
    
    // project-grid-item-todo project-grid-item-todo-add-todo-item
    let projectGridItemTodoAddTodoItem = document.createElement("div");
    projectGridItemTodoAddTodoItem.classList = "project-grid-item-todo project-grid-item-todo-add-todo-item";
    projectGridItemTodos.appendChild(projectGridItemTodoAddTodoItem);

    let projectGridItemTodoAddTodoItemText = document.createTextNode("ADD TODO ITEM");
    projectGridItemTodoAddTodoItem.appendChild(projectGridItemTodoAddTodoItemText);

  }
  // add minimize and maximize functionality when clicking on gridItemTodo
  collapseGridItemTodo();

  // display createTodoItemForm when clicked on the add todo item wide button at the bottom
  displayCreateTodoItemFormAddTodoItemButton(projectlist);

  // display createTodoItemForm when click on the plus icon next to the project title
  displayCreateTodoItemFormProjectGridItemAddTodoItem(projectlist);


});

export {renderProjectsTodos};

/*
  let allprojects = [ 
    {projectTitle: "project1", todos: [{title: "testTitle1", description: "testDescription1", priority: "normal", projectName: "project1", notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}, {title: "testTitle2", description: "testDescription2", priority: "normal", projectName: "project1", notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}]},
    {projectTitle: "project2", todos: [{title: "testTitle3", description: "testDescription3", priority: "normal", projectName: "project1", notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}, {title: "testTitle4", description: "testDescription4", priority: "normal", projectName: "project1", notes: "notes example", checklist: "yes", dueDate: "11/12/2020"}]},
  ];
*/

/*
  <div class="projects-grid">
    <div class="projects-grid-item">
      <div class="project-grid-item-title-add-todo-item-wrapper">
        <h2 class="project-grid-item-title">
          project1
        </h2>
        <div class="project-grid-item-add-todo-item-delete-project-wrapper">
          <div class="project-grid-item-add-todo-item">
            <i class="fas fa-plus"></i>
          </div>
          <div class="project-grid-item-update-project-title">
            <i class="fas fa-edit"></i>
          </div>
          <div class="project-grid-item-delete-project">
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div class="project-grid-item-todos">
        <div class="project-grid-item-todo">
          <div class="project-grid-item-todo-properties-wrapper">
            <div class="project-grid-item-todo-title">project-grid-item-todo-title</div>
            <div class="project-grid-item-todo-description">project-grid-item-todo-description</div>
            <div class="project-grid-item-todo-priority">Priotity: high</div>
            <div class="project-grid-item-todo-notes">notes</div>
            <div class="project-grid-item-todo-finished">Finished: no</div>          
            <div class="project-grid-item-todo-duedate-expand-wrapper">
              <div class="project-grid-item-todo-duedate">01/01/2020</div>
              <div class="project-grid-item-todo-expand">
                <i class="project-grid-item-todo-expand-down fas fa-angle-double-down"></i>
                <i class="project-grid-item-todo-expand-up fas fa-angle-double-up"></i>
              </div>
            </div>
          </div>
          <div class="project-grid-item-todo-buttons-wrapper">
            <div class="project-grid-item-todo-buttons-checklist">
              <i class="fas fa-check"></i>
            </div>
            <div class="project-grid-item-todo-buttons-update">
              <i class="fas fa-edit"></i>
            </div>
            <div class="project-grid-item-todo-buttons-delete">
              <i class="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
        <div class="project-grid-item-todo">
          <div class="project-grid-item-todo-properties-wrapper">
            <div class="project-grid-item-todo-title">project-grid-item-todo-title</div>
            <div class="project-grid-item-todo-description">project-grid-item-todo-description</div>
            <div class="project-grid-item-todo-priority">Priotity: high</div>
            <div class="project-grid-item-todo-notes">notes</div>
            <div class="project-grid-item-todo-finished">Finished: no</div>          
            <div class="project-grid-item-todo-duedate-expand-wrapper">
              <div class="project-grid-item-todo-duedate">01/01/2020</div>
              <div class="project-grid-item-todo-expand">
                <i class="project-grid-item-todo-expand-down fas fa-angle-double-down"></i>
                <i class="project-grid-item-todo-expand-up fas fa-angle-double-up"></i>
              </div>
            </div>
          </div>
          <div class="project-grid-item-todo-buttons-wrapper">
            <div class="project-grid-item-todo-buttons-checklist">
              <i class="fas fa-check"></i>
            </div>
            <div class="project-grid-item-todo-buttons-update">
              <i class="fas fa-edit"></i>
            </div>
            <div class="project-grid-item-todo-buttons-delete">
              <i class="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
        <div class="project-grid-item-todo project-grid-item-todo-add-todo-item">ADD TODO ITEM</div>
      </div>
    </div>
        
  </div>
*/

/*
  // main-wrapper-contact
  let mainWrapperContact = document.createElement("div");
  mainWrapperContact.classList = "main-wrapper-contact";
  content.appendChild(mainWrapperContact);


  // main-contact-location-address-street
  let mainContactLocationAddressStreet = document.createElement("div");
  mainContactLocationAddressStreet.classList = "main-contact-location-address-street";
  mainContactLocationAddress.appendChild(mainContactLocationAddressStreet);

  let mainContactLocationAdressStreetText = document.createTextNode("Test Street 11");
  mainContactLocationAddressStreet.appendChild(mainContactLocationAdressStreetText);
*/
