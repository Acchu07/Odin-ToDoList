import { update } from "lodash";
import { clearDataDOMProject } from "../Generic/clearDoM";
import { getDataProject } from "../projects/projects"

export function updateToDoProjectOptions()
{
    const dataProjectArray = getDataProject();
    const parentElement = document.querySelector('#ToDo-Project');

    clearDataDOMProject(parentElement);

    for (let index = 0; index < dataProjectArray.length; index++)
    {
        parentElement.appendChild(createDOMOptionsProject(dataProjectArray[index], index))
    }
}

function createDOMOptionsProject(Object, index)
{
    const createOptionElement = document.createElement('option');
    // createOptionElement.addEventListener('click',updateToDoProjectValue) // This does not work check modal in simple js

    createOptionElement.innerText = Object.title;
    createOptionElement.value = index;
    return createOptionElement;
}

export function displayToDoDefaultProject()
{
    const DefaultProject = getDataProject()[0];
    console.log(DefaultProject);
}


export function SetToDoOnDOM(eventObject)
{
    const projectToDoDisplayDOM = getDataProject()[eventObject.srcElement.dataset.indexValue]["toDoList"];
    clearDataDOMProject(document.querySelector('#ToDo'));
    projectToDoDisplayDOM.forEach(createToDoDOMElements)
}

function createToDoDOMElements(object,index)
{
    const parentElement = document.querySelector('#ToDo');
    const objectContainerElement = document.createElement('div');
    const ObjectTitle = document.createElement('p');
    const objectDate = document.createElement('p');
    const objectCheckBox = document.createElement('input');


    parentElement.appendChild(objectContainerElement);
    objectContainerElement.appendChild(objectCheckBox);
    objectContainerElement.appendChild(ObjectTitle);
    objectContainerElement.appendChild(objectDate);

    const data = {
        object: object,
        objectContainerElement: objectContainerElement,
        objectTitle: ObjectTitle,
        objectDate: objectDate,
        objectCheckBox: objectCheckBox,
        index:index
    }

    toDoDOMElementsValues(data)

}

function toDoDOMElementsValues({ object, objectContainerElement, objectTitle, objectDate, objectCheckBox, index})
{
    object.toDoIndexNumber = index;
    objectTitle.innerText = object.title;
    objectDate.innerText = object.dueDate;
    objectCheckBox.type = 'checkbox'

    objectContainerElement.classList.add('toDo')
    objectTitle.addEventListener('click', () => {showModalWindow(object)})
}

function showModalWindow(object) // this one is quite dependent on closure need to look up closure again for a better understanding
{
    document.querySelector("#BtnCreateToDo").showModal();
    document.querySelector('#ToDo-Title').value = object.title;
    document.querySelector('#ToDo-Description').value = object.description;
    document.querySelector('#ToDo-DueDate').value = object.dueDate;
    document.querySelector('#ToDo-Priority').value = object.priority;
    
    getDataProject()[object.indexNumber]["toDoList"].splice(object.toDoIndexNumber); // this assumes that the confirm button is pressed
}


function updateToDoProjectValue()
{
    console.log("entering EventListener");

}