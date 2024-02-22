import _ from 'lodash';

class Notes
{
    #title;
    #description
    static #computedValue = 1;
    constructor(description)
    {
        this.#title = `Note ${Notes.#computedValue++}`
        this.#description = description;
    }
    get data()
    {
        return { title: this.#title, description: this.#description };
    }
    get title(){
        return this.#title;
    }

    static computedValueRestart(){
        Notes.#computedValue = 1;
    }
}

const arrayNotes = [];
const testNote = new Notes(`Some Data present in here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, illoitaque est quas eligendi quis repellendus placeat delectus. Et placeat porro delectus illo, sit quos vitae pariatur impedit maxime reprehenderit?`);
arrayNotes.push(testNote);

export function setDataNotes(formData){
    const createNoteObject = new Notes(formData);
    arrayNotes.push(createNoteObject);    
}

export function removeNoteFromArrayNotes(noteTitle){
    _.remove(arrayNotes, (NoteObjects)=> NoteObjects.title.includes(noteTitle));
    if(!arrayNotes.length){
        Notes.computedValueRestart();
    }
}

export { arrayNotes }



