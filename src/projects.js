class Project
{
    constructor(title)
    {
        this.title = title;
    }
}

const arrayOfProjects = [];
const DefaultProject = new Project('DefaultProject');
arrayOfProjects.push(DefaultProject);

function test4()
{
    arrayOfProjects.forEach((projectInstance) =>
    {
        console.log(projectInstance);
    })
}

export {Project,arrayOfProjects,test4}