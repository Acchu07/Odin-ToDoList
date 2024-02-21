import { setDataProject } from "../projects/projects";
import { setDataNotes } from "../notes/notes";


// separate file for data extraction? possible to make function dynamic in nature to respond to different types of data? but this would contradict with o of solid?
export function extractFormData(eventObj)
{
    const formElement = eventObj.target.closest('form');
    const formData = new FormData(formElement);
    if (formData.has('Project-Title'))
    {
        for (const data of formData.values())
        {
            setDataProject(data);
        }
    }
    else if(formData.has('CreateNotes-Description')){
        for (const data of formData.values())
        {
            setDataNotes(data);
        }
    }
}