import { setDataProject,test4 } from "./projects";
import { displayDataDOMProject } from "./setDOMData";

// Buttons Dom Behaviour

export function initializeButtons()
{
    document.querySelector('#btnCreateProject').addEventListener('click', displayModal);
    document.querySelector('#btnCreateToDo').addEventListener('click', displayModal);
    document.querySelector('#btnCreateNotes').addEventListener('click', displayModal);
    document.querySelector('.Confirm-Project').addEventListener('click', confirmBtnResponse)
}

function displayModal(element)
{
    let changeIDName = element.target.id
    changeIDName = _.upperFirst(changeIDName);
    changeIDName = `#${changeIDName}`;

    document.querySelector(changeIDName).showModal();
}

function extractProjectData(eventObj)
{
    const formElement = eventObj.target.closest('form');
    const formData = new FormData(formElement);
    for (const data of formData.values())
    {
        setDataProject(data);
    }
}

function confirmBtnResponse(eventObj){
    eventObj.preventDefault();
    extractProjectData(eventObj);
    displayDataDOMProject();

}