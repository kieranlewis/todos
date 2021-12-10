import Project from './Project';
import ProjectList from './ProjectList';

const projectForm = document.querySelector('#form-container');
const addProjectButton = document.querySelector('#add-project-btn');
const span = document.querySelector('.close');
const submitButton = document.querySelector('#submit-btn');

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
    //ProjectList.addProject(newProject);
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

// event listeners
addProjectButton.addEventListener('click', openForm);
span.addEventListener('click', closeForm);
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitForm();
});