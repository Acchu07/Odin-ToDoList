import { parse } from "date-fns";
import { setProjectToDoList } from "../projects/projects";


class ToDo
{
    constructor(title, description, dueDate, priority,project)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project
    }
}


const NewToDo = new ToDo('a', 'bbbbbb', '24-02-2024', 'high');

export function SetDataToDoObject(ObjectValues){
    const newToDoObject = new ToDo(...ObjectValues);
    // Need logic if project name is same then how to differentiate
    setProjectToDoList(newToDoObject);
}

export { NewToDo }