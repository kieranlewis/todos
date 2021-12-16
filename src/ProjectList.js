const ProjectList = (projects) => {
    const addProject = (project) => { 
        projects.push(project);
    }

    return { projects, addProject };
}

export default ProjectList;