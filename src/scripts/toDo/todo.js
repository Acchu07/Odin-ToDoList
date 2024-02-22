import { parse } from "date-fns";
import { setProjectToDoList } from "../projects/projects";


class ToDo
{
    constructor(title, description, dueDate, priority,indexNumber)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.indexNumber = parseInt(indexNumber);
        this.toDoIndexNumber = null;
    }
}


// const NewToDo = new ToDo('a', 'bbbbbb', '24-02-2024', 'high');

export function SetDataToDoObject(ObjectValues){
    const newToDoObject = new ToDo(...ObjectValues);
    setProjectToDoList(newToDoObject);
}