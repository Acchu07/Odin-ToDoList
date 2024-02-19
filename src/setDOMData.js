import { getDataProject } from "./projects";

export function displayDataDOMProject()
{
    const parentElementProject = document.querySelector('#Projects');
    clearDataDOMProject(parentElementProject);
    // getDataProject().forEach(createDOMProjectElements); - On Hold
    
}

function createDOMProjectElements(element,index){
    const parentElementCurrentProject = document.createElement('div');
    const projectTitle = document.createElement('h3');
    const btnDelete = document.createElement('btn');
    console.log({projectTitle,element,index});
    return projectTitle;
}



function clearDataDOMProject(parentElementProject){
    while(parentElementProject.firstElementChild){
        parentElementProject.removeChild(parentElementProject.firstElementChild)        
    }
}