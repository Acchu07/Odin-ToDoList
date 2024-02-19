import { Project,arrayOfProjects,test4 } from "./projects";


// Buttons Dom Behaviour

export function initializeButtons()
{
    document.querySelector('#btnCreateProject').addEventListener('click', displayModal);
    document.querySelector('#btnCreateToDo').addEventListener('click', displayModal);
    document.querySelector('#btnCreateNotes').addEventListener('click', displayModal);
    document.querySelector('.Confirm-Project').addEventListener('click', extractProjectData)
}


// Not that important right now but the below Heavily reliant on the HTML Naming Schematic 
// and unsure if it affects O from Solid due to the fact that what is calling it is 
// the event listener but just to be sure that concept has been clear ask for feedback on odin 


function displayModal(element)
{
    let changeIDName = element.target.id
    changeIDName = _.upperFirst(changeIDName);
    changeIDName = `#${changeIDName}`;

    document.querySelector(changeIDName).showModal();
}

function extractProjectData(eventObj)
{
    eventObj.preventDefault();
    const test = document.querySelector('#Project-Title').value;
    const test1 = eventObj.target.closest('form');
    const newform = new FormData(test1);
    for (const check of newform.values())
    {
        console.log(check);
        arrayOfProjects.push(new Project(check));
    }
    test4();
}