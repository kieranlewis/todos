import Project from './Project';
import ProjectList from './ProjectList';

const projectForm = document.querySelector('#form-container');
const addProjectButton = document.querySelector('#add-project-btn');
const span = document.querySelector('.close');
const submitButton = document.querySelector('#submit-btn');

//Dummy Project
const today = Project('Today');
const project1 = Project('Create To Do List');
const project2 = Project('Pickup shopping');
const projectList = ProjectList([today, project1, project2]);

const openForm = () => {
    projectForm.style.display = 'block';
}

const closeForm = () => {
    document.querySelector('.project-form').reset();
    projectForm.style.display = 'none'
}

const submitForm = () => {
    const input = document.querySelector('#projectName');
    const newProject = Project(input.value);

    console.log(newProject);
    projectList.addProject(newProject);
    closeForm();
}

export const displayProject = (project) => {
    const container = document.querySelector('.container');
    container.innerHTML = `<h2>${project.title}</h2>`;

    if(project.tasks.length === 0) {
        container.innerHTML += '<p>No Tasks</p>';
    } else {
        // loop through all tasks and display them on page
    }
}

export const displayProjectList = (projectList) => {
    const projects = projectList.projects;
    const projectListDiv = document.querySelector('.project-list');

    projectListDiv.innerHTML = '';
    
    for(let i = 0; i < projects.length; i++) {
        const link = document.createElement('a');
        link.innerText = projects[i].title;
        link.href = '';
        link.classList.add('project-link');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            displayProject(projects[i]);
        });
        projectListDiv.appendChild(link);
    }
}

export const init = () => {
    displayProject(projectList.projects[0]);
    displayProjectList(projectList);
}

// event listeners
addProjectButton.addEventListener('click', openForm);
span.addEventListener('click', closeForm);
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitForm();
    displayProjectList(projectList);
});