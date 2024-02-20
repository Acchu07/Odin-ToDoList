import { setDataProject,test4 } from "./scripts/projects/projects";
import { displayDataDOMProject } from "./scripts/projects/displayandSetProjectDom";
import { displayDataDOMNotes } from "./scripts/notes/displayandSetNotesDom";

// Buttons Dom Behaviour

export function initializeButtons()
{
    document.querySelector('#btnCreateProject').addEventListener('click', displayModal);
    document.querySelector('#btnCreateToDo').addEventListener('click', displayModal);
    document.querySelector('#btnCreateNotes').addEventListener('click', displayModal);
    document.querySelector('.Confirm-Project').addEventListener('click', confirmBtnResponseProject)
    document.querySelector('.Confirm-Notes').addEventListener('click', confirmBtnResponseNotes)
}

function displayModal(element)
{
    let changeIDName = element.target.id
    changeIDName = _.upperFirst(changeIDName);
    changeIDName = `#${changeIDName}`;

    document.querySelector(changeIDName).showModal();
}


// separate file for data extraction? possible to make function dynamic in nature to respond to different types of data? but this would contradict with o of solid?
function extractProjectData(eventObj)
{
    const formElement = eventObj.target.closest('form');
    const formData = new FormData(formElement);
    for (const data of formData.values())
    {
        setDataProject(data);
    }
}

function confirmBtnResponseProject(eventObj){
    eventObj.preventDefault();
    extractProjectData(eventObj);
    displayDataDOMProject();

}

function confirmBtnResponseNotes(eventObj){
    eventObj.preventDefault();
    displayDataDOMNotes();
}