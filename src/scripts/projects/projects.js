class Project
{
    constructor(title)
    {
        this.title = title;
        this.toDoList = [];
    }
}

const arrayOfProjects = [];
const DefaultProject = new Project('DefaultProject');

arrayOfProjects.push(DefaultProject);

function setDataProject(title)
{
    const newProject = new Project(title);
    arrayOfProjects.push(newProject);
}

function getDataProject()
{
    const dataOfProjectArrays = arrayOfProjects.slice();
    return dataOfProjectArrays;
}

export function setProjectToDoList(Object)
{
    arrayOfProjects[Object.indexNumber]["toDoList"].push(Object);
}



function test4()
{
    arrayOfProjects.forEach((projectInstance) =>
    {
        console.log(projectInstance);
    })
}

export { setDataProject, getDataProject }