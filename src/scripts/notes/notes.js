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
}

const arrayNotes = [];
const testNote = new Notes(`ome Data present in here bla bla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, illoitaque est quas eligendi quis repellendus placeat delectus. Et placeat porro delectus illo, sit quos vitae pariatur impedit maxime reprehenderit?`);
arrayNotes.push(testNote);

export { arrayNotes }



