export function clearDataDOMProject(parentElementProject){
    while(parentElementProject.firstElementChild){
        parentElementProject.removeChild(parentElementProject.firstElementChild)        
    }
}