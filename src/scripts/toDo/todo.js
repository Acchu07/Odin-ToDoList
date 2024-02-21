class ToDo
{
    constructor(title, description, dueDate, priority)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}


const NewToDo = new ToDo('a', 'bbbbbb', '24-02-2024', 'high');

export { NewToDo }