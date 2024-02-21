import { clearDataDOMProject } from "../Generic/clearDoM";
import { arrayNotes } from "./notes";
import { removeNoteFromArrayNotes } from "./notes";


export function displayDataDOMNotes()
{
    const parentElement = document.querySelector('#Notes');
    clearDataDOMProject(parentElement);
    for (let notesIterator = 0; notesIterator < arrayNotes.length; notesIterator++)
    {
        parentElement.appendChild(createNotesElements(notesIterator));
    }
}

function createNotesElements(notesIterator)
{
    const createParentDiv = document.createElement('div');
    const createButtonChild = document.createElement('button');
    const arrayParagraph = []
    while (arrayParagraph.length < Object.keys(arrayNotes[0].data).length)
    {
        arrayParagraph.push(document.createElement('p'));
    }

    const data = {
        createButtonChild: createButtonChild,
        arrayParagraph: arrayParagraph,
        createParentDiv: createParentDiv,
        notesIterator: notesIterator
    }
    modifyNotesElements(data)

    arrayParagraph.forEach((element) => createParentDiv.appendChild(element));
    createParentDiv.appendChild(createButtonChild);
    return createParentDiv;
}

function modifyNotesElements({ createButtonChild, arrayParagraph, createParentDiv,notesIterator })
{
    createButtonChild.addEventListener('click',removeNoteFromDoM) // event listener added
    createButtonChild.innerText = "X";
    createParentDiv.setAttribute('id', 'NoteDisplay')

    let i = 0;
    const notesObject = arrayNotes[notesIterator].data;
    for (let value in notesObject)
    {
        arrayParagraph[i].innerText = notesObject[value];
        i++;
    }
}

function removeNoteFromDoM(element){
    const noteTitle = element.target.parentElement.firstElementChild.innerText;
    // Do i need to remove the event listener how does it work when with dom? since i am adding it in a function it should the variable is scoped to the block so it shouldnt exist
    removeNoteFromArrayNotes(noteTitle);
    displayDataDOMNotes();        
}

displayDataDOMNotes();