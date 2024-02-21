import { update } from "lodash";
import { clearDataDOMProject } from "../Generic/clearDoM";
import { getDataProject } from "../projects/projects"

export function updateToDoProjectOptions(){
    const dataProjectArray = getDataProject();
    const parentElement = document.querySelector('#ToDo-Project');

    clearDataDOMProject(parentElement);
    
    for (let index = 0; index < dataProjectArray.length; index++) {
        parentElement.appendChild(createDOMOptionsProject(dataProjectArray[index],index))   
    }
}

function createDOMOptionsProject(Object,index){
    const createOptionElement = document.createElement('option');
    createOptionElement.addEventListener('click',updateToDoProjectValue) // This does not work

    createOptionElement.innerText = Object.title;
    createOptionElement.dataset.indexNumber = index;
    return createOptionElement;
}

export function displayToDoDefaultProject(){
    const DefaultProject = getDataProject()[0];
    console.log(DefaultProject);
}

function updateToDoProjectValue(index){
    console.log("entering EventListener");

}