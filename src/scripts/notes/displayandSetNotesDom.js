import { clearDataDOMProject } from "../Generic/clearDoM";
import { arrayNotes } from "./notes";


export function displayDataDOMNotes(){
    const parentElement = document.querySelector('#Notes');
    clearDataDOMProject(parentElement);
    parentElement.appendChild(createNotesElements());

}

function createNotesElements(){
    const createParentDiv = document.createElement('div');
    const createButtonChild = document.createElement('button');
    const arrayParagraph =[]
    while(arrayParagraph.length < Object.keys(arrayNotes[0].data).length){
        arrayParagraph.push(document.createElement('p'));
    }

    const data = {
        createButtonChild: createButtonChild,
        arrayParagraph: arrayParagraph,
        createParentDiv: createParentDiv
    }
    modifyNotesElements(data)

    arrayParagraph.forEach((element)=> createParentDiv.appendChild(element));
    createParentDiv.appendChild(createButtonChild);
    return createParentDiv;

}

function modifyNotesElements({createButtonChild,arrayParagraph,createParentDiv}){
    createButtonChild.innerText = "X";
    createParentDiv.setAttribute('id','NoteDisplay')

    let i = 0;
    const notesObject = arrayNotes[0].data;
    for(let value in notesObject ){
        arrayParagraph[i].innerText = notesObject[value];
        i++;
    }
}
