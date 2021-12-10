import Project from './Project';
import ProjectList from './ProjectList';
import Task from './Task';

const projectForm = document.querySelector('#form-container');
const addProjectButton = document.querySelector('#add-project-btn');
const span = document.querySelector('.close');
const submitButton = document.querySelector('#submit-btn');
const container = document.querySelector('.container');

//Dummy Project
const today = Project('Today');
const project1 = Project('Create To Do List');
const project2 = Project('Pickup shopping');
const projectList = ProjectList([today, project1, project2]);
const task1 = Task('Fill Car', 'Go to the petrol station to fill up the car', new Date(), 3);
const task2 = Task('Drive to supermarket', '', new Date(), 1);
project2.addTask(task1);
project2.addTask(task2);

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

const addTask = () => {
    console.log('You are clicking a button');
}

const displayTask = (task, ul) => {
    const li = document.createElement('li');
    li.innerText = task.title;

    ul.appendChild(li);
}

export const displayProject = (project) => {
    const h2 = document.createElement('h2');
    const button = document.createElement('button');
    const text = document.createElement('p');

    h2.innerText = project.title;
    button.innerText = '+Add Task';

    button.classList.add('add-task-btn');

    button.addEventListener('click', addTask);

    container.innerHTML = '';
    container.appendChild(h2);

    if(project.tasks.length === 0) {
        text.innerText = 'No Tasks';
        container.appendChild(text);  
    } else {
        const taskDiv = document.createElement('div');
        const ul = document.createElement('ul');

        taskDiv.classList.add('task-div');
    
        container.appendChild(taskDiv);
        taskDiv.appendChild(ul);

        // loop through all tasks and display them on page
        for(let i = 0; i < project.tasks.length; i++) displayTask(project.tasks[i], ul);
    }

    container.appendChild(button);
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