import { getDataProject } from "./projects";
import { clearDataDOMProject } from "../Generic/clearDoM";

export function displayDataDOMProject()
{
    const parentElementProject = document.querySelector('#Projects');
    clearDataDOMProject(parentElementProject);
    const arrayDataProject = getDataProject();
    for(let i = 0; i < arrayDataProject.length; i++){
        parentElementProject.appendChild(createDOMProjectElements(arrayDataProject[i]));
    }    
}

function createDOMProjectElements(projectObject){
    const parentElementCurrentProject = document.createElement('div');
    const projectTitle = document.createElement('h3');
    const btnDelete = document.createElement('button');
   
    const projectData = {
        parentElementCurrentProject:parentElementCurrentProject,
        projectTitle:projectTitle,
        projectObject:projectObject,
        btnDelete: btnDelete

    }

    // Is there an easier and more readable way to simplify both the function call and functions parameters? 
    // Destructuring not too clear but takeaway is you can only simplify one side either where it is called of the definition of the func
    // if anything having same variable names is important and changing name = increased word count so why is this advantageous simplification which achieves consistency on one side
    setDOMProjectElementsData(projectData); 
   
    parentElementCurrentProject.appendChild(projectTitle);
    parentElementCurrentProject.appendChild(btnDelete)

    return parentElementCurrentProject;
}

function setDOMProjectElementsData({parentElementCurrentProject,projectTitle,projectObject,btnDelete}){
    projectTitle.innerText = projectObject.title;
    btnDelete.innerText = 'delete'

}