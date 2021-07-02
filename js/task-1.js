let editHandler = function()
{
    let container = this.parentNode.parentNode.lastChild;
    container.setAttribute('class', 'visible');
}

let permissionEditHandler = function()
{
    let text = this.previousSibling.value;
    this.parentNode.parentNode.firstChild.textContent = text;
    this.parentNode.setAttribute('class', 'hidden');
    
}

let removeHandler = function()
{   
    let currentNode = this.parentNode.parentNode;
    let taskList = document.getElementsByClassName('task-list')[0];
    taskList.removeChild(currentNode);
};

let handler = function(){

    let taskList = document.getElementsByClassName('task-list')[0];
    let rect1 = document.getElementsByClassName("addTaskText")[0];
    let text = rect1.value;
    let mainElement = document.createElement("div");
    mainElement.setAttribute("class", "task");

    let elem = document.createElement("div");
    elem.setAttribute("class", "task-text");
    let textNode = document.createTextNode(text);
    elem.appendChild(textNode);

    let editButton = document.createElement('Button');
    editButton.setAttribute('class','editBtn');
    editButton.textContent = 'edit';

    let removeButton = document.createElement('Button');
    removeButton.setAttribute('class','removeBtn');
    removeButton.addEventListener("click",removeHandler);
    removeButton.textContent = 'remove';

    let editCont = document.createElement('div');
    editCont.setAttribute('class', 'hidden');

    let editInput = document.createElement('input');
    editInput.setAttribute('class', 'edit-input');
    editButton.addEventListener('click', editHandler);

    let permissionButton = document.createElement('Button');
    permissionButton.setAttribute('class','permissonBtn');
    permissionButton.textContent = 'Ok';
    permissionButton.addEventListener('click', permissionEditHandler);

    editCont.appendChild(editInput);
    editCont.appendChild(permissionButton);

    let elemButtons = document.createElement("div");
    elemButtons.setAttribute("class", "task-button");
    elemButtons.appendChild(editButton);
    elemButtons.appendChild(removeButton);
    mainElement.appendChild(elem);
    mainElement.appendChild(elemButtons);
    mainElement.appendChild(editCont);
    

    taskList.appendChild(mainElement);
};

var rect = document.getElementsByClassName("addTaskButton")[0];
rect.addEventListener("click", handler);