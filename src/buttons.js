import { displayDataDOMProject } from "./scripts/projects/displayandSetProjectDom";
import { displayDataDOMNotes } from "./scripts/notes/displayandSetNotesDom";
import { extractFormData } from "./scripts/Generic/extractDataform";


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

function confirmBtnResponseProject(eventObj)
{
    eventObj.preventDefault();
    extractFormData(eventObj);
    displayDataDOMProject();
}

function confirmBtnResponseNotes(eventObj)
{
    eventObj.preventDefault();
    extractFormData(eventObj);
    displayDataDOMNotes();
}